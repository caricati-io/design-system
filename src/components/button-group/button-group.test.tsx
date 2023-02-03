import { render } from '../../testing'

import ButtonGroup from '.'
import Button from '../button'

describe('<ButtonGroup />', () => {
  test('renders a ButtonGroup correctly', () => {
    const { getByText } = render(
      <ButtonGroup>
        <Button>item 1</Button>
        <Button>item 2</Button>
        <Button>item 3</Button>
      </ButtonGroup>
    )
    expect(getByText('item 1')).toBeInTheDocument()
    expect(getByText('item 2')).toBeInTheDocument()
    expect(getByText('item 3')).toBeInTheDocument()
  })
})
