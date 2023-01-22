import { createContext } from 'react'

interface DesignSystemContext {
  portalId: string
}

const designSystemContext = createContext<DesignSystemContext>({
  portalId: '',
})

export const DesignSystemProvider = designSystemContext.Provider

export default designSystemContext
