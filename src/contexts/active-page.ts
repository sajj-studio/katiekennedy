import { createContext } from 'react'
import { MenuItem } from '../components/header'

export const ActivePageContext = createContext<MenuItem['id']>('home')
