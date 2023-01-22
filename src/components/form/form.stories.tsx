import { useState } from 'react'
import Button from '../button'
import InputEmail from './input-email'
import InputPassword from './input-password'
import InputSearch from './input-search'
import InputText from './input-text'
import Row from './row'

export default {
  title: 'Components/Form',
  // component: ButtonGroup,
}

function Template() {
  const [search, setSearch] = useState('')
  return (
    <>
      <Row>
        <InputText title="Input text" placeholder="Type a simple text" />
      </Row>
      <Row>
        <InputEmail
          title="Input email"
          leftIcon="mail"
          placeholder="Type your e-mail"
        />
      </Row>
      <Row>
        <InputSearch
          value={search}
          title="Input search"
          onChange={setSearch}
          placeholder="What are you looking for?"
        />
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
