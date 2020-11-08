import React from 'react';
import styled from 'styled-components';
import itunes from '../images/itunes.png';
import tidal from '../images/tidal.png';
import SocialMediaBar from '../components/SocialMediaBar';
// components

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <img
          src={itunes}
          alt='itunes store'
          style={{height: '64px', width: '64px'}}
        />
        <p>In stores now</p>

        <img
          src={tidal}
          alt='tidal store'
          style={{height: '64px', width: '64px'}}
        />
      </Wrapper>
      <SocialMediaBar />
    </Container>
    // <a href="https://iconscout.com/icons/tidal" target="_blank">Tidal Logo Icon</a> on <a href="https://iconscout.com">Iconscout</a>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: crimson;
  align-items: center;
  padding: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
 justify-content:space-between;
  postion: absoulte;
  width:100%;
  bottom: 0;
  font-size: 2rem;
  @media only screen and (min-device-width: 300px) and (max-device-width: 420px){
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 200px
    justify-content: space-between;

  }
`;
export default Footer;
