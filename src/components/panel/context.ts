import { createContext } from 'react'

interface PanelContext {
  danger: boolean
}

const panelContext = createContext<PanelContext>({
  danger: false,
})

export const { Provider } = panelContext

export default panelContext
