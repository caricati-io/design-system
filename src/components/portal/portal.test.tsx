import { render, screen } from '../../testing'
import Component from '.'

describe('<Component />', () => {
  test('renders a component correctly', () => {
    render(<Component>Click me</Component>)
    const component = screen.getByText(/Click me/i)
    expect(component).toBeInTheDocument()
  })
})
