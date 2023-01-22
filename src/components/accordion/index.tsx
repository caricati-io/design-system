import { useState } from 'react'
import styled from 'styled-components'
import { AccordionProvider } from './context'

const Container = styled.div`
  border-radius: 0.625rem;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.line};

  & > article:last-child div[role='region'] {
    margin-bottom: 0;
  }
`

export interface Props {
  openOnlyOne?: boolean
  children: React.ReactNode
}

export default function Accordion({ children, openOnlyOne = true }: Props) {
  const [openIds, setOpenIds] = useState<string[]>([])

  const handleToggle = (id: string) => {
    if (openOnlyOne) {
      setOpenIds((state) => (state.includes(id) ? [] : [id]))
      return
    }

    setOpenIds((state) =>
      state.includes(id) ? state.filter((item) => item !== id) : [...state, id]
    )
  }

  return (
    <AccordionProvider value={{ handleToggle, openIds }}>
      <Container>{children}</Container>
    </AccordionProvider>
  )
}
