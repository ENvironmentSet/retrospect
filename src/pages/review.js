import React from 'react';

import { graphql } from 'gatsby';

import { Tree } from '@react95/core';
import { Mailnews20 } from '@react95/icons';
import Layout from '../components/Layout';
import ContentList from '../components/ContentList';

export default function Review({ data: { allMdx: { edges } } }) {
  return (
    <Layout>
      <ContentList
        category='review'
        contents={edges.map(({ node }) => node)}
        icon={<Mailnews20 variation='32x32_4' />}
        contentIcon={<Tree.icons.FILE_TEXT />}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ReviewContentsQuery {
    allMdx(filter: {fileAbsolutePath: {regex: "/.+/review/.+/"}}) {
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