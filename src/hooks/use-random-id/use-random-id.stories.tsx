import { Story } from '@storybook/react'
import useRandomId from '.'

interface Props {
  nada: string
}

function Demo(args: Props) {
  const random = useRandomId()
  return <pre>id: {random()}</pre>
}

export default {
  title: 'Hooks/useRandomId',
}

const Template: Story<Props> = (args) => <Demo {...args} />

export const Default = Template.bind({})
Default.args = {}
