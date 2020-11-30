import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

interface ButtonProps {
  variant: 'filled' | 'outline'
  disabled?: boolean
}

export const Button = styled(Link)<ButtonProps>`
  ${({ variant, theme, disabled = false }) => css`
    padding: 0.5rem 1.375rem;
    font-family: 'San Francisco Display';
    font-weight: 100;
    font-size: 1.1875rem;
    text-transform: uppercase;
    box-shadow: 3px 3px 15px #00000029;
    border-width: 1px;
    border-style: solid;

    ${disabled &&
    css`
      background-color: ${theme.colors.beige};
      color: ${theme.colors.white};
      border-color: ${theme.colors.beige};
    `}

    ${(() => {
      switch (variant) {
        case 'filled':
          return css`
            background-color: ${theme.colors.pink};
            color: ${theme.colors.white};
            border-color: ${theme.colors.pink};
          `

        case 'outline':
          return css`
            background-color: ${theme.colors.white};
            color: ${theme.colors.pink};
            border-color: ${theme.colors.pink};
          `
      }
    })()}
  `}
`
