import { Story } from '@storybook/react'
import ButtonGroup, { Props } from '.'
import Button from '../button'

export default {
  title: 'Components/Button Group',
  component: ButtonGroup,
}

const Template: Story<Props> = (args) => <ButtonGroup {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <Button>Item 1</Button>
      <Button primary>Item 2</Button>
      <Button>Item 3</Button>
    </>
  ),
}
