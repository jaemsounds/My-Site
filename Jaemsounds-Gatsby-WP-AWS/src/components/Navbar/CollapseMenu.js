import React from 'react';
import styled from 'styled-components';

import {useSpring, animated} from 'react-spring';

const CollapseMenu = ({handleNavbar, navbarState}) => {
  const {open} = useSpring({open: navbarState ? 0 : 1});

  if (navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          <a href='/page/about'>About</a>
          <a href='/beats'>Beats</a>
          <a href='/videos'>Videos</a>
          <a href='/posts'>Blog</a>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  position: fixed;
  padding: 1rem;
  background-color: #000;
  width: 80%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  z-index: 201;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  font-family: bebas neue;
  background-color: #fff;
  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.5rem;
    line-height: 1.5;
    color: #000;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #dc143c;
    }
  }
`;
