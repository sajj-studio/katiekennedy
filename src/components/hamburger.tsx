import React, { FC } from 'react'
import styled, { css } from 'styled-components'

interface HamburgerProps {
  isOpen: boolean
  onClick: () => void
}
export const Hamburger: FC<HamburgerProps> = ({ isOpen, onClick }) => (
  <_Hamburger isOpen={isOpen} onClick={onClick}>
    <_HamburgerLine position="top" />
    <_HamburgerLine position="middle" />
    <_HamburgerLine position="bottom" />
  </_Hamburger>
)


const _Hamburger = styled.div<{ isOpen: boolean }>`
  height: 1.875rem;
  width: 2.375rem;
  position: relative;
  z-index: 105;
  margin: 0.5rem 1rem 0 0;

  ${({ isOpen }) => css`
    ${_HamburgerLine}::nth-child(1) {
      transform: rotate(45deg);
      top: calc(50% - 0.1875rem);
    }
    ${_HamburgerLine}::nth-child(2) {
      opacity: 0;
    }
    ${_HamburgerLine}::nth-child(3) {
      transform: rotate(-45deg);
      top: calc(50% - 0.1875rem);
    }
  `}
`

interface HamburgerLineProps {
  position: 'top' | 'middle' | 'bottom',
}
const _HamburgerLine = styled.div<HamburgerLineProps>`
  position: absolute;
  display: block;
  width: 100%;
  height: 0.1875rem;
  background: #C57D76;
  border-radius: 0.125rem;
  transition: 0.2s;

  ${({ position }) => {
    switch (position) {
      case 'top':
        return css`
          top: 0;
        `
      case 'middle':
        return css`
          top: calc(50% - 0.1875rem);
        `
      case 'bottom':
        return css`
          top: calc(100% - (0.1875rem * 2));
        `
    }
  }}
`
