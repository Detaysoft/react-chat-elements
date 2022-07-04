import React from 'react'
import './Navbar.css'
import classNames from 'classnames'
import { INavbarProps } from '../type'

const Navbar: React.FC<INavbarProps> = ({ type = 'light', ...props }) => {
  return (
    <div className={classNames('rce-navbar', type, props.className)}>
      <div className='rce-navbar-item rce-navbar-item__left'>{props.left}</div>
      <div className='rce-navbar-item rce-navbar-item__center'>{props.center}</div>
      <div className='rce-navbar-item rce-navbar-item__right'>{props.right}</div>
    </div>
  )
}

export default Navbar
