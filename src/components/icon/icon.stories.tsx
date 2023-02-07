import { Story } from '@storybook/react'
import Icon, { Props, FlairNames, iconMap } from '.'

export default {
  title: 'Components/Icon',
  component: Icon,
}

const Template: Story<Props<FlairNames>> = (args) => <Icon {...args} />

export const Filled = Template.bind({})
Filled.argTypes = {
  name: {
    options: Object.keys(iconMap.filled),
    control: { type: 'select' },
  },
  flair: {
    defaultValue: 'filled',
    control: { type: 'select' },
    options: ['filled'],
  },
}
Filled.args = {
  name: 'check',
  flair: 'filled',
  size: 72,
} as Props<FlairNames>

export const Outlined = Template.bind({})
Outlined.argTypes = {
  name: {
    options: Object.keys(iconMap.outlined),
    control: { type: 'select' },
  },
  flair: {
    defaultValue: 'outlined',
    control: { type: 'select' },
    options: ['outlined'],
  },
}
Outlined.args = {
  name: 'check',
  flair: 'outlined',
  size: 72,
} as Props<FlairNames>
