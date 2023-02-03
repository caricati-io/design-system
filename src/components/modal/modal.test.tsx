import { fireEvent, render } from '../../testing'

import Modal from '.'
import ModalHeader from './header'
import ModalBody from './body'
import ModalFooter from './footer'
import Button from '../button'

describe('<Modal />', () => {
  test('renders a Modal correctly', () => {
    const { getByText } = render(
      <Modal>
        <ModalHeader title="Modal title" />
        <ModalBody>
          <p>Modal body</p>
        </ModalBody>
        <ModalFooter hasButtonGap>
          <Button>Close</Button>
        </ModalFooter>
      </Modal>
    )
    expect(getByText('Modal title')).toBeInTheDocument()
    expect(getByText('Modal body')).toBeInTheDocument()
    expect(getByText('Close')).toBeInTheDocument()
  })

  test('should removes button gap from footer', () => {
    const { getByText } = render(
      <Modal>
        <ModalFooter>
          <Button>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
    expect(getByText('Cancel')).toBeInTheDocument()
  })

  test('dispatchs the onClose event', () => {
    const fn = jest.fn()

    const { getByRole } = render(
      <Modal onClose={fn}>
        <ModalHeader title="Modal title" />
        <ModalBody>
          <p>Modal body</p>
        </ModalBody>
      </Modal>
    )

    fireEvent.click(getByRole('button'))

    expect(fn).toBeCalledTimes(1)
  })
})
