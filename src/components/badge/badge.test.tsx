import { render } from '../../testing'

import Badge from '.'

describe('<Badge />', () => {
  test('renders a Badge correctly', () => {
    const { getByText } = render(
      <Badge label='Bug' />
    )
    expect(getByText('Bug')).toBeInTheDocument()
  })
})
