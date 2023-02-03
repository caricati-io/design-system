import { render, screen, fireEvent } from '../../testing'
import Button from '.'

describe('<Button />', () => {
  test('renders a button correctly', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByText(/Click me/i)
    expect(button).toBeInTheDocument()
  })

  test('should be dispatch an event when the button is clicked', () => {
    const callback = jest.fn()
    render(<Button onClick={callback}>Click me</Button>)
    const button = screen.getByText(/Click me/i)
    fireEvent.click(button)
    fireEvent.click(button)
    expect(callback).toBeCalledTimes(2)
  })

  test('should be disable the button if I want', () => {
    render(<Button disabled>Its disabled</Button>)
    const button = screen.getByText(/Its disabled/i)
    expect(button).toHaveAttribute('disabled')
  })

  test('should be render the primary button', () => {
    render(<Button primary>Primary</Button>)
    const button = screen.getByText(/Primary/i)
    expect(button).toBeInTheDocument()
  })

  test('should be render the small button', () => {
    render(<Button small>Small button</Button>)
    const button = screen.getByText(/Small button/i)
    expect(button).toBeInTheDocument()
  })

  test('should be render the submit button', () => {
    render(<Button submit>Submit button</Button>)
    const button = screen.getByText(/Submit button/i)
    expect(button).toBeInTheDocument()
  })

  test('should be render the icons to use in button', () => {
    const { container } = render(<Button submit leftIcon='bell' rightIcon='check'>Click me</Button>)
    expect(container.querySelectorAll('svg')).toHaveProperty('length', 2)
  })
})
