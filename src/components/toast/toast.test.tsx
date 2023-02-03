import useToast from '../../hooks/use-toast'
import { fireEvent, render } from '../../testing'
import { Provider, ToastVariant } from './context'

import ToastProvider from './provider'

interface DemoProps {
  variant: ToastVariant
}

const wait = (time: number) =>
  new Promise((r) => {
    setTimeout(r, time)
  })

function Demo({ variant }: DemoProps) {
  const toast = useToast()
  return (
    <ToastProvider>
      <button
        type="button"
        data-testid="button"
        onClick={() => {
          if (variant === 'ERROR') toast.error('Error toast!')
          if (variant === 'INFO') toast.info('Info toast!')
          if (variant === 'SUCCESS') toast.success('Success toast!')
          if (variant === 'WARNING') toast.warning('Warning toast!')
        }}
      >
        dispatch
      </button>
    </ToastProvider>
  )
}

describe('<Toast />', () => {
  test('renders a toast with the error variant', () => {
    const { getByText, getByTestId } = render(<Demo variant="ERROR" />)
    fireEvent.click(getByTestId('button'))
    expect(getByText('Error toast!')).toBeInTheDocument()
  })

  test('renders a toast with the info variant', () => {
    const { getByText, getByTestId } = render(<Demo variant="INFO" />)
    fireEvent.click(getByTestId('button'))
    expect(getByText('Info toast!')).toBeInTheDocument()
  })

  test('renders a toast with the success variant', () => {
    const { getByText, getByTestId } = render(<Demo variant="SUCCESS" />)
    fireEvent.click(getByTestId('button'))
    expect(getByText('Success toast!')).toBeInTheDocument()
  })

  test('renders a toast with the warning variant', () => {
    const { getByText, getByTestId } = render(<Demo variant="WARNING" />)
    fireEvent.click(getByTestId('button'))
    expect(getByText('Warning toast!')).toBeInTheDocument()
  })

  test("removes the toast item if it's clicked", async () => {
    const { getByText, queryByText, getByTestId } = render(
      <Demo variant="INFO" />
    )

    fireEvent.click(getByTestId('button'))
    expect(queryByText('Info toast!')).toBeInTheDocument()

    fireEvent.click(getByText('Info toast!'))

    // wait for the animation
    await wait(500)

    expect(queryByText('Info toast!')).toBeNull()
  })

  test('removes the toast item using keyboard', async () => {
    const { getByText, queryByText, getByTestId } = render(
      <Demo variant="INFO" />
    )

    fireEvent.click(getByTestId('button'))
    const toast = getByText('Info toast!')
    expect(toast).toBeInTheDocument()

    fireEvent.focus(toast)
    fireEvent.keyDown(toast, {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      charCode: 13,
    })

    // wait for the animation
    await wait(500)

    expect(queryByText('Info toast!')).toBeNull()
  })

  test('provides the toast configuration', async () => {
    const add = () => null
    const remove = () => null
    const { getByText} = render(
      <Provider value={{ add, remove, duration: 1000, items: [] }}>
        Inner content
      </Provider>
    )
    expect(getByText('Inner content')).toBeInTheDocument()
  })
})
