import { render } from '../../testing'
import Icon from '.'

describe('<Icon />', () => {
  test('renders a icon correctly', () => {
    const { container } = render(<Icon name="bell" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  test('should be set the icon size', () => {
    const { container } = render(<Icon name="bell" fill size={22} />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  test('should be set the icon size', () => {
    const { container } = render(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <Icon flair="filled" name="noexists" size={22} />
    )
    expect(container.querySelector('svg')).not.toBeInTheDocument()
  })
})
