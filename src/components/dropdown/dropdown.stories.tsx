import { Story } from '@storybook/react'
import Dropdown, { Props } from '.'
import Button from '../button'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
}

const Template: Story<Props> = (args) => <Dropdown {...args} />

export const Default = Template.bind({})
Default.args = {
  trigger: ({ toggle }) => (
    <Button primary rightIcon="chevron-down" onClick={toggle}>
      Toggle
    </Button>
  ),
  items: [
    { label: 'Item 1', id: '1' },
    { label: 'Item 2', id: '2' },
    { label: 'With icon', id: '3', icon: 'filter' },
    { label: 'Disabled', id: '3', disabled: true },
  ],
}
