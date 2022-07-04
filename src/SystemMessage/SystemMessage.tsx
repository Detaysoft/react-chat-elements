import React from 'react'
import './SystemMessage.css'

import classNames from 'classnames'
import { ISystemMessageProps } from '../type'

const SystemMessage: React.FC<ISystemMessageProps> = props => {
  return (
    <div className={classNames('rce-container-smsg', props.className)}>
      <div className='rce-smsg'>
        <div className='rce-smsg-text'>{props.text}</div>
      </div>
    </div>
  )
}

export default SystemMessage
