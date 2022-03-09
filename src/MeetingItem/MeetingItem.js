import React from 'react';
import './MeetingItem.css';

import MdVideoCall from 'react-icons/lib/md/video-call';
import MdLink from 'react-icons/lib/md/link';
import MdCall from 'react-icons/lib/md/call';

import Avatar from '../Avatar/Avatar';

import {
  format,
} from'timeago.js';

import classNames from 'classnames';
function MeetingItem(props) {
  const statusColorType = props.statusColorType;
  const AVATAR_LIMIT = props.avatarLimit;

  const dateText = props.date && !isNaN(props.date) && (
    props.dateString ||
    format(props.date)
  );

  const subject = props.subject.substring(0, props.subjectLimit) + (props.subject.length > props.subjectLimit ? '...' : '');

  return (
    <div
      className={classNames('rce-container-mtitem', props.className)}
      onClick={props.onClick}
      onContextMenu={props.onContextMenu}>

      <audio
        autoPlay
        loop
        muted={props.audioMuted}
        src={props.audioSource}/>

      <div className="rce-mtitem">
        <div className="rce-mtitem-top">
          <div className="rce-mtitem-subject">
            {subject}
          </div>
          <div
            className="rce-mtitem-share"
            onClick={props.onShareClick}>
            <MdLink />
          </div>
        </div>
        <div className="rce-mtitem-body">
          <div className="rce-mtitem-body--avatars">
            {
              props.avatars.slice(0, AVATAR_LIMIT).map((x, i) => x instanceof Avatar ? x : (
                <Avatar
                  key={i}
                  src={x.src}
                  alt={x.alt}
                  className={x.statusColorType === 'encircle' ? 'rce-mtitem-avatar-encircle-status' : ''}
                  size={'small'}
                  letterItem={x.letterItem}
                  sideElement={
                    x.statusColor &&
                    <span
                      className='rce-mtitem-status'
                      style={statusColorType === 'encircle' ? {
                        boxShadow: `inset 0 0 0 2px ${x.statusColor}, inset 0 0 0 5px #FFFFFF`
                      } : {
                        backgroundColor: x.statusColor,
                      }}>
                      {x.statusText}
                    </span>
                  }
                  onError={props.onAvatarError}
                  lazyLoadingImage={props.lazyLoadingImage}
                  type={classNames('circle', {'flexible': props.avatarFlexible})}/>
              ))
            }

            {
              props.avatars.length > AVATAR_LIMIT &&
              <div className='rce-avatar-container circle small rce-mtitem-letter'>
                <span>
                  {'+' + (props.avatars.length - AVATAR_LIMIT)}
                </span>
              </div>
            }
          </div>
          <div className="rce-mtitem-body--functions">
            {
              props.closable &&
              <div
                className="rce-mtitem-closable"
                onClick={props.onCloseClick}>
                <MdCall />
              </div>
            }
            <div
              className='rce-mtitem-button'
              onClick={props.onMeetingClick}>
              <MdVideoCall />
            </div>
          </div>
        </div>
        <div className="rce-mtitem-footer">
          <span className='rce-mtitem-date'>
            {dateText}
          </span>
        </div>
      </div>
    </div>
  );
}

MeetingItem.defaultProps = {
  id: '',
  subject: '',
  subjectLimit: 60,
  onClick: null,
  avatarFlexible: false,
  alt: '',
  title: '',
  subtitle: '',
  date: new Date(),
  dateString: '',
  lazyLoadingImage: undefined,
  avatarLimit: 5,
  avatars: [],
  audioMuted: true,
  audioSource: null,
  onAvatarError: () => void(0),
  onMeetingClick: () => void(0),
  onShareClick: () => void(0),
}

export default MeetingItem;
