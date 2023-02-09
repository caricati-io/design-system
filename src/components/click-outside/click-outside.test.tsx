import styled from 'styled-components'
import { fireEvent, render } from '../../testing'

import ClickOutside from '.'

const AnotherBlock = styled.button`
  width: 200px;
  height: 200px;
`

describe('<ClickOutside />', () => {
  test('renders a ClickOutside correctly', () => {
    const { getByText } = render(
      <ClickOutside onOutside={() => null}>Click Outside</ClickOutside>
    )
    expect(getByText('Click Outside')).toBeInTheDocument()
  })

  test('should dispatchs the event when the mouse is clicked outside of the element', () => {
    const fn = jest.fn()
    const { getByText, getByTestId } = render(
      <>
        <AnotherBlock data-testid="another-block" />
        <ClickOutside onOutside={fn}>
          Safe Zone
        </ClickOutside>
      </>
    )

    fireEvent.mouseDown(getByTestId('another-block'))
    fireEvent.mouseDown(getByText('Safe Zone'))

    expect(fn).toBeCalledTimes(1)
  })
})
