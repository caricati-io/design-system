import { Story } from '@storybook/react'
import Stepper, { Props } from '.'

export default {
  title: 'Components/Stepper',
  component: Stepper,
}

const Template: Story<Props> = (args) => <Stepper {...args} />

export const Default = Template.bind({})
Default.args = {
  current: '2',
  lastItemById: '3',
  onlyActiveIsClickable: false,
  onChange: (item) => console.log(`clicked step id: ${item.id}`),
  items: [
    { id: '1', label: 'Personal' },
    { id: '2', label: 'Contact' },
    { id: '3', label: 'Payment' },
    { id: '4', label: 'status' },
    { id: '5', label: 'Finish' },
  ],
}
