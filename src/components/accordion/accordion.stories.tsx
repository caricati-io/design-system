import { Story } from '@storybook/react'
import Accordion, { Props } from '.'
import AccordionItem from './item'

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    status: {
      options: [undefined, 'online', 'busy', 'away', 'offline'],
      status: { type: 'select' },
    },
  },
}

const Template: Story<Props> = (args) => <Accordion {...args} />

export const Default = Template.bind({})
Default.args = {
  openOnlyOne: true,
  children: (
    <>
      <AccordionItem title="item 1">Content</AccordionItem>
      <AccordionItem title="item 2">Content</AccordionItem>
      <AccordionItem title="item 3">Content</AccordionItem>
    </>
  ),
}
