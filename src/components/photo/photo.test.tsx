import { render } from '../../testing'
import Photo from '.'

describe('<Photo />', () => {
  test('renders a photo correctly', () => {
    const { container } = render(<Photo src="/path/to/img" />)
    expect(container.querySelector('figure')).toBeInTheDocument()
  })

  test('renders a photo with online status', () => {
    const { container } = render(<Photo status="online" src="/path/to/img" />)
    expect(container.querySelector('figure')).toBeInTheDocument()
  })

  test('renders a photo with away status', () => {
    const { container } = render(<Photo status="away" src="/path/to/img" />)
    expect(container.querySelector('figure')).toBeInTheDocument()
  })

  test('renders a photo with offline status', () => {
    const { container } = render(<Photo status="offline" src="/path/to/img" />)
    expect(container.querySelector('figure')).toBeInTheDocument()
  })

  test('renders a photo with busy status', () => {
    const { container } = render(<Photo status="busy" src="/path/to/img" />)
    expect(container.querySelector('figure')).toBeInTheDocument()
  })

  test('renders a photo featured', () => {
    const { container } = render(<Photo featured src="/path/to/img" />)
    expect(container.querySelector('figure')).toBeInTheDocument()
  })

  test('renders a photo with counter', () => {
    const { getByText } = render(<Photo count={10} src="/path/to/img" />)
    expect(getByText('10')).toBeInTheDocument()
  })

  test('renders a photo with counter greater than 100', () => {
    const { getByText } = render(<Photo count={101} src="/path/to/img" />)
    expect(getByText('99+')).toBeInTheDocument()
  })
})
