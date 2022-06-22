import React from 'react'
import './Popup.css'

import Button from '../Button/Button'

import classNames from 'classnames'
import { IPopupProps } from '../type'

const Popup: React.FC<IPopupProps> = ({ 
  popup={
    show: false,
    header: null,
    text: null,
    headerButtons: [],
    footerButtons: [],
    renderHeader: null,
    renderContent: null,
    renderFooter: null,
    color: '#333'
  }
  , ...props}) => {
  if (popup.show === true)
    return (
      <div className={classNames('rce-popup-wrapper', props.type, props.className)}>
        <div className='rce-popup'>
          {popup.renderHeader ? (
            <div className='rce-popup-header'>{popup.renderHeader()}</div>
          ) : (
            <div className='rce-popup-header'>
              <span>{popup.header}</span>
              {popup.header && popup.headerButtons?.map((x, i) => <Button key={i} {...x} />)}
            </div>
          )}
          <div className='rce-popup-content' style={{ color: popup.color }}>
            {popup.renderContent ? popup.renderContent() : popup.text}
          </div>
          <div className='rce-popup-footer'>
            {popup.renderFooter
              ? popup.renderFooter()
              : popup.footerButtons?.map((x, i) => <Button key={i} {...x} />)}
          </div>
        </div>
      </div>
    )
  return null
}

export default Popup
