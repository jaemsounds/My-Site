import React from 'react';
// utils
import {ParseHTML} from '../utils/ParseHTML';

// components
import Layout from '../components/layout';

import {Wrapper, Title, CardWrapper} from './templateStyles';
const Page = ({pageContext}) => {
  return (
    <Layout>
      <Wrapper>
        <CardWrapper>
          <Title>{ParseHTML(pageContext.title)}</Title>
          {ParseHTML(pageContext.content)}
        </CardWrapper>
      </Wrapper>
    </Layout>
  );
};

export default Page;
