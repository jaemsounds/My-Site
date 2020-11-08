import React from 'react';
import styled from 'styled-components';

const TopContent = () => {
  return (
    <TopContentContainer>
      <div>
        "Follow my blog for the latest
        <span style={{color: '#dc143c', marginLeft: '5px'}}>updates!"</span>
      </div>
    </TopContentContainer>
  );
};

const TopContentContainer = styled.div`
  height: 100%;
  @media only screen and (min-device-width: 300px) {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    color: #000;
    width: 200px;
    height: 61px;
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

export default TopContent;
