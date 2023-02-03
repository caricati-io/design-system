import { fireEvent, render } from '../../testing'
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

  test('should defines the current value and last option', () => {
    const { getAllByRole } = render(
      <Stepper
        current="2"
        lastItemById="3"
        items={[
          { id: '1', label: 'item 1' },
          { id: '2', label: 'item 2' },
          { id: '3', label: 'item 3' },
          { id: '4', label: 'item 4' },
        ]}
      />
    )
    const buttons = getAllByRole('button')

    expect(buttons[0]).toHaveAttribute('aria-current', 'false')
    expect(buttons[1]).toHaveAttribute('aria-current', 'true')
    expect(buttons[2]).toHaveAttribute('aria-current', 'false')
    expect(buttons[3]).toHaveAttribute('aria-current', 'false')
  })

  test('should dispatchs a event when the item is clicked', () => {
    const fn = jest.fn()
    const { getAllByRole } = render(
      <Stepper
        current="2"
        lastItemById="3"
        onChange={fn}
        items={[
          { id: '1', label: 'item 1' },
          { id: '2', label: 'item 2' },
          { id: '3', label: 'item 3' },
          { id: '4', label: 'item 4' },
        ]}
      />
    )

    const buttons = getAllByRole('button')

    fireEvent.click(buttons[1])
    fireEvent.focus(buttons[1])
    fireEvent.keyDown(buttons[1], {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      charCode: 13,
    })

    expect(fn).toBeCalledTimes(2)
  })
})
