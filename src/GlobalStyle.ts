import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  scroll-behavior: smooth;
}
body {
  font-family: 'Lato', "Hiragino Kaku Gothic ProN",  Meiryo, sans-serif;
  font-weight: 300;
  font-size: 62.5%;
  text-align: center;
  color: #fff;
  margin: 0;
  padding: 0;
}
*, *::before, *::after {
  box-sizing: border-box;
}
`