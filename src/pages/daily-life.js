import React from 'react';

import { graphql } from 'gatsby';

import { Tree } from '@react95/core';
import { Wab321016 } from '@react95/icons';
import Layout from '../components/Layout';
import ContentList from '../components/ContentList';

export default function DailyLife({ data: { allMdx: { edges } } }) {
  return (
    <Layout>
      <ContentList
        category='daily-life'
        contents={edges.map(({ node }) => node)}
        icon={<Wab321016 variation='32x32_4' />}
        contentIcon={<Tree.icons.FILE_TEXT />}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query DailyLifeContentsQuery {
    allMdx(filter: {fileAbsolutePath: {regex: "/.+/daily-life/.+/"}}) {
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