import { createGlobalStyle } from 'styled-components'

import background from '../assets/images/background.svg'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #FAFAF5 url(${background}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px 'Roboto Condensed', sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;

    @media(max-width: 1000px) {
      max-width: 768px;
      margin: 0 auto;
    }

    @media(max-width: 800px) {
      max-width: 540px;
      margin: 0 auto;
    }

    @media(max-width: 580px) {
      max-width: 400px;
      margin: 0 auto;
    }

    @media(max-width: 360px) {
      max-width: 340px;
      margin: 0 auto;
    }

  }
`
