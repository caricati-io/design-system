import { useState } from 'react'
import Input, { Props as InputProps } from './input'

export type Props = Omit<InputProps, 'type' | 'autoComplete' | 'button'>

export default function InputPassword({ onChange, ...rest }: Props) {
  const [isShowPassword, setIsShowPassword] = useState(false)

  return (
    <Input
      type={isShowPassword ? 'text' : 'password'}
      autoComplete="off"
      onChange={onChange}
      button={{
        icon: isShowPassword ? 'eye-hide' : 'eye',
        onClick() {
          setIsShowPassword(!isShowPassword)
          onChange?.('', null)
        },
      }}
      {...rest}
    />
  )
}
