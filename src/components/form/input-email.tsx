import Input, { Props } from './input'

export default function InputEmail(props: Omit<Props, 'type'>) {
  return <Input type="email" {...props} />
}