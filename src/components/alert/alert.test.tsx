import { render } from '../../testing'

import Alert from '.'

describe('<Alert />', () => {
  test('renders an alert correctly', () => {
    const { getByText } = render(
      <Alert variant="warning">Warning! Fill all fields</Alert>
    )
    expect(getByText('Warning! Fill all fields')).toBeInTheDocument()
  })

  test('renders the alert without variant', () => {
    const { getByText } = render(
      <Alert>default message</Alert>
    )
    expect(getByText('default message')).toBeInTheDocument()
  })

  test('renders the error variant', () => {
    const { getByText } = render(
      <Alert variant="error">error message</Alert>
    )
    expect(getByText('error message')).toBeInTheDocument()
  })

  test('renders the info variant', () => {
    const { getByText } = render(
      <Alert variant="info">info message</Alert>
    )
    expect(getByText('info message')).toBeInTheDocument()
  })

  test('renders the success variant', () => {
    const { getByText } = render(
      <Alert variant="success">success message</Alert>
    )
    expect(getByText('success message')).toBeInTheDocument()
  })

  test('renders the warning variant', () => {
    const { getByText } = render(
      <Alert variant="warning">warning message</Alert>
    )
    expect(getByText('warning message')).toBeInTheDocument()
  })
})
