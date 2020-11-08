import React from 'react';
import styled from 'styled-components';

const VideoPlayer = ({videoSrcURL, videoTitle, width, height, ...props}) => (
  <VideoWrapper>
    <VideoContainer>
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        frameBorder='0'
        webkitallowfullscreen='true'
        mozallowfullscreen='true'
        allowFullScreen
        width={width}
        height={height}
      />
    </VideoContainer>
  </VideoWrapper>
);
export default VideoPlayer;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
  max-width: 100%;
`;
const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
