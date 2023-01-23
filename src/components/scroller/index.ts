import styled, { css } from 'styled-components'

const Scroller = styled.div<{ maxHeight?: string }>`
  ${({ maxHeight, theme }) => css`
    max-height: ${maxHeight || '100%'};
    overflow-y: auto;
    overflow-x: hidden;

    /* width */
    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 4px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.45);
      border-radius: 4px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.65);
    }
  `}
`

export default Scroller
