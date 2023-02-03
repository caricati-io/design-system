import { render } from '../../testing'
import Photo from '.'

describe('<Photo />', () => {
  test('renders a Photo correctly', () => {
    const { container } = render(<Photo src='/path/to/img' />)
    expect(container.querySelector('figure')).toBeInTheDocument()
  })
})
