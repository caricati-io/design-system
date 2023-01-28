import { createContext } from 'react'

export type ToastVariant = 'ERROR' | 'SUCCESS' | 'INFO' | 'WARNING'

export interface Toast {
  id: string
  label: string
  type: ToastVariant
}

interface ToastContext {
  items: Toast[]
  duration: number
  add(toast: Toast): void
  remove(id: string): void
}

const toastContext = createContext<ToastContext>({
  items: [],
  duration: 5000,
  add: () => null,
  remove: () => null,
})

export const { Provider } = toastContext

export default toastContext
