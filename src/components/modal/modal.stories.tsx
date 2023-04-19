import { Story } from '@storybook/react'
import Modal, { Props } from '.'
import Button from '../button'
import ModalBody from './body'
import ModalFooter from './footer'
import ModalHeader from './header'

export default {
  title: 'Components/Modal',
  component: Modal,
}

const Template: Story<Props> = (args) => <Modal {...args} />

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
  onClose() {},
  children: (
    <>
      <ModalHeader title="Modal title" />
      <ModalBody>
        <p>modal body 1</p>
      </ModalBody>
      <ModalFooter hasButtonGap>
        <Button primary>Save</Button>
        <Button>Cancel</Button>
      </ModalFooter>
    </>
  ),
}
