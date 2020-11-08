import React from 'react';
import styled from 'styled-components';
import {graphql, useStaticQuery} from 'gatsby';
import Layout from '../components/layout';
// components
import VideoPlayer from '../components/Shared/VideoPlayer';

const Videos = () => {
  const data = useStaticQuery(graphql`
    query getAllVideos {
      wordpress {
        videos {
          edges {
            node {
              content
              date
              link
              title
              slug
              excerpt
              videoUrl {
                video
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Wrapper>
        {data.wordpress.videos.edges.map((videoItem) => (
          <CardWrapper key={videoItem.node.id}>
            <VideoPlayer
              videoSrcURL={`https://www.youtube.com/embed/${videoItem.node.videoUrl.video}`}
              width='100%'
              height='100%'
              z-index='0'
              display='flex'
              align-items='center'
              height='100%'
            />
            <TitleWrapper>
              <Title>{videoItem.node.title}</Title>
            </TitleWrapper>

            {/* <ReadMore>
              <p>{`/video/${videoItem.node.slug}`}</p>
            </ReadMore> */}
          </CardWrapper>
        ))}
      </Wrapper>
    </Layout>
  );
};

export default Videos;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  @media only screen and (min-device-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  height:100%
  justify-content:space-between;
  margin-bottom: 2rem;
  border-bottom: 1px solid black;
  background-color: #fff;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  @media only screen and (min-device-width: 768px) {
    display: flex;
    width: 100%;
  }
  padding: 1.25rem;
`;

const ReadMore = styled.div`
  background-color: #dc143c;
  text-align: center;
  width: 50%;
  padding: 10px;
  border-radius: 2.5px;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

const Content = styled.div`
  width: 100%;
`;
