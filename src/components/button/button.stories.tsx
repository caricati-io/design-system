import React from 'react'
import { Story } from '@storybook/react'
import Button, { Props } from '.'

export default {
  title: 'Components/Buttons',
  component: Button,
}

const Template: Story<Props> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  children: 'primary',
}

export const Small = Template.bind({})
Small.args = {
  small: true,
  children: 'small',
}
