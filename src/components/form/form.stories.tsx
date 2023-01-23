import { Story } from '@storybook/react'
import { useState } from 'react'

import Row from './row'
import Button from '../button'
import { iconOptions } from '../icon'
import R, { Props as RadioProps } from './radio'
import Sel, { Props as SelectProps } from './select'
import Tgl, { Props as ToggleProps } from './toggle'
import Check, { Props as CheckboxProps } from './checkbox'
import Text, { Props as InputTextProps } from './input-text'
import Txtarea, { Props as TextareaProps } from './textarea'
import Email, { Props as InputEmailProps } from './input-email'
import Search, { Props as InputSearchProps } from './input-search'
import Password, { Props as InputPasswordProps } from './input-password'

export default {
  title: 'Components/Form',
}

function Template() {
  const [search, setSearch] = useState('')
  const [select, setSelect] = useState('')
  const [checkbox, setCheckbox] = useState(false)
  const [toggle, setToggle] = useState(false)

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Row>
        <Text required label="Input text" placeholder="Type a simple text" />
      </Row>
      <Row>
        <Email
          required
          label="Input email"
          leftIcon="mail"
          placeholder="Type your e-mail"
        />
      </Row>
      <Row>
        <Search
          value={search}
          label="Input search"
          leftIcon="mail"
          placeholder="Type your e-mail"
        />
      </Row>
      <Row>
        <Search
          value={search}
          label="Input search"
          onChange={setSearch}
          placeholder="What are you looking for?"
        />
      </Row>
      <Row>
        <Password
          leftIcon="key"
          label="Input password"
          placeholder="Write your favorite password"
        />
      </Row>
      <Row>
        <Sel
          label="Select box"
          value={select}
          onChange={setSelect}
          options={[
            { value: '1', label: 'Item 1' },
            { value: '2', label: 'Item 2' },
            { value: '3', label: 'Item 3' },
            { value: '4', label: 'Item 4' },
            { value: '5', label: 'Item 5' },
          ]}
          placeholder="Select one item..."
        />
      </Row>
      <Row>
        <Check label="Check all" checked={checkbox} onChange={setCheckbox} />
      </Row>
      <Row>
        <R label="Radio box" checked={checkbox} onChange={setCheckbox} />
      </Row>
      <Row>
        <Tgl label="Toggle" checked={toggle} onChange={setToggle} />
      </Row>
      <Row spacingDown="1.75rem">
        <Txtarea rows={3} label="Textarea" placeholder="Write something..." />
      </Row>
      <Row type="button-group">
        <Button primary submit>
          Submit
        </Button>
        <Button>Cancel</Button>
      </Row>
    </form>
  )
}

export const Default = Template.bind({})

const InputTextTemplate: Story<InputTextProps> = (args) => <Text {...args} />
export const InputText = InputTextTemplate.bind({})
InputText.args = {
  value: '',
  label: 'Text label',
  placeholder: 'Type something...',
  disabled: false,
  required: false,
  name: '',
  leftIcon: null,
  autoFocus: false,
  maxLength: 500,
  autoComplete: 'off',
  onChange: () => null,
}
InputText.argTypes = {
  leftIcon: {
    options: iconOptions,
    control: { type: 'select' },
    default: null,
  },
}

const InputEmailTemplate: Story<InputEmailProps> = (args) => <Email {...args} />
export const InputEmail = InputEmailTemplate.bind({})
InputEmail.args = {
  value: '',
  label: 'E-mail label',
  placeholder: 'Type your e-mail address',
  disabled: false,
  required: false,
  name: '',
  leftIcon: null,
  autoFocus: false,
  maxLength: 500,
  autoComplete: 'off',
  onChange: () => null,
}
InputEmail.argTypes = {
  leftIcon: {
    options: iconOptions,
    control: { type: 'select' },
    default: null,
  },
}

const InputPasswordTemplate: Story<InputPasswordProps> = (args) => (
  <Password {...args} />
)
export const InputPassword = InputPasswordTemplate.bind({})
InputPassword.args = {
  value: '',
  label: 'Password label',
  placeholder: 'Type your favorite password',
  disabled: false,
  required: false,
  name: '',
  leftIcon: null,
  autoFocus: false,
  maxLength: 500,
  onChange: () => null,
}
InputPassword.argTypes = {
  leftIcon: {
    options: iconOptions,
    control: { type: 'select' },
    default: null,
  },
}

const InputSearchTemplate: Story<InputSearchProps> = (args) => (
  <Search {...args} />
)
export const InputSearch = InputSearchTemplate.bind({})
InputSearch.args = {
  value: '',
  label: 'Search label',
  placeholder: 'What are you looking for?',
  disabled: false,
  required: false,
  name: '',
  leftIcon: null,
  autoFocus: false,
  maxLength: 500,
  onChange: () => null,
}
InputSearch.argTypes = {
  leftIcon: {
    options: iconOptions,
    control: { type: 'select' },
    default: null,
  },
}

const TextareaTemplate: Story<TextareaProps> = (args) => <Txtarea {...args} />
export const Textarea = TextareaTemplate.bind({})
Textarea.args = {
  value: '',
  rows: 5,
  label: 'Write about you',
  placeholder: 'Tell me someting about you',
  disabled: false,
  required: false,
  name: '',
  autoFocus: false,
  maxLength: 500,
  onChange: () => null,
}

const SelectTemplate: Story<SelectProps> = (args) => <Sel {...args} />
export const Select = SelectTemplate.bind({})
Select.args = {
  label: 'Select',
  value: '',
  required: false,
  disabled: false,
  placeholder: 'Select an option',
  options: [
    { value: '1', label: 'Item 1' },
    { value: '2', label: 'Item 2' },
    { value: '3', label: 'Item 3' },
    { value: '4', label: 'Item 4' },
    { value: '5', label: 'Item 5' },
  ],
  onChange: () => null,
}

const CheckboxTemplate: Story<CheckboxProps> = (args) => <Check {...args} />
export const Checkbox = CheckboxTemplate.bind({})
Checkbox.args = {
  label: 'check it',
  checked: false,
  disabled: false,
  onChange: () => null,
}

const RadioTemplate: Story<RadioProps> = (args) => <R {...args} />
export const Radio = RadioTemplate.bind({})
Radio.args = {
  label: 'check it',
  checked: false,
  disabled: false,
  onChange: () => null,
}

const ToggleTemplate: Story<ToggleProps> = (args) => <Tgl {...args} />
export const Toggle = ToggleTemplate.bind({})
Toggle.args = {
  label: 'check it',
  checked: false,
  disabled: false,
  onChange: () => null,
}
