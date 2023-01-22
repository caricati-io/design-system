import { useContext } from 'react'
import styled from 'styled-components'
import ButtonClean from '../button/clean'
import Icon from '../icon'
import modalContext from './context'

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 26px;
  padding: 1.25rem 1.25rem 0.625rem;
  border-bottom: 2px solid ${({ theme }) => theme.color.lineLight};
  justify-content: space-between;

  h2 {
    font-size: 1.375rem;
    font-weight: 600;
    margin: 0;
    padding: 0;
    word-wrap: break-word;
  }
`

const BtnClose = styled(ButtonClean)`
  cursor: pointer;
  width: 26px;
  height: 26px;
  border-radius: 0.25rem;
`

export interface Props {
  title: string
  className?: string
}

export default function ModalHeader({ title, className }: Props) {
  const { handleClose } = useContext(modalContext)

  return (
    <Container className={className}>
      <h2>{title}</h2>
      {typeof handleClose === 'function' && (
        <BtnClose type="button" onClick={handleClose}>
          <Icon name="times" size={26} />
        </BtnClose>
      )}
    </Container>
  )
}
