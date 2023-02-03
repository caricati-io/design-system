import { render } from '../../testing'
import Stepper from '.'

describe('<Stepper />', () => {
  test('renders a Stepper correctly', () => {
    const { container } = render(
      <Stepper
        current="2"
        items={[
          { id: '1', label: 'item 1' },
          { id: '2', label: 'item 2' },
          { id: '3', label: 'item 3' },
        ]}
      />
    )
    expect(container.querySelector('[role=group]')).toBeInTheDocument()
  })
})
