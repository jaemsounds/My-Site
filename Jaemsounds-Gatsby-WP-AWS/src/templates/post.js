import React from 'react';
// utils
import {ParseHTML} from '../utils/ParseHTML';

import {Wrapper, CardWrapper} from './templateStyles';
// components
import Layout from '../components/layout';
const Post = ({pageContext}) => {
  return (
    <Layout>
      <Wrapper>
        <CardWrapper>
          <h1>{ParseHTML(pageContext.title)}</h1>
          {ParseHTML(pageContext.content)}
        </CardWrapper>
      </Wrapper>
    </Layout>
  );
};

export default Post;
