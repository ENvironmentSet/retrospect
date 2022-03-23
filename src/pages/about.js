import React from 'react';

import { navigate } from 'gatsby';
import styled from 'styled-components';

import { Modal, Tabs, Tab } from '@react95/core';
import { Msnstart100 } from '@react95/icons';
import Layout from '../components/Layout';

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

export default function About() {
  return (
    <Layout>
      <AboutModal
        icon={<Msnstart100 variant='32x32_4' />}
        title='About.exe'
        closeModal={() => navigate(-1)}
      >
        <Tabs>
          <Tab title='programming'>
          </Tab>
          <Tab title='poem'>작성중</Tab>
          <Tab title='fashion'>작성중</Tab>
        </Tabs>
      </AboutModal>
    </Layout>
  )
}