import { useState } from 'react'
import Input, { Props } from './input'

export default function InputPassword({
  onChange,
  ...rest
}: Omit<Props, 'type'>) {
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
      // disabled only to this situation
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
  )
}
