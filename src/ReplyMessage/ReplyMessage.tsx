import React from 'react'
import './ReplyMessage.css'

import classNames from 'classnames'

const ReplyMessage: React.FC<IReplyMessageProps> = props => {
  return (
    <div
      className={classNames('rce-mbox-reply', {
        'rce-mbox-reply-border': !!props.message.titleColor,
      })}
      style={{ ...(props.message.titleColor && { borderColor: props.message.titleColor }) }}
      onClick={props.onClick}
    >
      <div className='rce-mbox-reply-left'>
        <div style={{ ...(props.message.titleColor && { color: props.message.titleColor }) }} className='rce-mbox-reply-owner'>
          {props.message.title || 'Unknown'}
        </div>
        <div className='rce-mbox-reply-message'>{props.message.message || '...'}</div>
      </div>
      {props.message.photoURL && (
        <div className='rce-mbox-reply-right'>
          <img src={props.message.photoURL} alt='' />
        </div>
      )}
    </div>
  )
}

export default ReplyMessage
