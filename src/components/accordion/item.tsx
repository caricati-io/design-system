import { useContext, useId } from 'react'
import styled from 'styled-components'
import { keyActionClick } from '../../keyboard-event'
import Icon from '../icon'
import accordionContext from './context'

const Container = styled.article``

const Header = styled.header`
  padding: 12px 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.box};
  border-bottom: 2px solid ${({ theme }) => theme.colors.line};
  cursor: pointer;

  h3 {
    font-size: 1rem;
    margin: 0;
    padding: 0;
    font-weight: 600;
  }
`

const Content = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.body};
  border-bottom: 2px solid ${({ theme }) => theme.colors.line};

  &[aria-hidden='true'] {
    display: none;
  }
`

export interface Props {
  title: string
  children: React.ReactNode
}

export default function AccordionItem({ title, children }: Props) {
  const accordionId = useId()
  const contentId = useId()
  const { openIds, handleToggle } = useContext(accordionContext)
  const isOpen = openIds.includes(accordionId)

  const toggle = () => handleToggle(accordionId)

  return (
    <Container>
      <Header
        role="button"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={`_${contentId}`}
        id={`_${accordionId}`}
        onKeyDown={(event) => keyActionClick(event, toggle)}
      >
        <h3>{title}</h3>
        <Icon name="chevron-down" size={24} />
      </Header>
      <Content
        role="region"
        id={`_${contentId}`}
        aria-hidden={!isOpen}
        aria-labelledby={`_${accordionId}`}
      >
        {children}
      </Content>
    </Container>
  )
}
