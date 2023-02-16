import { render } from '../../testing'

import Textarea from './textarea'

describe('<Textarea />', () => {
  test('renders a textarea correctly', () => {
    const { container } = render(<Textarea />)
    expect(container.querySelector('textarea')).toBeInTheDocument()
  })
})
