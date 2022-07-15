import React from 'react';
import Layout from '../components/Layout';
import { FilePen, Mmsys112, Wab321016, Mailnews20, Msnstart100 } from '@react95/icons';
import styled from 'styled-components';
import LinkWithIcon from '../components/LinkWithIcon';

const MainList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1vh;
  margin-left: 1vw;
  align-items: flex-start;
`;

//@TODO: add welcome modal
export default function Index() {
  return (
    <Layout>
      <MainList>
        <LinkWithIcon to='/about' icon={Msnstart100}>
          About.exe
        </LinkWithIcon>
        <LinkWithIcon to='/poem' icon={FilePen}>
          Poem.txt
        </LinkWithIcon>
        <LinkWithIcon to='/music' icon={Mmsys112}>
          Music.mp3
        </LinkWithIcon>
        <LinkWithIcon to='/review' icon={Mailnews20}>
          Review.ppt
        </LinkWithIcon>
        <LinkWithIcon to='/daily-life' icon={Wab321016}>
          Daily Life.hwp
        </LinkWithIcon>
      </MainList>
    </Layout>
  );
};