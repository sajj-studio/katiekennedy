import styled, { css } from 'styled-components'

export const ProjectList = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;

    ${theme.media.desktop} {
      justify-content: center;
    }
  `}
`
