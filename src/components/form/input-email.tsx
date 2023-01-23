import Input, { Props as InputProps } from './input'

export type Props = Omit<InputProps, 'type'>

export default function InputEmail(props: Props) {
  return <Input type="email" {...props} />
}