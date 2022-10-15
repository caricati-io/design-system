interface Props {
  children: string
}

export default function Button({ children }: Props) {
  return <p>{children}</p>
}
