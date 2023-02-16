import { render } from '../../testing'

import Toggle from './toggle'

describe('<Toggle />', () => {
  test('renders a toggle correctly', () => {
    const { getByRole } = render(<Toggle checked />)
    expect(getByRole('checkbox')).toBeInTheDocument()
  })
})
