import React from 'react';
import './SystemMessage.css';

const classNames = require('classnames');

function SystemMessage(props) {
  return (
    <div className={classNames('rce-container-smsg', props.className)}>
      <div
        className='rce-smsg'>
        <div className='rce-smsg-text'>
          {props.text}
        </div>
      </div>
    </div>
  );
}

export default SystemMessage;
