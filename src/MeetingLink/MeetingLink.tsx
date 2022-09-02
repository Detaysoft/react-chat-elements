import { FC } from 'react'
import './MeetingLink.css'

import { IMeetingLinkMessageProps, MeetingLinkActionButtons } from '../type'

const MeetingLink: FC<IMeetingLinkMessageProps> = props => {
  return (
    <div className='rce-mtlink'>
      <div className='rce-mtlink-content'>
        <div className='rce-mtlink-item'>
          <div className='rce-mtlink-title'>{props.text}</div>
        </div>
        <div className='rce-mtlink-btn'>
          {props?.actionButtons?.map((Item: MeetingLinkActionButtons) => {
            return (
              <div className='rce-mtlink-btn-content' onClick={() => Item.onClickButton(props?.meetingID ?? '')}>
                <Item.Component />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MeetingLink
