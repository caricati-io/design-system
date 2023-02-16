import { fireEvent, render } from '../../testing'

import Input from './input'

describe('<Input />', () => {
  test('renders a input correctly', () => {
    const { container } = render(<Input type="text" value="" />)
    expect(container.querySelector('input')).toBeInTheDocument()
  })

  test('dispatchs an event when the user press the keyboard', () => {
    const fn = jest.fn()
    const { container } = render(<Input type="text" value="" onChange={fn} />)
    const input = container.querySelector('input') as HTMLElement

    fireEvent.change(input, { target: { value: 'a' } })

    expect(fn).toBeCalledTimes(1)
  })

  test('renders an icon on the left of the Input', () => {
    const { container } = render(<Input type="text" value="" leftIcon="bell" />)
    const svg = container.querySelector('svg')

    expect(svg).toBeInTheDocument()
  })

  test('renders a button on the right of the input', () => {
    const fn = jest.fn()
    const { container, getByRole } = render(
      <Input
        type="text"
        value=""
        leftIcon="bell"
        button={{
          icon: 'caret-down',
          onClick() {
            fn()
          },
        }}
      />
    )

    const svg = container.querySelector('svg')
    const button = getByRole('button')
    fireEvent.click(button)

    expect(svg).toBeInTheDocument()
    expect(fn).toBeCalledTimes(1)
  })

  test('renders a label to the input', () => {
    const fn = jest.fn()
    const { getByText } = render(
      <Input
        type="text"
        value=""
        label="my label"
        leftIcon="bell"
        button={{
          icon: 'caret-down',
          onClick() {
            fn()
          },
        }}
      />
    )

    expect(getByText('my label')).toBeInTheDocument()
  })
})
