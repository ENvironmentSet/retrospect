import React from 'react';

import { graphql } from 'gatsby';

import { Tree } from '@react95/core';
import { Mmsys112 } from '@react95/icons';
import Layout from '../components/Layout';
import ContentList from '../components/ContentList';

export default function Music({ data: { allMdx: { edges } } }) {
  return (
    <Layout>
      <ContentList
        category='Music'
        contents={edges.map(({ node }) => node)}
        icon={<Mmsys112 variation='32x32_4' />}
        contentIcon={<Tree.icons.FILE_TEXT />}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query MusicContentsQuery {
    allMdx(filter: {fileAbsolutePath: {regex: "/.+/music/.+/"}}) {
      edges {
        node {
          frontmatter {
            date
            title
          }
          slug
        }
      }
    }
  }
`;