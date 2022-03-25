import React from 'react';

import { navigate } from 'gatsby';
import styled from 'styled-components';

import { Modal, Frame } from '@react95/core';
import { Msnstart100 } from '@react95/icons';
import Layout from '../components/Layout';
import { useMediaQuery } from 'react-responsive';

const AboutModal = styled(Modal)`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 70vw;
  height: 70vh;
  
  @media (max-height: 736px) and (max-width: 500px) {
    width: 85vw;
    height: 70vh;
  }
`;

const ContentBox = styled.div`
  padding-top: 1em;
  padding-left: 1em;
  word-break: keep-all;
  zoom: 80%;
`;

export default function About() {
  const hasNarrowScreen = useMediaQuery({ query: '(max-width: 1112px)' });


  return (
    <Layout>
      <AboutModal
        icon={<Msnstart100 variant='32x32_4' />}
        title='About.exe'
        closeModal={() => navigate(-1)}
      >
        <Frame height={hasNarrowScreen ? '67vh' : '62vh'} padding={4}>
          <Frame css='overflow-y: auto' height='100%' boxShadow='in' bg='white'>
            <ContentBox>
              <p>세상을 방랑하는 철학가입니다. 프로그래밍과 작문, 그리고 여행을 즐기며 바삐 돌아가는 세상 속에서 느긋하게 살고자 합니다.</p>

              <hr />

              <h4>외부 링크</h4>
              <ul>
                <li>기술 블로그 : <a href='https://overcurried.com'>overcurried</a></li>
                <li>인스타그램 : <a href='https://www.instagram.com/st4rdus7__/'>@st4rdus7__</a></li>
                <li>메일 : <a href='mailto:sbshw1@gmail.com'>sbshw1@gmail.com</a></li>
              </ul>
            </ContentBox>
          </Frame>
        </Frame>
      </AboutModal>
    </Layout>
  )
}