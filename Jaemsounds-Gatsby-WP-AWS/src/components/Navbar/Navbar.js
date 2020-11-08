import React, {useState} from 'react';
import styled from 'styled-components';
import {useSpring, animated, config} from 'react-spring';
import useWindowScrollPosition from '@rehooks/window-scroll-position';

// components
import BurgerMenu from './BurgerMenu';
import CollapseMenu from './CollapseMenu';

// images

const Navbar = ({navbarState, handleNavbar}) => {
  const [change, setChange] = useState(false);

  const changePosition = 0;

  let position = useWindowScrollPosition();

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  const barAnimation = useSpring({
    from: {transform: 'translate3d(0, -10rem, 0)'},
    transform: 'translate3d(0, 0, 0)',
    backgroundColor: change ? 'crimson' : 'rgba(0,0,0,0)',
    height: change ? '100px' : '0px',
    zIndex: 200,
  });

  const linkAnimation = useSpring({
    from: {transform: 'translate3d(0, 30px, 0)', opacity: 0},
    to: {transform: 'translate3d(0, 0, 0)', opacity: 1},
    delay: 800,
    config: config.wobbly,
  });
  if (typeof window !== undefined) {
    return (
      <React.Fragment>
        <NavBar style={barAnimation}>
          <FlexContainer>
            <LogoContainer>
              <a href='/'>
                <img
                  src='https://s3.amazonaws.com/jaemsounds-media-collection/wp-content/uploads/2020/05/26213954/logo.png'
                  alt='logo'
                />{' '}
              </a>
            </LogoContainer>
            <NavLinks style={linkAnimation}>
              <a href='/page/about'>About</a>
              <a href='/beats'>Beats</a>
              <a href='/videos'>Videos</a>
              <a href='/posts'>Blog</a>
            </NavLinks>
            <BurgerWrapper>
              <BurgerMenu
                navbarState={navbarState}
                handleNavbar={handleNavbar}
              />
            </BurgerWrapper>
          </FlexContainer>
        </NavBar>
        <CollapseMenuContainer>
          <CollapseMenu navbarState={navbarState} handleNavbar={handleNavbar} />
        </CollapseMenuContainer>
      </React.Fragment>
    );
  } else {
    return <h1>Error</h1>;
  }
};
export default Navbar;

const CollapseMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7.5rem;
`;

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 200;
  font-size: 1.4rem;
  margin: 0px;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 100px;
`;

const LogoContainer = styled.div`
  height: 96px;
  width: 96px;
`;
const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: black;
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: black;
      border-bottom: 1px solid black;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;
