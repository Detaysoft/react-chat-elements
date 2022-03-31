import { FC } from 'react';
import './MeetingLink.css';

import { MdOutlineVideoCall } from 'react-icons/md';

const MeetingLink: FC<IMeetingLinkProps> = ({ meetingID, title, onMeetingMoreSelect }) => {
  const onHandleClick = () => {
    onMeetingMoreSelect?.(meetingID);
  }

  return (
    <div className='rce-mtlink'>
      <div className='rce-mtlink-content'>
        <div className='rce-mtlink-item'>
          <div className='rce-mtlink-title'>
            {title}
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