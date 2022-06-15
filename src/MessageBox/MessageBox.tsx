import React, { useEffect, useRef } from 'react'
import './MessageBox.css'

import PhotoMessage from '../PhotoMessage/PhotoMessage'
import FileMessage from '../FileMessage/FileMessage'
import SystemMessage from '../SystemMessage/SystemMessage'
import LocationMessage from '../LocationMessage/LocationMessage'
import SpotifyMessage from '../SpotifyMessage/SpotifyMessage'
import ReplyMessage from '../ReplyMessage/ReplyMessage'
import MeetingMessage from '../MeetingMessage/MeetingMessage'
import VideoMessage from '../VideoMessage/VideoMessage'
import AudioMessage from '../AudioMessage/AudioMessage'
import MeetingLink from '../MeetingLink/MeetingLink'

import Avatar from '../Avatar/Avatar'

import { RiShareForwardFill } from 'react-icons/ri'
import { IoIosDoneAll } from 'react-icons/io'
import { MdAccessTime, MdCheck, MdMessage, MdDelete, MdBlock } from 'react-icons/md'

import { format } from 'timeago.js'

import classNames from 'classnames'

const MessageBox: React.FC<IMessageBoxProps> = props => {
  const prevProps = useRef(props.data)
  const messageRef = useRef<HTMLDivElement>(null)

  var positionCls = classNames('rce-mbox', { 'rce-mbox-right': props.data.message.position === 'right' })
  var thatAbsoluteTime =
    !/(text|video|file|meeting|audio)/g.test(props.data.type || 'text') && !(props.data.type === 'location' && props.data.text)
  const dateText = props.data.message.date && (props.data.message.dateString || format(props.data.message.date))

  useEffect(() => {
    if (prevProps.current.message.focus !== props.data.message.focus && prevProps.current.message.focus === true) {
      if (messageRef) {
        messageRef.current?.scrollIntoView({
          block: 'center',
          behavior: 'smooth',
        })

        props.onMessageFocused(prevProps)
      }
    }
    prevProps.current = props.data
  }, [props.data.message.focus, prevProps])

  return (
    <div ref={messageRef} className={classNames('rce-container-mbox', props.data.message.className)} onClick={props.onClick}>
      {props.renderAddCmp instanceof Function && props.renderAddCmp()}
      {props.data.type === 'system' ? (
        <SystemMessage message={props.data.message} />
      ) : (
        <div
          className={classNames(
            positionCls,
            { 'rce-mbox--clear-padding': thatAbsoluteTime },
            { 'rce-mbox--clear-notch': !props.data.message.notch },
            { 'message-focus': props.data.message.focus }
          )}
        >
          <div className='rce-mbox-body' onContextMenu={props.onContextMenu}>
            {!props.data.message.retracted && props.data.message.forwarded === true && (
              <div
                className={classNames(
                  'rce-mbox-forward',
                  { 'rce-mbox-forward-right': props.data.message.position === 'left' },
                  { 'rce-mbox-forward-left': props.data.message.position === 'right' }
                )}
                onClick={props.onForwardClick}
              >
                <RiShareForwardFill />
              </div>
            )}

            {!props.data.message.retracted && props.data.message.replyButton === true && (
              <div
                className={
                  props.data.message.forwarded !== true
                    ? classNames(
                        'rce-mbox-forward',
                        { 'rce-mbox-forward-right': props.data.message.position === 'left' },
                        { 'rce-mbox-forward-left': props.data.message.position === 'right' }
                      )
                    : classNames(
                        'rce-mbox-forward',
                        { 'rce-mbox-reply-btn-right': props.data.message.position === 'left' },
                        { 'rce-mbox-reply-btn-left': props.data.message.position === 'right' }
                      )
                }
                onClick={props.onReplyClick}
              >
                <MdMessage />
              </div>
            )}

            {!props.data.message.retracted && props.data.message.removeButton === true && (
              <div
                className={
                  props.data.message.forwarded === true
                    ? classNames(
                        'rce-mbox-remove',
                        { 'rce-mbox-remove-right': props.data.message.position === 'left' },
                        { 'rce-mbox-remove-left': props.data.message.position === 'right' }
                      )
                    : classNames(
                        'rce-mbox-forward',
                        { 'rce-mbox-reply-btn-right': props.data.message.position === 'left' },
                        { 'rce-mbox-reply-btn-left': props.data.message.position === 'right' }
                      )
                }
                onClick={props.onRemoveMessageClick}
              >
                <MdDelete />
              </div>
            )}

            {(props.data.message.title || props.data.message.avatar) && (
              <div
                style={{ ...(props.data.message.titleColor && { color: props.data.message.titleColor }) }}
                onClick={props.onTitleClick}
                className={classNames('rce-mbox-title', {
                  'rce-mbox-title--clear': props.data.type === 'text',
                })}
              >
                {props.data.message.avatar && (
                  <Avatar letterItem={props.data.message.letterItem} src={props.data.message.avatar} />
                )}
                {props.data.message.title && <span>{props.data.message.title}</span>}
              </div>
            )}

            {props.data.message.reply && <ReplyMessage message={props.data.message.reply} onClick={props.onReplyMessageClick} />}

            {props.data.type === 'text' && (
              <div
                className={classNames('rce-mbox-text', {
                  'rce-mbox-text-retracted': props.data.message.retracted,
                  'left': props.data.message.position === 'left',
                  'right': props.data.message.position === 'right',
                })}
              >
                {props.data.message.retracted && <MdBlock />}
                {props.data.message.text}
              </div>
            )}

            {props.data.type === 'location' && (
              <LocationMessage
                onOpen={props?.onOpen}
                message={props.data.message}
                target={props.data.target}
                href={props.data?.href}
                apiKey={props.data?.apiKey}
                src={props.data?.src}
                zoom={props.data?.zoom}
                markerColor={props.data?.markerColor}
                text={props.data?.text}
              />
            )}

            {props.data.type === 'photo' && (
              <PhotoMessage
                message={props.data.message}
                onOpen={props?.onOpen}
                onDownload={props.data?.onDownload}
                onLoad={props.data?.onLoad}
                onPhotoError={props?.onPhotoError}
              />
            )}

            {props.data.type === 'video' && (
              <VideoMessage
                onOpen={props?.onOpen}
                message={props.data.message}
                onDownload={props.data?.onDownload}
                onLoad={props.data?.onLoad}
                onPhotoError={props?.onPhotoError}
              />
            )}

            {props.data.type === 'file' && (
              <FileMessage message={props.data.message} onOpen={props?.onOpen} onDownload={props.data?.onDownload} />
            )}

            {props.data.type === 'spotify' && <SpotifyMessage message={props.data.message} />}

            {props.data.type === 'meeting' && (
              <MeetingMessage
                message={props.data.message}
                subject={props.data.subject}
                title={props.data.title}
                date={props.data.date}
                dateString={props.data.dateString}
                collapseTitle={props.data.collapseTitle}
                participants={props.data.participants}
                moreItems={props.data.moreItems}
                dataSource={props.data.dataSource}
                onClick={props.onMeetingMessageClick}
                onMeetingMoreSelect={props.data.onMeetingMoreSelect}
                onMeetingVideoLinkClick={props.data.onMeetingVideoLinkClick}
                onMeetingTitleClick={props.data.onMeetingTitleClick}
              />
            )}
            {props.data.type === 'audio' && (
              <AudioMessage
                message={props.data.message}
                onOpen={props?.onOpen}
                onDownload={props.data.onDownload}
                onLoad={props.data.onLoad}
              />
            )}

            {props.data.type === 'meetingLink' && (
              <MeetingLink message={props.data.message} onMeetingMoreSelect={props.data.onMeetingLinkClick} />
            )}

            <div
              className={classNames(
                'rce-mbox-time',
                { 'rce-mbox-time-block': thatAbsoluteTime },
                { 'non-copiable': !props.data.message.copiableDate }
              )}
              data-text={props.data.message.copiableDate ? undefined : dateText}
            >
              {props.data.message.copiableDate &&
                props.data.message.date &&
                (props.data.message.dateString || format(props.data.message.date))}
              {props.data.message.status && (
                <span className='rce-mbox-status'>
                  {props.data.message.status === 'waiting' && <MdAccessTime />}

                  {props.data.message.status === 'sent' && <MdCheck />}

                  {props.data.message.status === 'received' && <IoIosDoneAll />}

                  {props.data.message.status === 'read' && <IoIosDoneAll color='#4FC3F7' />}
                </span>
              )}
            </div>
          </div>

          {props.data.message.notch &&
            (props.data.message.position === 'right' ? (
              <svg
                className={classNames('rce-mbox-right-notch', { 'message-focus': props.data.message.focus })}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M0 0v20L20 0' />
              </svg>
            ) : (
              <div>
                <svg
                  className={classNames('rce-mbox-left-notch', { 'message-focus': props.data.message.focus })}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <defs>
                    <filter id='filter1' x='0' y='0'>
                      <feOffset result='offOut' in='SourceAlpha' dx='-2' dy='-5' />
                      <feGaussianBlur result='blurOut' in='offOut' stdDeviation='3' />
                      <feBlend in='SourceGraphic' in2='blurOut' mode='normal' />
                    </filter>
                  </defs>
                  <path d='M20 0v20L0 0' filter='url(#filter1)' />
                </svg>
              </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default MessageBox
