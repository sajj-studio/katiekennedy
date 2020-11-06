import React, { FC } from 'react'
import styled, { css } from 'styled-components'

interface MenuItem {
  href: string
  label: string
}
interface MenuProps {
  items: MenuItem[]
  isOpen: boolean
}
export const Menu: FC<MenuProps> = ({ items, isOpen }) => (
  <_Menu isOpen={isOpen}>
    {items.map(item => (
      <_MenuItem key={item.label}>
        <_MenuLink href={item.href}>{item.label}</_MenuLink>
      </_MenuItem>
    ))}
  </_Menu>
)

const _Menu = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 125%;
  width: calc(100% - 6.25rem);
  height: 100vh;
  padding-left: 3.75rem;
  background: rgba(lighten($color-beige, 10%), 0.875);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.default};

  ${({ isOpen }) =>
    isOpen &&
    css`
      left: 6.25rem;
      box-shadow: 0 0 10px rgba($color-black, 0.3);
    `}
`
const _MenuItem = styled.li`
  margin-bottom: 2.5rem;
  &:last-of-type {
    margin-bottom: 0;
  }
`
const _MenuLink = styled.a`
  display: block;
  font-family: $font_title;
  font-size: 1.875rem;
  color: $color-white;
  text-shadow: 0 0 8px rgba($color-black, 0.5);
`
