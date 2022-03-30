import React from 'react';
import './ReplyMessage.css';

import classNames from "classnames";

const ReplyMessage: React.FC<IReplyMessageProps> = (props) => {
  return (
    <div
      className={classNames('rce-mbox-reply', {
        'rce-mbox-reply-border': !!props.data.titleColor
      })}
      style={{...props.data.titleColor && { borderColor: props.data.titleColor }}}
      onClick={props.onClick}>
      <div className='rce-mbox-reply-left'>
        <div
          style={{...props.data.titleColor && { color: props.data.titleColor }}}
          className='rce-mbox-reply-owner'>
          {props.data.title || 'Unknown'}
        </div>
        <div className='rce-mbox-reply-message'>
          {props.data.message || '...'}
        </div>
      </div>
      {
        props.data.photoURL &&
        <div className='rce-mbox-reply-right'>
          <img src={props.data.photoURL} alt=''/>
        </div>
      }
    </div>
  );
}

export default ReplyMessage;
