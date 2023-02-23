import { fireEvent, render } from '../../testing'

import Select from './select'

const optionsDefaults = [
  { label: '1', value: 'Item 1' },
  { label: '2', value: 'Item 2' },
  { label: '3', value: 'Item 3' },
  { label: '4', value: 'Item 4' },
]

describe('<Select />', () => {
  test('renders a select correctly', () => {
    const { getByRole } = render(<Select />)
    expect(getByRole('combobox')).toBeInTheDocument()
  })

  test('shows placeholder by default in select', () => {
    const { getByText } = render(<Select placeholder="My placeholder" />)
    expect(getByText('My placeholder')).toBeInTheDocument()
  })

  test('opens a listbox when the select is clicked', () => {
    const { getByRole } = render(<Select />)
    fireEvent.click(getByRole('combobox'))
    expect(getByRole('listbox')).toBeInTheDocument()
  })

  test('opens a listbox when the action keyboard is pressed', () => {
    const { getByRole } = render(<Select />)

    fireEvent.keyDown(getByRole('combobox'), {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      charCode: 13,
    })

    expect(getByRole('listbox')).toBeInTheDocument()
  })

  test("shouldn't opens the listbox if the select is disabled", () => {
    const { queryByRole, getByRole } = render(<Select disabled />)
    fireEvent.click(getByRole('combobox'))
    expect(queryByRole('listbox')).toBeNull()
  })

  test('dispatchs an event when the option of the select is clicked', () => {
    const fn = jest.fn()
    const { getByRole, getAllByRole } = render(
      <Select options={optionsDefaults} onChange={fn} />
    )

    fireEvent.click(getByRole('combobox'))
    fireEvent.click(getAllByRole('option')[1])

    expect(fn).toBeCalledTimes(1)
  })

  test('shows the selected label when the value is defined', () => {
    const index = 0
    const { getByText } = render(
      <Select options={optionsDefaults} value={optionsDefaults[index].value} />
    )

    expect(getByText(optionsDefaults[index].label)).toBeInTheDocument()
  })

  test('shows a message when the select options is empty', () => {
    const { getByText, getByRole } = render(<Select options={[]} />)

    fireEvent.click(getByRole('combobox'))

    expect(getByText('No items found')).toBeInTheDocument()
  })

  test('defines the aria-select to option', () => {
    const { getByRole, queryAllByRole } = render(
      <Select options={optionsDefaults} value={optionsDefaults[1].value} />
    )

    fireEvent.click(getByRole('combobox'))

    const [op1, op2, op3, op4] = queryAllByRole('option')

    expect(op1).toHaveAttribute('aria-selected', 'false')
    expect(op2).toHaveAttribute('aria-selected', 'true')
    expect(op3).toHaveAttribute('aria-selected', 'false')
    expect(op4).toHaveAttribute('aria-selected', 'false')
  })

  test('dispatchs an event when the option of the select is pressed by action keyboard', () => {
    const fn = jest.fn()
    const { getByRole, getAllByRole } = render(
      <Select options={optionsDefaults} onChange={fn} />
    )

    fireEvent.click(getByRole('combobox'))

    const [firstOption] = getAllByRole('option')

    fireEvent.keyDown(firstOption, {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      charCode: 13,
    })

    expect(fn).toBeCalledTimes(1)
  })

  test('closes the listbox when the option is selected', () => {
    const { getByRole, container } = render(
      <Select options={optionsDefaults} />
    )
    fireEvent.click(getByRole('combobox'))

    const firstOption = container.querySelector(
      '[role="option"]'
    ) as HTMLElement
    fireEvent.click(firstOption)
    expect(container.querySelector('listbox')).not.toBeInTheDocument()
  })

  test('focus the select component when the label is clicked', () => {
    const { getByText, getByRole } = render(
      <Select options={optionsDefaults} label="focus me" />
    )
    fireEvent.click(getByText('focus me'))
    expect(getByRole('combobox')).toHaveFocus()
  })

  test('focus the select component when the label is dispatched by keyboard', () => {
    const { getByText, getByRole } = render(
      <Select options={optionsDefaults} label="focus me" />
    )
    fireEvent.keyDown(getByText('focus me'), {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      charCode: 13,
    })
    expect(getByRole('combobox')).toHaveFocus()
  })

  test('closes the listbox when click into outside of select element', async () => {
    const { getByText, getByRole, queryByRole } = render(
      <div>
        <Select options={optionsDefaults} />
        <button type="button">outside</button>
      </div>
    )

    fireEvent.click(getByRole('combobox'))
    expect(getByRole('listbox')).toBeInTheDocument()
    expect(getByRole('combobox')).toHaveAttribute('aria-expanded', 'true')

    fireEvent.mouseDown(getByText('outside'))

    expect(getByRole('combobox')).toHaveAttribute('aria-expanded', 'false')
    expect(queryByRole('listbox')).toBeNull()
  })
})
