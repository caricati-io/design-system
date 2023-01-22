import Input, { Props } from './input'

export default function InputText(props: Omit<Props, 'type'>) {
  return <Input type="text" {...props} />
}