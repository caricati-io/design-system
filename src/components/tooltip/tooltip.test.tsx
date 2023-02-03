import { render } from '../../testing'

import Tooltip from '.'

describe('<Tooltip />', () => {
  test('renders a Tooltip correctly', () => {
    const { getByText } = render(
      <Tooltip label='Hi!'>Hover me</Tooltip>
    )
    expect(getByText('Hover me')).toBeInTheDocument()
  })
})
