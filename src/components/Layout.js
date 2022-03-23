import React from 'react';

import { createGlobalStyle } from 'styled-components';
import { navigate } from 'gatsby';

import { ThemeProvider, GlobalStyle as ThemeGlobalStyle, List, TaskBar } from '@react95/core'
import { FileFind, Progman44 } from '@react95/icons';
import { useNotImplementedAlert } from './NotImplementedAlert';

const GlobalStyle = createGlobalStyle`
  @media (min-height: 1024px) {
    body {
      zoom: 300%;
    }
  }

  @media (max-height: 1024px) {
    body {
      zoom: 200%;
    }
  }

  @media (max-height: 834px) {
    body {
      zoom: 170%;
    }
  }

  @media (max-height: 568px) {
    body {
      zoom: 140%;
    }
  }
  
  a {
    text-decoration: none;
    display: inline;
  }
`;

//@TODO: Desktop: Backapp layer.
export default function Layout({ children }) {
  const [showAlert, _, NotImplementedAlert] = useNotImplementedAlert(); //@TODO: Fix alert pos

  return (
    <ThemeProvider>
      <ThemeGlobalStyle />
      <GlobalStyle />

      {children}

      <TaskBar
        list={
          <List>
            <List.Item icon={<FileFind variant='32x32_4' />} onClick={showAlert}>
              Find
            </List.Item>
            <List.Item icon={<Progman44 variant='32x32_4' />} onClick={() => navigate('/')}>
              Home
            </List.Item>
          </List>
        }
      />
    </ThemeProvider>
  )
}