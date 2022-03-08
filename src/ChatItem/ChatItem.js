import React, { useState } from 'react';
import './ChatItem.css';

import Avatar from '../Avatar/Avatar';

import {
  format,
} from'timeago.js';

import classNames from 'classnames';

import { MdVideoCall, MdVolumeOff, MdVolumeUp } from 'react-icons/lib/md';

function ChatItem(props) {
  const [onHoverTool, setOnHoverTool] = useState(false);
  const statusColorType = props.statusColorType;

  const handleOnMouseEnter = () => {
    setOnHoverTool(true);
  }

  const handleOnMouseLeave = () => {
    setOnHoverTool(false);
  }

  const handleOnClick = (e) => {
    e.preventDefault();

    if (onHoverTool === true)
        return;

    props.onClick();
  }

  return (
    <div
      className={classNames('rce-container-citem', props.className)}
      onClick={handleOnClick}
      onContextMenu={props.onContextMenu}>
      <div className='rce-citem'>
        <div className={classNames(
          'rce-citem-avatar',
          {
            'rce-citem-status-encircle': statusColorType === 'encircle',
          }
        )}>
          <Avatar
            src={props.avatar}
            alt={props.alt}
            className={statusColorType === 'encircle' ? 'rce-citem-avatar-encircle-status' : ''}
            size='large'
            letterItem={props.letterItem}
            sideElement={
              props.statusColor &&
              <span
                className='rce-citem-status'
                style={statusColorType === 'encircle' ? {
                  border: `solid 2px ${props.statusColor}`
                } : {
                  backgroundColor: props.statusColor,
                }}>
                {props.statusText}
              </span>
            }
            onError={props.onAvatarError}
            lazyLoadingImage={props.lazyLoadingImage}
            type={classNames('circle', {'flexible': props.avatarFlexible})}/>
        </div>

        <div className='rce-citem-body'>
          <div className='rce-citem-body--top'>
            <div className='rce-citem-body--top-title'>
              {props.title}
            </div>
            <div className='rce-citem-body--top-time'>
              {
                props.date &&
                !isNaN(props.date) &&
                (
                  props.dateString ||
                  format(props.date)
                )
              }
            </div>
          </div>

          <div className='rce-citem-body--bottom'>
            <div className='rce-citem-body--bottom-title'>
              {props.subtitle}
            </div>
            <div className='rce-citem-body--bottom-tools' onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
              {
                props.showMute &&
                <div className='rce-citem-body--bottom-tools-item'
                  onClick={props.onClickMute}>
                  {
                    props.muted === true &&
                    <MdVolumeOff />
                  }
                  {
                    props.muted === false &&
                    <MdVolumeUp />
                  }
                </div>
              }
              {
                props.showVideoCall &&
                <div className='rce-citem-body--bottom-tools-item'
                  onClick={props.onClickVideoCall}>
                  <MdVideoCall />
                </div>
              }
            </div>
            <div className='rce-citem-body--bottom-tools-item-hidden-hover'>
              {
                props.showMute &&
                props.muted &&
                <div className='rce-citem-body--bottom-tools-item'>
                  <MdVolumeOff />
                </div>
              }
            </div>
            <div className='rce-citem-body--bottom-status'>
              {
                props.unread > 0 &&
                <span>{props.unread}</span>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ChatItem.defaultProps = {
  id: '',
  onClick: null,
  avatar: '',
  avatarFlexible: false,
  alt: '',
  title: '',
  subtitle: '',
  date: new Date(),
  unread: 0,
  statusColor: null,
  statusColorType: 'badge',
  statusText: null,
  dateString: null,
  lazyLoadingImage: undefined,
  onAvatarError: () => void(0),
  showMute: null,
  showVideoCall: null,
}

export default ChatItem;
