import { render } from '../../testing'

import ClickOutside from '.'

describe('<ClickOutside />', () => {
  test('renders a ClickOutside correctly', () => {
    const { getByText } = render(
      <ClickOutside onOutside={() => null}>Click Outside</ClickOutside>
    )
    expect(getByText('Click Outside')).toBeInTheDocument()
  })
})
