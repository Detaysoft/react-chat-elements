import { FC } from 'react'
import './MeetingLink.css'

import { MdOutlineVideoCall } from 'react-icons/md'
import { IMeetingLinkMessageProps } from '../type'

const MeetingLink: FC<IMeetingLinkMessageProps> = props => {
  const onHandleClick = (): void => {
    props.onMeetingLinkClick?.(props.meetingID || '')
  }

  return (
    <div className='rce-mtlink' onClick={onHandleClick}>
      <div className='rce-mtlink-content'>
        <div className='rce-mtlink-item'>
          <div className='rce-mtlink-title'>{props.text}</div>
        </div>
        <div className='rce-mtlink-btn'>
          <MdOutlineVideoCall className='rce-mtlink-svg' />
        </div>
      </div>
    </div>
  )
}

export default MeetingLink
