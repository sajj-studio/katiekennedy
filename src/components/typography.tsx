import React from 'react'
import styled, { css, DefaultTheme } from 'styled-components'

interface TypographyProps {
  color: keyof DefaultTheme['colors']
  variant: 'title' | 'subtitle' | 'body'
}

export const Typography = styled.p<TypographyProps>`
  ${({ theme, color, variant }) => css`
    color: ${theme.colors[color]};

    ${(() => {
      switch (variant) {
        case 'title':
          return css`
            font-family: 'DM Serif Display';
            font-weight: regular;
            font-size: 2.8125rem;
          `

        case 'subtitle':
          return css`
            font-family: 'San Francisco Display';
            font-weight: 100;
            font-size: 1.1875rem;
            text-transform: uppercase;
          `

        case 'body':
          return css`
            font-family: 'San Francisco Display';
            font-weight: 100;
          `
      }
    })()}
  `}
`