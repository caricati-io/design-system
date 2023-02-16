import { render } from '../../testing'

import Input from './input'

describe('<Input />', () => {
  test('renders a input correctly', () => {
    const { container } = render(<Input type="text" value="" />)
    expect(container.querySelector('input')).toBeInTheDocument()
  })
})
