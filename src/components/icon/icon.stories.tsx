import { Story } from '@storybook/react'
import Icon, { Props, iconOptions } from '.'

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
  name: 'grid-dots',
  size: 72,
}
