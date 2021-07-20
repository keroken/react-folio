import React from 'react'
import { GlobalStyle } from './GlobalStyle'
import { Head, Root, Routes, addPrefetchExcludes } from 'react-static'
import { Router } from '@reach/router'
import { Nav } from 'components//Nav'
import { ParticlesBG } from 'components/ParticlesBG'
import Dynamic from 'containers/Dynamic'
import styled from 'styled-components'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledRoot>
        <Head>
          <title>KENICHI SHINAGAWA | Web Designer & Developer</title>
        </Head>
        <ParticlesBG />
        <Nav />
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
      </StyledRoot>
    </>
  )
}

const StyledRoot = styled(Root)`
  position: relative;
`;

export default App
