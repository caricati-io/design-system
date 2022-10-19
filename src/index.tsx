import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Button from './components/button'
import theme from './theme'
import '@fontsource/poppins'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const GlobalCSS = createGlobalStyle`
  body {
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    background-color: ${theme.colors.body};
  }

  button, input, select, textarea {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
  }
`

root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <h1>opa!</h1>
      <Button disabled>Primary</Button>
      <GlobalCSS />
    </React.StrictMode>
  </ThemeProvider>
)
