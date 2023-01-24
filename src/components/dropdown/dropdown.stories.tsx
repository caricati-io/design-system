import { Story } from '@storybook/react'
import styled from 'styled-components'
import Dropdown, { Props } from '.'
import Button from '../button'

const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    xAxis: {
      options: ['left', 'right'],
      control: { type: 'select' },
    },
  },
}

const Template: Story<Props> = (args) => (
  <Container>
    <Dropdown {...args} />
  </Container>
)

export const Default = Template.bind({})
Default.args = {
  xAxis: 'right',
  triggerDistance: 8,
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
