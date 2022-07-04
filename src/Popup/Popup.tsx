import React from 'react'
import './Popup.css'

import Button from '../Button/Button'

import classNames from 'classnames'
import { IPopupProps } from '../type'

const Popup: React.FC<IPopupProps> = ({ ...props }) => {
  if (props.popup?.show === true)
    return (
      <div className={classNames('rce-popup-wrapper', props.type, props.className)}>
        <div className='rce-popup'>
          {props.popup?.renderHeader ? (
            <div className='rce-popup-header'>{props.popup?.renderHeader()}</div>
          ) : (
            <div className='rce-popup-header'>
              <span>{props.popup?.header}</span>
              {props.popup?.header && props.popup?.headerButtons?.map((x, i) => <Button key={i} {...x} />)}
            </div>
          )}
          <div className='rce-popup-content' style={{ color: props.popup?.color }}>
            {props.popup?.renderContent ? props.popup?.renderContent() : props.popup?.text}
          </div>
          <div className='rce-popup-footer'>
            {props.popup?.renderFooter
              ? props.popup?.renderFooter()
              : props.popup?.footerButtons?.map((x, i) => <Button key={i} {...x} />)}
          </div>
        </div>
      </div>
    )
  return null
}

export default Popup
