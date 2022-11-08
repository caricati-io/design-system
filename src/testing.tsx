import { render } from '@testing-library/react'
import Provider from './provider'

interface Props {
  children: React.ReactNode
}

function AllTheProviders({ children }: Props) {
  return <Provider>{children}</Provider>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

// override render method
export { customRender as render }
