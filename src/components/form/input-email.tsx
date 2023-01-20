import Input, { Props } from './input'

export default function InputEmail(props: Omit<Props, 'type'>) {
  // disabled only to this situation
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Input type="email" {...props} />
}