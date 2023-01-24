import { Story } from '@storybook/react'
import styled from 'styled-components'
import Tooltip, { Props } from '.'

const Box = styled.div`
  padding: 2rem;
  background-color: #00a3d4;
  border-radius: 8px;
  cursor: pointer;
  transition: all ease 250ms;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  }
`

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    position: {
      options: ['top', 'bottom', 'left', 'right'],
      control: { type: 'select' },
      default: 'top',
    },
  },
}

const Template: Story<Props> = (args) => (
  <div
    style={{
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Tooltip {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  label: 'The tooltoip title',
  children: <Box>Hover me</Box>,
}
