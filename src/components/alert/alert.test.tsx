import { render } from '../../testing'

import Alert from '.'

describe('<Alert />', () => {
  test('renders a Alert correctly', () => {
    const { getByText } = render(
      <Alert variant="warning">Warning! Fill all fields</Alert>
    )
    expect(getByText('Warning! Fill all fields')).toBeInTheDocument()
  })
})
