import styled from 'styled-components'
import { keyActionClick } from '../../keyboard-event'

const Container = styled.div``

const Steps = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const Item = styled.div<{ isFilled: boolean }>`
  flex: 1;
  position: relative;
  padding-left: 0.25rem;

  &::after {
    content: '';
    width: 14px;
    height: 14px;
    display: block;
    border-radius: 50%;
    position: absolute;
    left: 0;
    bottom: -23px;
    border: 4px solid ${({ theme }) => theme.color.body};
    background-color: ${({ isFilled, theme }) =>
      isFilled ? theme.color.primary : theme.color.line};
  }
`

const Step = styled.div<{ hasCursorPointer: boolean }>`
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: ${({ hasCursorPointer }) =>
    hasCursorPointer ? 'pointer' : 'default'};
  color: ${({ theme }) => theme.color.textLight};

  & > span {
    display: block;
    margin-bottom: 4px;
  }

  &[aria-current='true'] {
    font-weight: 600;
    color: ${({ theme }) => theme.color.text};
  }
`

const Progress = styled.div<{ percent: number }>`
  height: 4px;
  border-radius: 2px;
  background: ${({ percent, theme }) =>
    `linear-gradient(to right, ${theme.color.primary} ${percent}%, ${theme.color.line} ${percent}%);`};
`

interface StepperItem {
  id: string
  label: string
}

export interface Props {
  current: string
  lastItemById?: string
  items: StepperItem[]
  onlyActiveIsClickable?: boolean
  onChange?(item: StepperItem): void
}

export default function Stepper({
  items,
  current,
  onChange,
  lastItemById,
  onlyActiveIsClickable = true,
}: Props) {
  const hasChangeEvent = !!onChange
  const currentIndex = items.findIndex(({ id }) => id === current)
  const lastItemIndex = (() => {
    if (lastItemById) {
      const indexFound = items.findIndex(({ id }) => id === lastItemById)
      if (indexFound > -1) return indexFound
    }
    return currentIndex
  })()

  const handleStepClick = (item: StepperItem) => onChange?.(item)

  return (
    <Container role="group">
      <Steps>
        {items.map((item, index) => {
          const isClickable =
            hasChangeEvent && (index <= lastItemIndex || !onlyActiveIsClickable)

          return (
            <Item key={item.id} isFilled={index <= lastItemIndex}>
              <Step
                tabIndex={0}
                role="button"
                aria-disabled={!isClickable}
                hasCursorPointer={isClickable}
                aria-current={index === currentIndex}
                onClick={() => isClickable && handleStepClick(item)}
                onKeyDown={(event) =>
                  keyActionClick(
                    event,
                    () => isClickable && handleStepClick(item)
                  )
                }
              >
                <span>{item.label}</span>
              </Step>
            </Item>
          )
        })}
      </Steps>
      <Progress percent={(100 * lastItemIndex) / items.length} />
    </Container>
  )
}
