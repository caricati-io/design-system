import { render } from '../../testing'
import Panel from '.'
import PanelHeader from './header'
import PanelBody from './body'

describe('<Panel />', () => {
  test('renders a panel correctly', () => {
    const { getByText } = render(
      <Panel>
        <PanelHeader
          title="Heading"
          icon="bell"
        />
        <PanelBody>Body of the panel</PanelBody>
      </Panel>
    )
    expect(getByText('Heading')).toBeInTheDocument()
    expect(getByText('Body of the panel')).toBeInTheDocument()
  })

  test('renders a danger panel correctly', () => {
    const { getByText } = render(
      <Panel danger>
        <PanelHeader
          title="Danger!"
          icon="check"
        />
        <PanelBody>Body</PanelBody>
      </Panel>
    )
    expect(getByText('Danger!')).toBeInTheDocument()
  })
})
