import React from 'react';
import styled from 'styled-components';

// images
const facebook = require('../images/social/facebook.png')
const instagram = require('../images/social/instagram.png')
const snapchat = require('../images/social/snapchat.png')
const twitter = require('../images/social/twitter.png')
const SocialMediaBar = () => {
  return (
    <div>
      <SocialMediaBarContainer>
        <a href='https://www.facebook.com/JaemSounds'>
          <Icons
            src={facebook}
            alt='facebook img'
          />
        </a>

        <a href='https://www.instagram.com/jaem1121/'>
          <Icons
            src={instagram}
            alt='instagram img'
          />
        </a>

        <a href='https://twitter.com/jaem1121'>
          <Icons
            src={twitter}
            alt='twitter img'

          />
        </a>

        <a href='https://www.snapchat.com'>
          <Icons
            src={snapchat}
            alt='snapchat img'
          />
        </a>
      </SocialMediaBarContainer>
    </div>
  );
};

const SocialMediaBarContainer = styled.div`
  width: 100%;
`;

const Icons = styled.img`
  width: 48px;
  height: 48px;
  margin: 10px;
`
export default SocialMediaBar;
