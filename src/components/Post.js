import React from 'react';

import { navigate } from 'gatsby';
import styled from 'styled-components';

import Layout from './Layout';
import { Modal, Frame } from '@react95/core';
import { FileText } from '@react95/icons';
import { useMediaQuery } from 'react-responsive';

const PostModal = styled(Modal)`
  position: relative;
  top: 10vh;
  margin-left: auto;
  margin-right: auto;
  width: 80vw;
  height: 75vh;
  
  @media (max-width: 1112px) and (max-height: 834px) {
    top: 5vh;
    width: 80vw;
    height: 80vh;
  }
`;//@TODO: Support tabs desktop mode.

const ContentBox = styled.div`
  padding-top: 1em;
  padding-left: 1em;
  word-break: keep-all;
  zoom: 80%;
`;

export default function Post({ children: content, pageContext: { frontmatter: { title, date } } }) {
  const hasNarrowScreen = useMediaQuery({ query: '(max-width: 1112px)' });

  return (
    <Layout>
      <PostModal
        icon={<FileText variant='32x32_4' />}
        title={`${title} (${date.replace(/T.+/, '')})`}
        closeModal={() => navigate(-1)}
        menu={[
          {
            name: 'File'
          },
          {
            name: 'Edit'
          },
          {
            name: 'Search'
          },
          {
            name: 'Help'
          }
        ]}
      >
        <Frame height={hasNarrowScreen ? '67vh' : '62vh'} padding={4}>
          <Frame css='overflow-y: auto' height='100%' boxShadow='in' bg='white'>
            <ContentBox>
              {content}
            </ContentBox>
          </Frame>
        </Frame>
      </PostModal>
    </Layout>
  );
}