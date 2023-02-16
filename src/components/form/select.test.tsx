import { render } from '../../testing'

import Select from './select'

describe('<Select />', () => {
  test('renders a select correctly', () => {
    const { getByRole } = render(<Select />)
    expect(getByRole('combobox')).toBeInTheDocument()
  })
})
