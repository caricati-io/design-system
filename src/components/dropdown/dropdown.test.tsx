import { render } from '../../testing'

import Dropdown from '.'

describe('<ButtonGroup />', () => {
  test('renders a ButtonGroup correctly', () => {
    const { getByText } = render(
      <Dropdown
        trigger={() => <button type="button">Trigger</button>}
        items={[
          { id: '1', label: 'Item 1' },
          { id: '2', label: 'Item 2' },
          { id: '3', label: 'Item 3' },
        ]}
      />
    )
    expect(getByText('Trigger')).toBeInTheDocument()
  })
})
