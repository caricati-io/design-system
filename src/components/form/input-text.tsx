import Input, { Props as InputProps } from './input'

export type Props = Omit<InputProps, 'type'>

export default function InputText(props: Omit<Props, 'type'>) {
  return <Input type="text" {...props} />
}