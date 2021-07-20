import React from 'react'
import { GlobalStyle } from './GlobalStyle'
import { Head, Root } from 'react-static'
import { Nav } from 'components//Nav'
import { ParticlesBG } from 'components/ParticlesBG'
import styled from 'styled-components'

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
      </StyledRoot>
    </>
  )
}

const StyledRoot = styled(Root)`
  position: relative;
`;

export default App
