import React, { FC } from 'react'
import styled, { css, DefaultTheme } from 'styled-components'
import { Typography } from './typography'

interface SectionTitleProps {
  color: keyof DefaultTheme['colors']
  circleColor?: keyof DefaultTheme['colors']
  children: string
}

export const SectionTitle: FC<SectionTitleProps> = ({
  color,
  circleColor,
  children,
}) => (
  <_Wrapper>
    <_Circle color={circleColor} />

    <Typography color={color} variant="title" as="h2">
      {children}
    </Typography>
  </_Wrapper>
)

const _Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin: 1.5rem 0;

    ${theme.media.tablet} {
      ${Typography} {
        padding-left: 1.25rem;
      }
    }
  `}
`

const _Circle = styled.div<{ color?: keyof DefaultTheme['colors'] }>`
  ${({ theme, color = 'beige' }) => css`
    position: absolute;
    width: 100%;

    ::before {
      display: block;
      position: absolute;
      content: ' ';
      background-size: 3.625rem 3.625rem;
      height: 3.625rem;
      width: 3.625rem;
      border: 1px solid ${theme.colors[color]};
      border-radius: 50%;
      left: -11%;
      transform: translate(-60%, -9px);
    }

    ${theme.media.tablet} {
      display: none;
    }
  `}
`
