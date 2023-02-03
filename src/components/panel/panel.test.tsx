import { render } from '../../testing'
import Panel from '.'
import PanelHeader from './header'
import PanelBody from './body'

describe('<Panel />', () => {
  test('renders a Photo correctly', () => {
    const { getByText } = render(
      <Panel>
        <PanelHeader title="Heading" />
        <PanelBody>Body of the panel</PanelBody>
      </Panel>
    )
    expect(getByText('Heading')).toBeInTheDocument()
    expect(getByText('Body of the panel')).toBeInTheDocument()
  })
})
