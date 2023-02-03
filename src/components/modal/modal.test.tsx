import { render } from '../../testing'

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
})
