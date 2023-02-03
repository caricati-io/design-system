import { render } from '../../testing'

import Tabs from '.'

describe('<Tabs />', () => {
  test('renders a Tabs correctly', () => {
    const { getByText } = render(
      <Tabs
        items={[
          { id: '1', label: 'Item 1' },
          { id: '2', label: 'Item 2' },
          { id: '3', label: 'Item 3', disabled: true },
        ]}
      />
    )
    expect(getByText('Item 1')).toBeInTheDocument()
    expect(getByText('Item 2')).toBeInTheDocument()
    expect(getByText('Item 3')).toBeInTheDocument()
  })
})
