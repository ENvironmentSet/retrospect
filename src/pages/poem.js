import React from 'react';

import { graphql } from 'gatsby';

import { Tree } from '@react95/core';
import { FilePen } from '@react95/icons';
import Layout from '../components/Layout';
import ContentList from '../components/ContentList';

export default function Poem({ data: { allMdx: { edges } } }) {
  return (
    <Layout>
      <ContentList
        category='poem'
        contents={edges.map(({ node }) => node)}
        icon={<FilePen variation='32x32_4' />}
        contentIcon={<Tree.icons.FILE_TEXT />}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PoemContentsQuery {
    allMdx(filter: {fileAbsolutePath: {regex: "/.+/poem/.+/"}}) {
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