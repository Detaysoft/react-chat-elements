import React, { Key, useState } from 'react'
import './ChatItem.css'

import Avatar from '../Avatar/Avatar'

import { format } from 'timeago.js'

import classNames from 'classnames'

import { MdVideoCall, MdVolumeOff, MdVolumeUp } from 'react-icons/md'
import { IChatItemProps } from '../type'

const ChatItem: React.FC<IChatItemProps> = ({
  id = '',
  onClick = null,
  avatar = '',
  avatarFlexible = false,
  alt = '',
  title = '',
  subtitle = '',
  date = new Date(),
  unread = 0,
  statusColor = null,
  statusColorType = 'badge',
  statusText = null,
  dateString = null,
  lazyLoadingImage = undefined,
  onAvatarError = () => void 0,
  showMute = null,
  showVideoCall = null,
  ...props
}) => {
  const [onHoverTool, setOnHoverTool] = useState(false)
  const [onDrag, setOnDrag] = useState(false)

  const handleOnMouseEnter = () => {
    setOnHoverTool(true)
  }

  const handleOnMouseLeave = () => {
    setOnHoverTool(false)
  }

  const handleOnClick = (e: React.MouseEvent) => {
    e.preventDefault()

    if (onHoverTool === true) return

    onClick?.(e)
  }

  const onDragOver = (e: React.MouseEvent) => {
    e.preventDefault()
    if (props.onDragOver instanceof Function) props.onDragOver(e, id)
  }

  const onDragEnter = (e: React.MouseEvent) => {
    e.preventDefault()
    if (props.onDragEnter instanceof Function) props.onDragEnter(e, id)
    if (!onDrag) setOnDrag(true)
  }

  const onDragLeave = (e: React.MouseEvent) => {
    e.preventDefault()
    if (props.onDragLeave instanceof Function) props.onDragLeave(e, id)
    if (onDrag) setOnDrag(false)
  }

  const onDrop = (e: React.MouseEvent) => {
    e.preventDefault()
    if (props.onDrop instanceof Function) props.onDrop(e, id)
    if (onDrag) setOnDrag(false)
  }

  return (
    <div
      key={id as Key}
      className={classNames('rce-container-citem', props.className)}
      onClick={handleOnClick}
      onContextMenu={props.onContextMenu}
    >
      <div className='rce-citem' onDragOver={onDragOver} onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDrop={onDrop}>
        {!!props.onDragComponent && onDrag && props.onDragComponent(id)}
        {((onDrag && !props.onDragComponent) || !onDrag) && [
          <div className={classNames('rce-citem-avatar', { 'rce-citem-status-encircle': statusColorType === 'encircle' })}>
            <Avatar
              src={avatar}
              alt={alt}
              className={statusColorType === 'encircle' ? 'rce-citem-avatar-encircle-status' : ''}
              size='large'
              letterItem={props.letterItem}
              sideElement={
                statusColor ? (
                  <span
                    className='rce-citem-status'
                    style={
                      statusColorType === 'encircle'
                        ? {
                            border: `solid 2px ${statusColor}`,
                          }
                        : {
                            backgroundColor: statusColor,
                          }
                    }
                  >
                    {statusText}
                  </span>
                ) : (
                  <></>
                )
              }
              onError={onAvatarError}
              lazyLoadingImage={lazyLoadingImage}
              type={classNames('circle', { 'flexible': avatarFlexible })}
            />
          </div>,
          <div className='rce-citem-body'>
            <div className='rce-citem-body--top'>
              <div className='rce-citem-body--top-title'>{title}</div>
              <div className='rce-citem-body--top-time'>{date && (dateString || format(date))}</div>
            </div>

            <div className='rce-citem-body--bottom'>
              <div className='rce-citem-body--bottom-title'>{subtitle}</div>
              <div className='rce-citem-body--bottom-tools' onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
                {showMute && (
                  <div className='rce-citem-body--bottom-tools-item' onClick={props.onClickMute}>
                    {props.muted === true && <MdVolumeOff />}
                    {props.muted === false && <MdVolumeUp />}
                  </div>
                )}
                {showVideoCall && (
                  <div className='rce-citem-body--bottom-tools-item' onClick={props.onClickVideoCall}>
                    <MdVideoCall />
                  </div>
                )}
              </div>
              <div className='rce-citem-body--bottom-tools-item-hidden-hover'>
                {showMute && props.muted && (
                  <div className='rce-citem-body--bottom-tools-item'>
                    <MdVolumeOff />
                  </div>
                )}
              </div>
              <div className='rce-citem-body--bottom-status'>{unread && unread > 0 ? <span>{unread}</span> : null}</div>
            </div>
          </div>,
        ]}
      </div>
    </div>
  )
}

export default ChatItem
