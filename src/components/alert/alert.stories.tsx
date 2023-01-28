import { Story } from '@storybook/react'
import Alert, { Props } from '.'

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    variant: {
      options: ['error', 'success', 'info', 'warning'],
      control: { type: 'select' },
    },
  },
}

const Template: Story<Props> = (args) => <Alert {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Hello there!',
}
