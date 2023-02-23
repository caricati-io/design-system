import { fireEvent, render } from '../../testing'

import Checkbox from './checkbox'

describe('<Checkbox />', () => {
  test('renders a checkbox correctly', () => {
    const { getByRole } = render(<Checkbox checked />)
    expect(getByRole('checkbox')).toBeInTheDocument()
  })

  test('should defines a checkbox checked', () => {
    const { getByRole } = render(<Checkbox checked />)
    expect(getByRole('checkbox')).toHaveAttribute('aria-checked', 'true')
  })

  test('should defines a checkbox unchecked', () => {
    const { getByRole } = render(<Checkbox />)
    expect(getByRole('checkbox')).toHaveAttribute('aria-checked', 'false')
  })

  test('should defines a checkbox disabled', () => {
    const { getByRole } = render(<Checkbox disabled />)
    expect(getByRole('checkbox')).toHaveAttribute('aria-disabled', 'true')
  })

  test('should defines a checkbox enabled', () => {
    const { getByRole } = render(<Checkbox />)
    expect(getByRole('checkbox')).toHaveAttribute('aria-disabled', 'false')
  })

  test('should dispatchs an event when the enabled checkbox is clicked', () => {
    const fn = jest.fn()
    const { getByRole } = render(<Checkbox onChange={fn} />)
    fireEvent.click(getByRole('checkbox'))
    expect(fn).toBeCalledTimes(1)
  })

  test('should not dispatchs an event when the disabled checkbox is clicked', () => {
    const fn = jest.fn()
    const { getByRole } = render(<Checkbox onChange={fn} disabled />)
    fireEvent.click(getByRole('checkbox'))
    expect(fn).toBeCalledTimes(0)
  })

  test("renders a title of the checkbox if it's filled", () => {
    const { getByText } = render(<Checkbox label="confirm the terms" />)
    expect(getByText('confirm the terms')).toBeInTheDocument()
  })

  test('dispatchs an event when the action of the keyboard is pressed', () => {
    const fn = jest.fn()
    const { getByRole } = render(
      <Checkbox label="confirm the terms" onChange={fn} />
    )

    fireEvent.keyDown(getByRole('checkbox'), {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      charCode: 13,
    })

    fireEvent.keyDown(getByRole('checkbox'), {
      key: 'Space',
      code: 'Space',
      keyCode: 32,
      charCode: 32,
    })

    fireEvent.keyDown(getByRole('checkbox'), {
      key: 'Backspace',
      code: 'Backspace',
      keyCode: 8,
      charCode: 8,
    })

    fireEvent.keyDown(getByRole('checkbox'), {
      key: 'a',
      code: 'KeyA',
      keyCode: 65,
      charCode: 65,
    })

    expect(fn).toBeCalledTimes(2)
  })

  test('defines the checkbox as inline', () => {
    const { getByRole } = render(<Checkbox inline />)
    expect(getByRole('checkbox')).toHaveStyle({ display: 'inline-flex' })
  })
})
