import { fireEvent, render } from '../../testing'

import Badge from '.'

describe('<Badge />', () => {
  test('renders a badge correctly', () => {
    const { getByText } = render(<Badge label="default badge" />)
    expect(getByText('default badge')).toBeInTheDocument()
  })

  test('renders the blue variant', () => {
    const { getByText } = render(<Badge label="blue" variant="blue" />)
    expect(getByText('blue')).toBeInTheDocument()
  })

  test('renders the green variant', () => {
    const { getByText } = render(<Badge label="green" variant="green" />)
    expect(getByText('green')).toBeInTheDocument()
  })

  test('renders the orange variant', () => {
    const { getByText } = render(<Badge label="orange" variant="orange" />)
    expect(getByText('orange')).toBeInTheDocument()
  })

  test('renders the red variant', () => {
    const { getByText } = render(<Badge label="red" variant="red" />)
    expect(getByText('red')).toBeInTheDocument()
  })

  test('renders the yellow variant', () => {
    const { getByText } = render(<Badge label="yellow" variant="yellow" />)
    expect(getByText('yellow')).toBeInTheDocument()
  })

  test('renders and icon in the badge if I want', () => {
    const { container } = render(<Badge label="badge label" rightIcon="bell" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  test('dispacths an event click if I have the onChange attribute defined', () => {
    const fn = jest.fn()
    const { container } = render(
      <Badge label="badge label" onClick={fn} />
    )
    fireEvent.click(container.querySelector('button') as HTMLElement)
    expect(fn).toBeCalledTimes(1)
  })
})
