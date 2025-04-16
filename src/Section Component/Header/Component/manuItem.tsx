import React, { FC } from 'react'
import MenuItemProps from '../interface/header.interface'

const MenuItem:FC <MenuItemProps> = ({itemText,link}) => {
  return (


    <a
          href={link}
          className="hover:text-blue-600 transition-colors duration-300"
        >
          {itemText}
        </a>
  )
}

export default MenuItem