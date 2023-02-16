import { render } from '../../testing'

import Checkbox from './checkbox'

describe('<Checkbox />', () => {
  test('renders a checkbox correctly', () => {
    const { getByRole } = render(<Checkbox checked />)
    expect(getByRole('checkbox')).toBeInTheDocument()
  })
})
