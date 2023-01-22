import { Story } from '@storybook/react'
import Button, { Props } from '.'
import { iconOptions } from '../icon'

export default {
  title: 'Components/Buttons',
  component: Button,
  leftIcon: {
    options: [undefined, ...iconOptions],
    control: { type: 'select' },
  },
  rightIcon: {
    options: [undefined, ...iconOptions],
    control: { type: 'select' },
  },
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
