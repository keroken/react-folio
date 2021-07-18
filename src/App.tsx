import React from 'react'
import { GlobalStyle } from './GlobalStyle'
import { Head, Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from '@reach/router'
import { ParticlesBG } from 'components/ParticlesBG'
import FancyDiv from 'components/FancyDiv'
import Dynamic from 'containers/Dynamic'
import styled from 'styled-components'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <StyledRoot>
      <Head>
        <title>KENICHI SHINAGAWA | Web Designer & Developer</title>
      </Head>
      <ParticlesBG />
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
