import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Install from './install'

interface Props {
  children: React.ReactNode
}

function AllTheProviders({ children }: Props) {
  return <Install>{children}</Install>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

// override render method
export { customRender as render, userEvent }
