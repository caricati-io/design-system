import { Story } from '@storybook/react'
import Icon, { iconOptions, Props } from '.'

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      options: iconOptions,
      control: { type: 'select' },
    },
  },
}

const Template: Story<Props> = (args) => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 72,
  fill: false,
}
