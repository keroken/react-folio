import React from 'react'
import { GlobalStyle } from './GlobalStyle'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from '@reach/router'
import FancyDiv from 'components/FancyDiv'
import Dynamic from 'containers/Dynamic'
import Particles from 'react-particles-js'
import styled from 'styled-components'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <StyledRoot>
      <StyledParticles
        width="100vw"
        height="100vh"
        params={{
          "particles": {
            "number": {
              "value": 50
            },
            "size": {
              "value": 3
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }}
      />
      <GlobalStyle />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/dynamic">Dynamic</Link>
      </Nav>
      <Content>
        <FancyDiv>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </FancyDiv>
      </Content>
    </StyledRoot>
  )
}

const StyledRoot = styled(Root)`
  position: relative;
`;

const StyledParticles = styled(Particles)`
  position: absolute;
  background: darkblue;
  z-index: -1;
`;

const Nav = styled.nav`
  width: 100%;
  background: transparent;
  & a {
    color: white;
    padding: 1rem;
    display: inline-block;
  }
`

const Content = styled.div`
  padding: 1rem;
`

export default App
