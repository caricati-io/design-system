import React from 'react'
import styled from 'styled-components'

import bellSvg from './bell-svg'
import chevronDownSvg from './chevron-down-svg'
import chevronLeftSvg from './chevron-left-svg'
import chevronRightSvg from './chevron-right-svg'
import chevronUpSvg from './chevron-up-svg'
import DotsHorizontalSvg from './dots-horizontal-svg'
import DotsVerticalSvg from './dots-vertical-svg'
import EyeHideSvg from './eye-hide-svg'
import EyeSvg from './eye-svg'
import FilterSvg from './filter-svg'
import GridDotsSvg from './grid-dots-svg'
import ImportantSvg from './important-svg'
import ListSvg from './list'
import plusSvg from './plus-svg'
import timesSvg from './times-svg'
import TashSvg from './trash-svg'

export const iconMap = {
  bell: bellSvg,
  filter: FilterSvg,
  important: ImportantSvg,
  times: timesSvg,
  trash: TashSvg,
  list: ListSvg,
  plus: plusSvg,
  eye: EyeSvg,
  'eye-hide': EyeHideSvg,
  'dots-horizontal': DotsHorizontalSvg,
  'dots-vertical': DotsVerticalSvg,
  'chevron-down': chevronDownSvg,
  'chevron-left': chevronLeftSvg,
  'chevron-right': chevronRightSvg,
  'chevron-up': chevronUpSvg,
  'grid-dots': GridDotsSvg,
}

const Container = styled.div<{ iconSize: string }>`
  display: inline;
  width: ${({ iconSize }) => iconSize};
  height: ${({ iconSize }) => iconSize};

  svg {
    width: ${({ iconSize }) => iconSize};
    height: ${({ iconSize }) => iconSize};
    float: left;
  }
`

export type IconType = keyof typeof iconMap

export const iconOptions = Object.keys(iconMap).sort((a, b) => (a > b ? 1 : -1))

export interface Props {
  name: IconType
  size?: number
  title?: string
  className?: string
}

export default function Icon({
  name,
  title,
  size = 16,
  className,
}: Props): React.ReactElement | null {
  const icon = iconMap[name]

  if (!icon) {
    return null
  }

  return (
    <Container title={title} className={className} iconSize={`${size / 16}rem`}>
      {icon}
    </Container>
  )
}
