import Button from '../button'
import Input from './input'
import InputEmail from './input-email'
import InputPassword from './input-password'
import InputText from './input-text'
import Row from './row'

export default {
  title: 'Components/Form',
  // component: ButtonGroup,
}

function Template() {
  return (
    <>
      <Row>
        <InputText title="Input text" placeholder="Type a simple text" />
      </Row>
      <Row>
        <InputEmail title="Input email" placeholder="Type your e-mail" />
      </Row>
      <Row spacingDown="1.75rem">
        <InputPassword
          title="Input password"
          placeholder="Write your favorite password"
        />
      </Row>
      <Row type="button-group">
        <Button primary>Submit</Button>
        <Button>Cancel</Button>
      </Row>
    </>
  )
}

export const Default = Template.bind({})
