import { FC } from 'react';
import './MeetingLink.css';

import { MdOutlineVideoCall } from 'react-icons/md';

const MeetingLink: FC<IMeetingLinkMessageProps> = ({message, onMeetingMoreSelect }) => {
  const onHandleClick = (): void => {
    onMeetingMoreSelect?.(message.meetingID || '');
  }

  return (
    <div className='rce-mtlink'>
      <div className='rce-mtlink-content'>
        <div className='rce-mtlink-item'>
          <div className='rce-mtlink-title'>
            {message.title}
          </div>
        </div>
        <div className='rce-mtlink-btn' onClick={onHandleClick}>
          <MdOutlineVideoCall className='rce-mtlink-svg'/>
        </div>
      </div>
    </div>
  );
}

export default MeetingLink;