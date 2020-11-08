import React from 'react';
import styled from 'styled-components';
import {graphql, useStaticQuery} from 'gatsby';
import {ParseHTML} from '../utils/ParseHTML';
import Layout from '../components/layout';

const Posts = () => {
  const data = useStaticQuery(graphql`
    query getAllPosts {
      wordpress {
        posts {
          edges {
            node {
              excerpt
              content
              date
              link
              title
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Wrapper>
        {data.wordpress.posts.edges.map((postItem) => (
          <Blog key={postItem.node.id}>
            <Title>{ParseHTML(postItem.node.title)}</Title>

            <More>
              <Content>{ParseHTML(postItem.node.excerpt)}</Content>
              <a
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  backgroundColor: ' #dc143c',
                  width: '100%',
                  height: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  borderRadius: '5px',
                }}
                href={`/post/${postItem.node.slug}`}
              >
                Read More
              </a>
            </More>
          </Blog>
        ))}
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-device-width: 320px) {
    align-items: center;
    justify-content: space-around;
  }
  @media only screen and (min-device-width: 768px) {
    width: 80%;
  }
`;

const Blog = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5rem;
  width: 80%;
  background-color: #fff;
  border-radius: 1.5px;
  padding: 1.5rem;
  @media only screen and (min-device-width: 320px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  width: 50%;
`;

const Content = styled.div`
  font-size: 1.25rem;
  width: 100%;
`;

const More = styled.div`
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media only screen and (min-device-width: 320px) {
    width: 50%;
  }
`;

export default Posts;
