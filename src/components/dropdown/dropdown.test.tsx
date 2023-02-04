import { fireEvent, render } from '../../testing'

import Dropdown from '.'

describe('<Dropdown />', () => {
  test('renders a dropdown correctly', () => {
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

  test('opens the dropdown when the tigger is fired', () => {
    const { getByTestId, getByRole, queryByRole } = render(
      <Dropdown
        trigger={({ toggle }) => (
          <button type="button" data-testid="trigger" onClick={toggle}>
            Trigger
          </button>
        )}
        items={[
          { id: '1', label: 'Item 1' },
          { id: '2', label: 'Item 2' },
          { id: '3', label: 'Item 3' },
        ]}
      />
    )
    expect(queryByRole('listbox')).toBeNull()
    fireEvent.click(getByTestId('trigger'))
    expect(getByRole('listbox')).toBeInTheDocument()
  })

  test('dispatchs an event when the option is clicked', () => {
    const onClick = jest.fn()
    const { getByTestId, getAllByRole } = render(
      <Dropdown
        trigger={({ toggle }) => (
          <button type="button" data-testid="trigger" onClick={toggle}>
            Trigger
          </button>
        )}
        items={[
          { id: '1', label: 'Item 1', onClick },
          { id: '2', label: 'Item 2', onClick },
          { id: '3', label: 'Item 3', onClick },
        ]}
      />
    )
    fireEvent.click(getByTestId('trigger'))
    const options = getAllByRole('option')

    fireEvent.click(options[0])
    fireEvent.click(options[1])

    fireEvent.focus(options[2])
    fireEvent.keyDown(options[2], {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      charCode: 13,
    })

    expect(onClick).toBeCalledTimes(3)
  })

  test('uses event on trigger to open the listbox', () => {
    const { getByTestId, getByRole } = render(
      <Dropdown
        trigger={({ handleOpen }) => (
          <button type="button" data-testid="trigger" onClick={handleOpen}>
            Trigger
          </button>
        )}
        items={[
          { id: '1', label: 'Item 1' },
          { id: '2', label: 'Item 2' },
        ]}
      />
    )

    fireEvent.click(getByTestId('trigger'))
    expect(getByRole('listbox')).toBeInTheDocument()
  })

  test('uses event on option to close the listbox', () => {
    const { getByTestId, getAllByRole, queryByRole } = render(
      <Dropdown
        trigger={({ handleOpen }) => (
          <button type="button" data-testid="trigger" onClick={handleOpen}>
            Trigger
          </button>
        )}
        items={[
          {
            id: '1',
            label: 'Item 1',
            onClick({ handleClose }) {
              handleClose()
            },
          },
          { id: '2', label: 'Item 2' },
        ]}
      />
    )

    fireEvent.click(getByTestId('trigger'))
    fireEvent.click(getAllByRole('option')[0])

    expect(queryByRole('listbox')).toBeNull()
  })

  test('should gets the actions handleClose, handleOpen, toggle and isOpen on click event from options', () => {
    expect.assertions(4)
    const { getByTestId, getAllByRole } = render(
      <Dropdown
        trigger={({ handleOpen }) => (
          <button type="button" data-testid="trigger" onClick={handleOpen}>
            Trigger
          </button>
        )}
        items={[
          {
            id: '1',
            label: 'Item 1',
            onClick({ handleClose, handleOpen, isOpen, toggle }) {
              expect(typeof handleClose).toBe('function')
              expect(typeof handleOpen).toBe('function')
              expect(typeof toggle).toBe('function')
              expect(isOpen).toBeTruthy()
            },
          },
          { id: '2', label: 'Item 2' },
        ]}
      />
    )

    fireEvent.click(getByTestId('trigger'))
    fireEvent.click(getAllByRole('option')[0])
  })

  test('should gets the actions handleClose, handleOpen, toggle and isOpen on click event from trigger', () => {
    expect.assertions(4)
    const { getByTestId } = render(
      <Dropdown
        trigger={({ handleOpen, handleClose, isOpen, toggle }) => (
          <button
            type="button"
            data-testid="trigger"
            onClick={() => {
              expect(typeof handleClose).toBe('function')
              expect(typeof handleOpen).toBe('function')
              expect(typeof toggle).toBe('function')
              expect(isOpen).toBeFalsy()
            }}
          >
            Trigger
          </button>
        )}
        items={[
          { id: '1', label: 'Item 1' },
          { id: '2', label: 'Item 2' },
        ]}
      />
    )

    fireEvent.click(getByTestId('trigger'))
  })

  test('sets the listbox on render if I want', () => {
    const { getByRole } = render(
      <Dropdown
        isOpenByDefault
        trigger={({ toggle }) => (
          <button type="button" data-testid="trigger" onClick={toggle}>
            Trigger
          </button>
        )}
        items={[{ id: '1', label: 'Item 1' }]}
      />
    )
    const box = getByRole('listbox')
    expect(box).toBeInTheDocument()
  })

  test('shows the dropdown box to the left position', () => {
    const { getByTestId, getByRole } = render(
      <Dropdown
        xAxis="left"
        trigger={({ toggle }) => (
          <button type="button" data-testid="trigger" onClick={toggle}>
            Trigger
          </button>
        )}
        items={[{ id: '1', label: 'Item 1' }]}
      />
    )
    fireEvent.click(getByTestId('trigger'))
    const box = getByRole('listbox')

    expect(box).toHaveStyle({ right: 0 })
  })

  test('shows the dropdown box to the right position', () => {
    const { getByTestId, getByRole } = render(
      <Dropdown
        xAxis="right"
        trigger={({ toggle }) => (
          <button type="button" data-testid="trigger" onClick={toggle}>
            Trigger
          </button>
        )}
        items={[{ id: '1', label: 'Item 1' }]}
      />
    )
    fireEvent.click(getByTestId('trigger'))
    const box = getByRole('listbox')

    expect(box).toHaveStyle({ left: 0 })
  })

  test('should renders the icon in option', () => {
    const { getByTestId, container } = render(
      <Dropdown
        xAxis="right"
        trigger={({ toggle }) => (
          <button type="button" data-testid="trigger" onClick={toggle}>
            Trigger
          </button>
        )}
        items={[{ id: 'notification', label: 'Notifications', icon: 'bell' }]}
      />
    )
    fireEvent.click(getByTestId('trigger'))

    expect(container.querySelector('*[role="option"] svg')).toBeInTheDocument()
  })
})
