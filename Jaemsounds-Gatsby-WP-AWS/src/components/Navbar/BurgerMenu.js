import React from "react"
import styled from "styled-components"

const BurgerMenu = ({ handleNavbar, navbarState }) => {
  return (
    <Wrapper onClick={handleNavbar}>
      <div className={navbarState ? "open" : ""}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  )
}

export default BurgerMenu

const Wrapper = styled.div`
  position: relative;
  padding-top: 0.7rem;
  cursor: pointer;
  display: block;

  & span {
    background: black;
    display: block;
    position: relative;
    width: 2rem;
    height: 0.2rem;
    margin-bottom: 0.7rem;
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(2) {
    transform:translate(1px ,9px) rotate(45deg);
  }

  .open span:nth-child(3) {
    transform:translate(1px ,-10px) rotate(-45deg);
  }

  .open span:nth-child(1) {
    opacity: 0;
  }
`
