import React, { FC } from 'react'
import styled, { DefaultTheme } from 'styled-components'
import { theme } from '../../components/sc-theme'

interface LogoProps {
  color: keyof DefaultTheme['colors']
}

export const FacebookLogo: FC<LogoProps> = props => {
  return (
    <_SvgWrapper
      fill={theme.colors[props.color]}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="480px"
      height="480px"
    >
      {' '}
      <path d="M12,0C5.373,0,0,5.373,0,12c0,6.016,4.432,10.984,10.206,11.852V15.18H7.237v-3.154h2.969V9.927c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L16.73,15.18h-3.106v8.697 C19.481,23.083,24,18.075,24,12C24,5.373,18.627,0,12,0z" />
    </_SvgWrapper>
  )
}

const _SvgWrapper = styled.svg`
  width: 100%;
  height: 100%;
`