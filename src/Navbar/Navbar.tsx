import React from 'react'
import './Navbar.css'
import classNames from 'classnames'
import { INavbarProps } from '../type'

const Navbar: React.FC<INavbarProps> = ({
  type = "light",
  left = null,
  center = null,
  right = null,
  ...props
}) => {
  return (
    <div className={classNames('rce-navbar', type, props.className)}>
      <div className='rce-navbar-item rce-navbar-item__left'>{left}</div>
      <div className='rce-navbar-item rce-navbar-item__center'>{center}</div>
      <div className='rce-navbar-item rce-navbar-item__right'>{right}</div>
    </div>
  )
}

export default Navbar
