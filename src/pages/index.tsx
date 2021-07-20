import React from 'react'
import styled from 'styled-components'

export default () => (
  <div style={{ textAlign: 'center' }}>
    <StyledHeader className="header hidden">
      <p className="site-title-sub">
        Web designer & developer
      </p>
      <h1 className="site-title">
        Hi, my name is<br />KENICHI SHINAGAWA
      </h1>
      <p className="site-description">
        I design and develop awesome websites and web applications. Check out some of my works!
      </p>
    </StyledHeader>
  </div>
)

const StyledHeader = styled.header`
  padding: 170px 30px 80px;
  .site-title-sub {
    margin: 0 0 30px;
    letter-spacing: 1px;
    font-size: 20px;
  }
  .site-title-sub::before,
  .site-title-sub::after {
    content: '';
    display: inline-block;
    width: 140px;
    height: 2px;
    margin: 0 30px;
    background-color: #fff;
    vertical-align: middle;
  }
  .site-title {
    margin: 50px 0 40px;
    font-size: 68px;
  }
  .site-description {
    margin-bottom: 50px;
    color: #fff;
    font-size: 20px;
  }
`;