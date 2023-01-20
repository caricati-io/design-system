import styled, { css } from 'styled-components'

const Container = styled.div<{ isFilled: boolean }>`
  height: 3.5rem;
  width: 100%;
  border-radius: 0.625rem;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.body};
  border: 2px solid ${({ theme }) => theme.colors.line};

  ${({ isFilled }) =>
    isFilled &&
    css`
      & > * {
        flex: 1;
      }
    `}
`

const TabItem = styled.button<{ isSelected: boolean }>`
  appearance: none;
  font-size: 1rem;
  height: 2.75rem;
  line-height: 2.75rem;
  padding: 0 1.75rem;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.btnDefault : 'transparent'};
  color: ${({ theme }) => theme.colors.btnDefaultText};
  border: none;
  border-radius: 0.625rem;
  cursor: pointer;
  font-weight: 500;
  transition: ease background-color 250ms;

  &:not(:last-child) {
    margin-right: 0.25rem;
  }

  &:disabled {
    cursor: default;
    color: ${({ theme }) => theme.colors.btnDefaultTextDisabled};
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.btnDefault};
  }
`

type ID = string | number

export interface Props {
  items: {
    id: ID
    label: string
    disabled?: boolean
  }[]
  selected?: ID
  filled?: boolean
  onChange?(selected: ID): void
}

export default function Tabs({ items, selected, onChange, filled }: Props) {
  return (
    <Container isFilled={!!filled}>
      {items?.map((item) => (
        <TabItem
          type="button"
          key={`${item.id}`}
          disabled={item.disabled}
          isSelected={selected === item.id}
          onClick={() => onChange?.(item.id)}
        >
          {item.label}
        </TabItem>
      ))}
    </Container>
  )
}
