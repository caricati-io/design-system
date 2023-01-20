import { Story } from '@storybook/react'
import Tabs, { Props } from '.'

export default {
  title: 'Components/Tabs',
  component: Tabs,
}

const Template: Story<Props> = (args) => <Tabs {...args} />

export const Default = Template.bind({})
Default.args = {
  selected: '1',
  filled: false,
  items: [
    { label: 'Item 1', id: '1' },
    { label: 'Item 2', id: '2' },
    { label: 'Item 3', id: '3' },
    { label: 'Disabled', id: '3', disabled: true },
  ],
}
