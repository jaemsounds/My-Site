import React from 'react';
import styled from 'styled-components';
// utils
import {ParseHTML} from '../utils/ParseHTML';

// components
import Layout from '../components/layout';
import VideoPlayer from '../components/Shared/VideoPlayer';

const Video = ({pageContext}) => {
  const youtubeEmbed = `https://www.youtube.com/embed/${pageContext.videoUrl.video}`;
  return (
    <Layout>
      <Wrapper>
        <Content>
          <VideoPlayer videoSrcURL={youtubeEmbed} width='100%' height='100%' />
          <h1>{ParseHTML(pageContext.title)}</h1>
          {ParseHTML(pageContext.content)}
        </Content>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  @media only screen and (min-device-width: 768px) {
    width: 50%;
  }
`;

const Content = styled.div`
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
`;

export default Video;
