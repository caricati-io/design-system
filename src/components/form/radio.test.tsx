import { fireEvent, render } from '../../testing'

import Radio from './radio'

describe('<Radio />', () => {
  test('renders a radio correctly', () => {
    const { getByRole } = render(<Radio checked />)
    expect(getByRole('radio')).toBeInTheDocument()
  })

  test('should defines a radio checked', () => {
    const { getByRole } = render(<Radio checked />)
    expect(getByRole('radio')).toHaveAttribute('aria-checked', 'true')
  })

  test('should defines a radio unchecked', () => {
    const { getByRole } = render(<Radio />)
    expect(getByRole('radio')).toHaveAttribute('aria-checked', 'false')
  })

  test('should defines a radio disabled', () => {
    const { getByRole } = render(<Radio disabled />)
    expect(getByRole('radio')).toHaveAttribute('aria-disabled', 'true')
  })

  test('should defines a radio enabled', () => {
    const { getByRole } = render(<Radio />)
    expect(getByRole('radio')).toHaveAttribute('aria-disabled', 'false')
  })

  test('should dispatchs an event when the enabled radio is clicked', () => {
    const fn = jest.fn()
    const { getByRole } = render(<Radio onChange={fn} />)
    fireEvent.click(getByRole('radio'))
    expect(fn).toBeCalledTimes(1)
  })

  test('should not dispatchs an event when the disabled radio is clicked', () => {
    const fn = jest.fn()
    const { getByRole } = render(<Radio onChange={fn} disabled />)
    fireEvent.click(getByRole('radio'))
    expect(fn).toBeCalledTimes(0)
  })

  test("renders a title of the radio if it's filled", () => {
    const { getByText } = render(<Radio label="confirm the terms" />)
    expect(getByText('confirm the terms')).toBeInTheDocument()
  })

  test('dispatchs an event when the action of the keyboard is pressed', () => {
    const fn = jest.fn()
    const { getByRole } = render(
      <Radio label="confirm the terms" onChange={fn} />
    )

    fireEvent.keyDown(getByRole('radio'), {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      charCode: 13,
    })

    fireEvent.keyDown(getByRole('radio'), {
      key: 'Space',
      code: 'Space',
      keyCode: 32,
      charCode: 32,
    })

    fireEvent.keyDown(getByRole('radio'), {
      key: 'Backspace',
      code: 'Backspace',
      keyCode: 8,
      charCode: 8,
    })

    fireEvent.keyDown(getByRole('radio'), {
      key: 'a',
      code: 'KeyA',
      keyCode: 65,
      charCode: 65,
    })

    expect(fn).toBeCalledTimes(2)
  })

  test('defines the radio as inline', () => {
    const { getByRole } = render(<Radio inline />)
    expect(getByRole('radio')).toHaveStyle({ display: 'inline-flex' })
  })
})
