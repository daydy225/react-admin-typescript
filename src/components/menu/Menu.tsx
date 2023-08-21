import React from 'react'
import './menu.css'
import { menuData } from '../../assets/data/menuData'
import MenuItem from './widgets/MenuItems'

const Menu: React.FC = () => {
  return (
    <div className="menu">
      {menuData.map(item => (
        <MenuItem
          key={item.id}
          {...item}
        />
      ))}
    </div>
  )
}

export default Menu
