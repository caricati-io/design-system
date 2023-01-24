import { Story } from '@storybook/react'
import Panel, { Props } from '.'
import Badge from '../badge'
import Button from '../button'
import GhostButton from '../button/ghost'
import Dropdown from '../dropdown'
import Icon from '../icon'
import Tooltip from '../tooltip'
import PanelBody from './body'
import PanelHeader from './header'

export default {
  title: 'Components/Panel',
  component: Panel,
}

const Template: Story<Props> = (args) => (
  <div style={{ marginTop: '3rem' }}>
    <Panel {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  danger: false,
  children: (
    <>
      <PanelHeader title="Heading" icon="mail" />
      <PanelBody>Panel body</PanelBody>
    </>
  ),
}

export const WidthActions = Template.bind({})
WidthActions.args = {
  danger: false,
  children: (
    <>
      <PanelHeader title="Heading">
        <GhostButton>action</GhostButton>
        <Tooltip label="Send e-mail">
          <GhostButton>
            <Icon name="mail" size={20} />
          </GhostButton>
        </Tooltip>
        <Dropdown
          xAxis="left"
          minWidth="140px"
          triggerDistance={16}
          trigger={({ toggle }) => (
            <GhostButton onClick={toggle}>
              <Icon name="dots-vertical" size={20} />
            </GhostButton>
          )}
          items={[
            { id: '1', label: 'Item 1' },
            { id: '2', label: 'Item 2' },
          ]}
        />
      </PanelHeader>
      <PanelBody>Panel body</PanelBody>
    </>
  ),
}

export const WidthBadge = Template.bind({})
WidthBadge.args = {
  danger: false,
  children: (
    <>
      <PanelHeader title="Heading">
        <Badge label="Feature" color="green" />
      </PanelHeader>
      <PanelBody>Panel body</PanelBody>
    </>
  ),
}

export const WidthButton = Template.bind({})
WidthButton.args = {
  danger: false,
  children: (
    <>
      <PanelHeader title="Heading">
        <Button primary small>
          new
        </Button>
      </PanelHeader>
      <PanelBody>Panel body</PanelBody>
    </>
  ),
}
