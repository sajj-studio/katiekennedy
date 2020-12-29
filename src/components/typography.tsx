import styled, { css, DefaultTheme } from 'styled-components'

interface TypographyProps {
  color: keyof DefaultTheme['colors']
  variant: 'title' | 'subtitle' | 'body' | 'inline' | 'menu-desktop'
}

export const Typography = styled.p<TypographyProps>`
  ${({ theme, color, variant }) => css`
    color: ${theme.colors[color]};

    ${(() => {
      switch (variant) {
        case 'title':
          return css`
            font-family: ${theme.typography.serif};
            font-weight: 400;
            font-size: 2.8125rem;
          `

        case 'subtitle':
          return css`
            display: block;
            font-family: ${theme.typography.sansSerif};
            font-weight: 100;
            font-size: 1.1875rem;
            text-transform: uppercase;
            letter-spacing: 0.47px;
            margin-bottom: 0.7rem;
          `

        case 'body':
          return css`
            font-family: ${theme.typography.sansSerif};
            font-weight: 300;
            line-height: 1.125rem;
            margin: 1.25rem 0;
          `

        case 'inline':
          return css`
            font-family: ${theme.typography.sansSerif};
            font-weight: 300;
            line-height: 1.125rem;
          `

        case 'menu-desktop':
          return css`
            font-family: ${theme.typography.serif};
            font-weight: 300;
            line-height: 1.125rem;
            font-size: 1.1875rem;
          `
      }
    })()}
  `}
`
