import { useEffect } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '@fontsource/poppins'
import intTheme from './theme'
import { DesignSystemProvider } from './context'

const ResetStyles = createGlobalStyle`
  body {
    font-size: 16px;
    font-family: ${({ theme }) => theme.font.family};
    font-family: ${({ theme }) => theme.font.family};
    color: ${({ theme }) => theme.color.text};
    background-color: ${({ theme }) => theme.color.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button, input, select, textarea {
    color: ${({ theme }) => theme.color.text};
    font-family: ${({ theme }) => theme.font.family};
    font-size: 1rem;
  }
`

interface Props {
  portalId?: string
  theme?: typeof intTheme
  children: React.ReactNode
}

export default function Provider({
  children,
  theme = intTheme,
  portalId = 'cds-portal',
}: Props) {
  useEffect(() => {
    if (!document.getElementById(portalId)) {
      const node = document.createElement('div')
      node.setAttribute('id', portalId)
      document.body.appendChild(node)
    }
    return () => {
      const node = document.getElementById(portalId)
      if (node?.parentNode) {
        node.parentNode.removeChild(node)
      }
    }
  }, [portalId])

  return (
    <DesignSystemProvider value={{ portalId }}>
      <ThemeProvider theme={theme}>
        {children}
        <ResetStyles />
      </ThemeProvider>
    </DesignSystemProvider>
  )
}
