import { useEffect } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/400.css'
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
    font-weight: 400;
  }

  button, input, select, textarea {
    color: ${({ theme }) => theme.color.text};
    font-family: ${({ theme }) => theme.font.family};
    font-size: 1rem;
  }

  figure, h1, h2, h3, h4, h5, h6, p, ul, ol, li, article, section, img, button {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }

  a {
    color: ${({ theme }) => theme.color.link};
    text-decoration: underline;
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
    // create element for portals
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
