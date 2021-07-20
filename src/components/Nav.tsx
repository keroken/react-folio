import React, { useState } from 'react'
import styled, { css } from 'styled-components'

export const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen(prev => !prev)
  }
  return (
    <>
      {isOpen && <StyledNav isOpen={isOpen}>
        <ul className="global-nav__list" id="nav-list">
          <li className="global-nav__item"><a href="#">HOME</a></li>
          <li className="global-nav__item"><a href="#about">ABOUT</a></li>
          <li className="global-nav__item"><a href="#works">WORKS</a></li>
          <li className="global-nav__item"><a href="#contact">CONTACT</a></li>
        </ul>
      </StyledNav>}
      <StyledHamburger isOpen={isOpen} id="js-hamburger" onClick={() => toggleOpen()}>
        <span className="hamburger__line hamburger__line--1"></span>
        <span className="hamburger__line hamburger__line--2"></span>
        <span className="hamburger__line hamburger__line--3"></span>
      </StyledHamburger>
      <StyledModalBG isOpen={isOpen} id="js-black-bg" />
    </>
  )
}

const StyledHamburger = styled.div<{ isOpen: boolean }>`
  background: #fff;
  position: fixed;
  right: 60px;
  top: 60px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  cursor: pointer;
  z-index: 300;
  .hamburger__line {
    position: absolute;
    left: 20px;
    width: 30px;
    height: 1px;
    background: #111;
    transition: all .6s;
  }
  .hamburger__line--1 {
    ${props => props.isOpen ?
      css`
        transform: rotate(405deg);
        top: 35px;
      ` : 
      css`
        top: 25px;
      `
  }}
  .hamburger__line--2 {
    ${props => props.isOpen ?
      css`
        width: 0;
        left: 50%;
      ` :
      css`
        top: 35px;
      `
  }}
  .hamburger__line--3 {
    ${props => props.isOpen ?
      css`
        transform: rotate(-45deg);
        top: 35px;
      ` :
      css`
        top: 45px;
      `
  }}
`;

const StyledNav = styled.nav<{ isOpen: boolean }>`
  ${props => props.isOpen !== undefined && 'right: 0;'}
  .global-nav__list {
    position: fixed;
    margin: 0;
    padding: 0;
    list-style: none;
    display: ${props => props.isOpen ? 'block' : 'none'};
    top: 150px;
    right: 30px;
    /* transform: translate(-50%,-50%); */
    font-size: 40px;
    ${props => props.isOpen && 'z-index: 500;'}
  }

  .global-nav__item {
    text-align: center;
    padding: 0 14px;
  }

  .global-nav__item a {
    display: block;
    padding: 8px 0;
    border-bottom: 1px solid #eee;
    text-decoration: none;
    color: #fff;
  }

  .global-nav__item a:hover {
    background: #eee;
  }
`;

const StyledModalBG = styled.div<{ isOpen: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background: #000;
  opacity: ${props => props.isOpen ? .8 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all .6s;
  cursor: pointer;
`;
