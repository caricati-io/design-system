import Input, { Props as InputProps } from './input'

export interface Props extends Omit<InputProps, 'type'> {
  hasSearchIcon?: boolean
}

export default function InputSearch({
  value,
  onChange,
  hasSearchIcon = true,
  ...props
}: Props) {
  return (
    <Input
      type="text"
      value={value}
      onChange={onChange}
      leftIcon={hasSearchIcon ? 'search' : null}
      {...props}
      button={
        !value
          ? null
          : {
              icon: 'times',
              onClick() {
                onChange?.('', null)
              },
            }
      }
    />
  )
}
