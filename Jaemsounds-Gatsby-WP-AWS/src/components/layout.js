/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './layout.css';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';
import styled from 'styled-components';

const Layout = ({children}) => {
  const [navbarState, setnavbarState] = useState(false);

  return (
    <div>
      <Navbar
        handleNavbar={() => setnavbarState(!navbarState)}
        navbarState={navbarState}
      />
      <LayoutWrapper>{children}</LayoutWrapper>
      <Footer />
    </div>
  );
};

const LayoutWrapper = styled.div`
  @media only screen(min-device-width: 320px) {
    width: 100%;
  }

  @media only screen and (min-device-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 960px) {
    width: 100%;
  }
  min-height: 100vh;
  margin: 90px auto 0px auto;
  text-align: center;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
