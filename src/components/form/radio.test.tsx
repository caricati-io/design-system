import { render } from '../../testing'

import Radio from './radio'

describe('<Radio />', () => {
  test('renders a radio correctly', () => {
    const { getByRole } = render(<Radio checked />)
    expect(getByRole('radio')).toBeInTheDocument()
  })
})
