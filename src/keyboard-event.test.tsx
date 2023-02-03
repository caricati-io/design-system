import { render, fireEvent, userEvent } from './testing'
import { keyEsc, keyActionClick, keyCtrlEnter, keySpace, keyEnter } from './keyboard-event'

describe('KeyboardEvent handlers', () => {
  test('dispatchs the ESC event when it is pressed', () => {
    const fn = jest.fn()
    const { getByTestId } = render(
      <input data-testid="input" onKeyDown={e => keyEsc(e, fn)} />
    )
    fireEvent.keyDown(getByTestId('input'), {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27
    })
    expect(fn).toBeCalledTimes(1)
  })

  test('dispatchs the ActionClick event when it is pressed', () => {
    const fn = jest.fn()
    const { getByTestId } = render(
      <input data-testid="input" onKeyDown={e => keyActionClick(e, fn)} />
    )

    fireEvent.keyDown(getByTestId('input'), {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13
    })

    fireEvent.keyDown(getByTestId('input'), {
      key: "Space",
      code: "Space",
      keyCode: 32,
      charCode: 32
    })

    expect(fn).toBeCalledTimes(2)
  })

  test('dispatchs the Control+Enter event when it is pressed', () => {
    const fn = jest.fn()
    const { getByTestId } = render(
      <input data-testid="input" onKeyDown={e => keyCtrlEnter(e, fn)} />
    )

    getByTestId('input').focus()
    userEvent.keyboard('{ctrl}{enter}{/ctrl}')
    expect(fn).toBeCalledTimes(1)
  })

  test('dispatchs the Space event when it is pressed', () => {
    const fn = jest.fn()
    const { getByTestId } = render(
      <input data-testid="input" onKeyDown={e => keySpace(e, fn)} />
    )
    fireEvent.keyDown(getByTestId('input'), {
      key: "Space",
      code: "Space",
      keyCode: 32,
      charCode: 32
    })
    expect(fn).toBeCalledTimes(1)
  })

  test('dispatchs the Enter event when it is pressed', () => {
    const fn = jest.fn()
    const { getByTestId } = render(
      <input data-testid="input" onKeyDown={e => keyEnter(e, fn)} />
    )
    fireEvent.keyDown(getByTestId('input'), {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13
    })
    expect(fn).toBeCalledTimes(1)
  })
})
