import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { MenuItem } from './header'
import { hexToRGBA } from './sc-theme'

interface MenuProps {
  items: MenuItem[]
  isOpen: boolean
}
export const MobileMenu: FC<MenuProps> = ({ items, isOpen }) => (
  <_Menu isOpen={isOpen}>
    {items.map(item => (
      <_MenuItem key={item.label}>
        <_MenuLink href={item.href}>{item.label}</_MenuLink>
      </_MenuItem>
    ))}
  </_Menu>
)

const _Menu = styled.ul<{ isOpen: boolean }>`
  ${({ isOpen, theme }) => css`
    position: absolute;
    top: 0;
    left: 125%;
    width: calc(100% - 6.25rem);
    height: 100vh;
    padding-left: 3.75rem;
    background: ${hexToRGBA(theme.colors.beige, 0.875)};
    backdrop-filter: blur(30px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: ${theme.transitions.default};

    ${isOpen &&
    css`
      left: 6.25rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    `}
  `}
`
const _MenuItem = styled.li`
  margin-bottom: 2.5rem;
  &:last-of-type {
    margin-bottom: 0;
  }
`
const _MenuLink = styled.a`
  ${({ theme }) => css`
    display: block;
    font-family: ${theme.typography.serif};
    font-size: 1.875rem;
    color: white;
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  `}
`
