import { useContext, useId, useRef } from 'react'
import styled, { css } from 'styled-components'
import { keyActionClick } from '../../keyboard-event'
import Icon from '../icon'
import accordionContext from './context'

const Container = styled.article<{ isOpen: boolean }>`
  ${({ isOpen }) =>
    !isOpen &&
    css`
      &:last-child > header {
        border-bottom: 0;
      }
    `}

  &:last-child > div[role='region'] {
    border-bottom: 0;
  }
`

const Header = styled.header`
  padding: 12px 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.box};
  border-bottom: 2px solid ${({ theme }) => theme.color.line};
  cursor: pointer;

  h3 {
    font-size: 1rem;
    margin: 0;
    padding: 0;
    font-weight: 600;
  }
`

const Content = styled.div<{ childOffsetHeight: number }>`
  background-color: ${({ theme }) => theme.color.body};
  border-bottom: 2px solid ${({ theme }) => theme.color.line};
  transition: max-height ease-in-out 300ms;
  max-height: ${({ childOffsetHeight }) => childOffsetHeight + 40}px;
  overflow-y: hidden;

  &[aria-hidden='true'] {
    max-height: 0;
    border-bottom: 0;
  }
`

const IconArrow = styled(Icon)<{ isOpen: boolean }>`
  transition: ease-in-out transform 300ms;
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(-180deg);
    `}
`

const Context = styled.div`
  padding: 20px;
`

export interface Props {
  title: string
  children: React.ReactNode
}

export default function AccordionItem({ title, children }: Props) {
  const accordionId = useId()
  const contentId = useId()
  const { openIds, handleToggle } = useContext(accordionContext)
  const contextRef = useRef<HTMLDivElement>(null)
  const isOpen = openIds.includes(accordionId)

  const toggle = () => handleToggle(accordionId)

  return (
    <Container isOpen={isOpen}>
      <Header
        role="button"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={`_${contentId}`}
        id={`_${accordionId}`}
        onKeyDown={(event) => keyActionClick(event, toggle)}
      >
        <h3>{title}</h3>
        <IconArrow name="chevron-down" size={24} isOpen={isOpen} />
      </Header>
      <Content
        role="region"
        id={`_${contentId}`}
        aria-hidden={!isOpen}
        aria-labelledby={`_${accordionId}`}
        childOffsetHeight={contextRef.current?.offsetHeight || 500}
      >
        <Context ref={contextRef}>{children}</Context>
      </Content>
    </Container>
  )
}
