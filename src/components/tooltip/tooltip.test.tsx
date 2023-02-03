import { fireEvent, render } from '../../testing'

import Tooltip from '.'

const styleVisible = {
  visibility: 'hidden',
}

const styleHide = {
  visibility: 'hidden',
}

describe('<Tooltip />', () => {
  test('renders a tooltip correctly', async () => {
    const { getByText } = render(
      <Tooltip label="Hi!">
        <p>Hover me</p>
      </Tooltip>
    )
    const tooltipContent = getByText('Hover me')
    fireEvent.mouseOver(tooltipContent)
    expect(getByText('Hi!')).toHaveStyle(styleVisible)
  })

  test('renders a tooltip on the bottom', () => {
    const { getByText } = render(
      <Tooltip position="bottom" label="bottom">
        Hover me
      </Tooltip>
    )
    const tooltipContent = getByText('Hover me')
    fireEvent.mouseOver(tooltipContent)
    expect(getByText('bottom')).toHaveStyle(styleVisible)
  })

  test('renders a tooltip on the top', () => {
    const { getByText } = render(
      <Tooltip position="top" label="top">
        Hover me
      </Tooltip>
    )
    const tooltipContent = getByText('Hover me')
    fireEvent.mouseOver(tooltipContent)
    expect(getByText('top')).toHaveStyle(styleVisible)
  })

  test('renders a tooltip on the left', () => {
    const { getByText } = render(
      <Tooltip position="left" label="left">
        Hover me
      </Tooltip>
    )
    const tooltipContent = getByText('Hover me')
    fireEvent.mouseOver(tooltipContent)
    expect(getByText('left')).toHaveStyle(styleVisible)
  })

  test('renders a tooltip on the right', () => {
    const { getByText } = render(
      <Tooltip position="right" label="right">
        Hover me
      </Tooltip>
    )
    const tooltipContent = getByText('Hover me')
    fireEvent.mouseOver(tooltipContent)
    expect(getByText('right')).toHaveStyle(styleVisible)
  })

  test('should hide the tooltip if the mouse leave', () => {
    const { getByText, queryByText } = render(
      <Tooltip position="right" label="right">
        Hover me
      </Tooltip>
    )
    const tooltipContent = getByText('Hover me')
    fireEvent.mouseOver(tooltipContent)
    expect(getByText('right')).toHaveStyle(styleVisible)

    fireEvent.mouseLeave(tooltipContent)
    expect(queryByText('right')).toHaveStyle(styleHide)
  })
})
