import React from 'react';
import album_artwork from '../images/jsa.jpeg';

import styled from 'styled-components';

const Content = () => {
  return (
    <React.Fragment>
      <ContentTitle>
        <div style={{textAlign: 'left'}}>
          Enjoy listening on all <span style={{color: '#dc143c'}}>major </span>
          platforms.
        </div>
      </ContentTitle>

      <Wrapper>
        <img
          style={{borderRadius: '5px'}}
          src='https://united-masters.imgix.net/miEFvWWXRtBr?fit=crop&w=400&h=400&q=80'
          alt='album artwork'
        />

        <h1
          style={{
            backgroundColor: 'white',
            textAlign: 'center',
            borderRadius: '5px',
          }}
        >
          <p>click the link below and start streaming</p>
          <p style={{color: 'crimson'}}>Now!</p>
        </h1>

        <a
          style={{
            textDecoration: 'underline',
            color: 'white',
          }}
          href='https://unitedmasters.com/m/5f4f207e99d5e6325a4caae7'
        >
          <h1
            style={{
              color: '#fff',
              backgroundColor: 'black',
              textAlign: 'center',
              borderRadius: '5px',
            }}
          >
            "LAWS OF LAVISH"
          </h1>
        </a>
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  background: #fff;
  border-radius: 5px;
  @media only screen and (min-device-width: 320px) {
    display: flex;
    justify-content: flex-start;

    margin-top: 5rem;
    padding: 1rem;
  }

  @media only screen and (min-device-width: 768px) {
    padding: 1rem;
    width: 50%;
  }
`;
const ContentTitle = styled.div`
  @media only screen and (min-device-width: 300px) {
    font-size: 1.5rem;
    border-bottom: 2px solid #000;
    color: #000;
    width: 200px;
    height: 74px;
    margin-top: 2rem;
    background-color: #fff;
  }

  @media only screen and (min-device-width: 768px) {
    display: flex;
    justify-content: center;
    width: 80%;
    align-items: center;
    font-size: 2.5rem;
  }
`;

export default Content;
