import { createContext } from 'react'

interface ModalContext {
  handleClose?: () => void
}

const modalContext = createContext<ModalContext>({ handleClose: undefined })

export const ModalProvider = modalContext.Provider

export default modalContext
