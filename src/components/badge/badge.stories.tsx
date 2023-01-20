import { Story } from '@storybook/react'
import Badge, { Props } from '.'
import { iconOptions } from '../icon'

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    color: {
      options: ['green', 'red', 'yellow', 'orange', 'blue'],
      control: { type: 'select' },
    },
    rightIcon: {
      options: [undefined, ...iconOptions],
      control: { type: 'select' },
    },
  },
}

const Template: Story<Props> = (args) => <Badge {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'label',
  onClick() {}
}
