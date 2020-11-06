import React, { FC, useCallback, useState } from 'react'
import styled, { css } from 'styled-components'
import { Hamburger } from './hamburger'
import { Menu } from './sidebar'

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = useCallback(() => {
    setIsOpen(open => !open)
  }, [])

  return (
    <_HeaderWrap>
      <_Header isOpen={isOpen}>
        <div>
          <a href="/">
            <img src="https://via.placeholder.com/160x44.png" />
          </a>
        </div>
        <nav>
          <Hamburger isOpen={isOpen} onClick={toggleMenu} />
          <Menu
            items={[
              { href: '/', label: 'Home' },
              { href: '/', label: 'Gallery' },
              { href: '/', label: 'About Me' },
              { href: '/', label: 'Latest Work' },
              { href: '/', label: 'Contact Me' },
            ]}
            isOpen={isOpen}
          />
        </nav>
      </_Header>
    </_HeaderWrap>
  )
}

const _HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: $header_height;
  z-index: 100;
`
const _Header = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $header_padding;
  background: rgba($color-white, 0.875);
  backdrop-filter: blur(10px);

  ${({ isOpen }) =>
    isOpen &&
    css`
      backdrop-filter: none;
      background: rgba($color-white, 0.95);
    `}
`
