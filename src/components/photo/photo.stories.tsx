import { Story } from '@storybook/react'
import Photo, { Props } from '.'

export default {
  title: 'Components/Photo',
  component: Photo,
  argTypes: {
    status: {
      options: [undefined, 'online', 'busy', 'away', 'offline'],
      status: { type: 'select' },
    },
  },
}

const Template: Story<Props> = (args) => <Photo {...args} />

export const Default = Template.bind({})
Default.args = {
  src: 'https://avatars.githubusercontent.com/u/108311993?s=200&v=4',
  alt: '',
  status: undefined,
  featured: false,
  size: 100,
  count: 0,
}
