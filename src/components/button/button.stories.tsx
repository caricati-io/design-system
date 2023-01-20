import { Story } from '@storybook/react'
import Button, { Props } from '.'

export default {
  title: 'Components/Buttons',
  component: Button,
}

const Template: Story<Props> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  primary: true,
  small: false,
  submit: false,
  disabled: false,
  className: '',
  children: 'Submit',
}
