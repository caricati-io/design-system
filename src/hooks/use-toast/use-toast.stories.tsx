import { Story } from '@storybook/react'
import styled from 'styled-components'
import useToast from '.'
import Button from '../../components/button'
import ButtonGroup from '../../components/button-group'

const Wrap = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

interface Props {
  nada: string
}

function Demo() {
  const toast = useToast()
  return (
    <Wrap>
      <ButtonGroup>
        <Button onClick={() => toast.success('Success tost')}>Success</Button>
        <Button onClick={() => toast.error('Error tost')}>Error</Button>
        <Button onClick={() => toast.warning('Warning toast')}>Warning</Button>
        <Button onClick={() => toast.info('Info toast')}>Info</Button>
      </ButtonGroup>
    </Wrap>
  )
}

export default {
  title: 'Hooks/useToast',
}

const Template: Story<Props> = () => <Demo />

export const Default = Template.bind({})
Default.args = {}
