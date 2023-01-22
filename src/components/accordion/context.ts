import { createContext } from 'react'

interface AccordionContext {
  openIds: string[]
  handleToggle: (id: string) => void
}

const accordionContext = createContext<AccordionContext>({
  openIds: [],
  handleToggle: () => null,
})

export const AccordionProvider = accordionContext.Provider

export default accordionContext
