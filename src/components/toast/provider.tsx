import { useCallback, useState } from 'react'
import { Provider, Toast } from './context'

import ToastContainer from './container'

interface Props {
  children: React.ReactNode
}

export default function ToastProvider({ children }: Props) {
  const [items, setItems] = useState<Toast[]>([])
  const duration = 5000

  const remove = useCallback((id: string) => {
    setItems((state) => state.filter((item) => item.id !== id))
  }, [])

  const add = useCallback(
    (toast: Toast) => {
      setItems((state) => [...state, toast])
      setTimeout(() => {
        // const element = document.getElementById(`toast_${toast.id}`)
        // element?.style.transform = 'translateX(100%)'
        // element?.style = {}
        remove(toast.id)
      }, duration)
    },
    [remove, duration]
  )

  return (
    <Provider value={{ items, add, remove, duration }}>
      {children}
      <ToastContainer />
    </Provider>
  )
}
