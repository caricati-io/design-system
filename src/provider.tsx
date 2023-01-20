import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '@fontsource/poppins'
import intTheme from './theme'

const ResetStyles = createGlobalStyle`
  body {
    font-size: 16px;
    font-family: ${({ theme }) => theme.font.family};
    font-family: ${({ theme }) => theme.font.family};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button, input, select, textarea {
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font.family};
    font-size: 1rem;
  }
`

interface Props {
  children: React.ReactNode
  theme?: typeof intTheme
}

export default function Provider({ theme = intTheme, children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <ResetStyles />
    </ThemeProvider>
  )
}
