interface Props {
  method?: 'post' | 'get'
  children: React.ReactNode
}

export default function Form({ method, children }: Props) {
  return <form method={method}>{children}</form>
}
