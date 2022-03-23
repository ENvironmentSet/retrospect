import React, { useCallback, useRef, useMemo } from 'react';

import styled from 'styled-components';
import { navigate } from 'gatsby';

import { Modal, Tree, Frame, Dropdown, Checkbox, Button, Input } from '@react95/core'
import { FolderOpen } from '@react95/icons';
import { useMediaQuery } from 'react-responsive';

const ContentsModal = styled(Modal)`
  position: relative;
  top: 10vh;
  margin-left: auto;
  margin-right: auto;
  width: 80vw;
  height: 75vh;
  
  @media (max-width: 800px) and (max-height: 600px) {
    top: 5vh;
    width: 80vw;
    height: 80vh;
  }
`;//@TODO: Support tabs desktop mode.

function buildContentTree(contents, contentIcon) {
  const tree = {};
  let id = 0;

  for (const content of contents) {
    const path = content.slug.split('/').slice(0, -2); //this removes /filename/contents from path.

    let scope = tree;
    for (const p of path) {
      if (!(p in scope)) {
        scope[p] = {
          id: id++,
          label: p,
          children: []
        };
      }

      scope = scope[p];
    }

    const leaf = {
      id: id++,
      label: content.frontmatter.title,
      icon: contentIcon,
      onClick: () => navigate(content.slug.replace(/\/content/, ''))
    };

    if (scope === tree) scope[leaf.label] = leaf;
    else scope.children.push(leaf);
  }

  return Object.values(tree);
}

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 0;
  margin-bottom: 1vh;
  
  > p {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2vh;
`;

const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0;
  
  > p {
    margin-top: 0;
    margin-bottom: 0;
  }
  
  > ${Button} {
    flex-basis: 20%;
  }
`;

export default function ContentList({ category, contents, icon, contentIcon }) {
  const goBack = useCallback(() => navigate(-1), []);
  const inputRef = useRef(null);
  const openContent = useCallback(() => navigate(`${category}/${inputRef.current?.value}`), [category]);
  const sortedContents = useMemo(() =>
    contents.slice().sort(({ frontmatter: { date: a } }, { frontmatter: { date: b } }) => new Date(a) - new Date(b)),
    [contents]
  );
  const hasNarrowScreen = useMediaQuery({ query: '(max-width: 800px)' });

  console.log(hasNarrowScreen);

  return (
    <ContentsModal
      icon={icon}
      title={category}
      closeModal={goBack}
    >
      {
        !hasNarrowScreen &&
        <HeaderBox>
          <p>Look in: </p>
          <Dropdown css='display: inline' options={[`retrospect/${category}`]} />
          <Checkbox checked>Show hidden</Checkbox>
          <Checkbox>Hide file extension</Checkbox>
        </HeaderBox>
      }

      <Frame height={hasNarrowScreen ? '100%' : '45vh'} padding={4}>
        <Frame css='overflow-y: auto' height='100%' boxShadow='in' bg='white'>
          <FolderOpen variant='16x16_4' />
          <Tree css='margin-block-start: 0px' data={buildContentTree(sortedContents, contentIcon)} />
        </Frame>
      </Frame>

      {
        !hasNarrowScreen &&
        <FooterBox>
          <FooterRow>
            <p>File name: </p>
            <Input css='width: 50%' ref={inputRef} />
            <Button onClick={openContent}>Open</Button>
          </FooterRow>

          <FooterRow>
            <p>Files of type: </p>
            <Dropdown css='display: inline' options={['text documents']} />
            <Button onClick={goBack}>Cancel</Button>
          </FooterRow>
        </FooterBox>
      }
    </ContentsModal>
  )
}