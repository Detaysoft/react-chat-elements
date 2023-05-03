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
import { MdAccessTime, MdCheck, MdMessage, MdDelete, MdBlock, MdDoneAll } from 'react-icons/md'

import { format } from 'timeago.js'

import classNames from 'classnames'
import { MessageBoxType } from '../type'

const MessageBox: React.FC<MessageBoxType> = ({ focus = false, notch = true, styles, ...props }) => {
  const prevProps = useRef(focus)
  const messageRef = useRef<HTMLDivElement>(null)

  var positionCls = classNames('rce-mbox', { 'rce-mbox-right': props.position === 'right' })
  var thatAbsoluteTime =
    !/(text|video|file|meeting|audio)/g.test(props.type || 'text') && !(props.type === 'location' && props.text)
  const dateText = props.date && (props.dateString || format(props.date))

  useEffect(() => {
    if (prevProps.current !== focus && focus === true) {
      if (messageRef) {
        messageRef.current?.scrollIntoView({
          block: 'center',
          behavior: 'smooth',
        })

        props.onMessageFocused(prevProps)
      }
    }
    prevProps.current = focus
  }, [focus, prevProps])

  return (
    <div ref={messageRef} className={classNames('rce-container-mbox', props.className)} onClick={props.onClick}>
      {props.renderAddCmp instanceof Function ? props.renderAddCmp() : props.renderAddCmp}
      {props.type === 'system' ? (
        <SystemMessage {...props} focus={focus} notch={notch} />
      ) : (
        <div
          style={styles}
          className={classNames(
            positionCls,
            { 'rce-mbox--clear-padding': thatAbsoluteTime },
            { 'rce-mbox--clear-notch': !notch },
            { 'message-focus': focus }
          )}
        >
          <div className='rce-mbox-body' onContextMenu={props.onContextMenu}>
            {!props.retracted && props.forwarded === true && (
              <div
                className={classNames(
                  'rce-mbox-forward',
                  { 'rce-mbox-forward-right': props.position === 'left' },
                  { 'rce-mbox-forward-left': props.position === 'right' }
                )}
                onClick={props.onForwardClick}
              >
                <RiShareForwardFill />
              </div>
            )}

            {!props.retracted && props.replyButton === true && (
              <div
                className={
                  props.forwarded !== true
                    ? classNames(
                        'rce-mbox-forward',
                        { 'rce-mbox-forward-right': props.position === 'left' },
                        { 'rce-mbox-forward-left': props.position === 'right' }
                      )
                    : classNames(
                        'rce-mbox-forward',
                        { 'rce-mbox-reply-btn-right': props.position === 'left' },
                        { 'rce-mbox-reply-btn-left': props.position === 'right' }
                      )
                }
                onClick={props.onReplyClick}
              >
                <MdMessage />
              </div>
            )}

            {!props.retracted && props.removeButton === true && (
              <div
                className={
                  props.forwarded === true
                    ? classNames(
                        'rce-mbox-remove',
                        { 'rce-mbox-remove-right': props.position === 'left' },
                        { 'rce-mbox-remove-left': props.position === 'right' }
                      )
                    : classNames(
                        'rce-mbox-forward',
                        { 'rce-mbox-reply-btn-right': props.position === 'left' },
                        { 'rce-mbox-reply-btn-left': props.position === 'right' }
                      )
                }
                onClick={props.onRemoveMessageClick}
              >
                <MdDelete />
              </div>
            )}

            {(props.title || props.avatar) && (
              <div
                style={{ ...(props.titleColor && { color: props.titleColor }) }}
                onClick={props.onTitleClick}
                className={classNames('rce-mbox-title', {
                  'rce-mbox-title--clear': props.type === 'text',
                })}
              >
                {props.avatar && <Avatar letterItem={props.letterItem} src={props.avatar} />}
                {props.title && <span>{props.title}</span>}
              </div>
            )}

            {props.reply && <ReplyMessage onClick={props.onReplyMessageClick} {...props.reply} />}

            {props.type === 'text' && (
              <div
                className={classNames('rce-mbox-text', {
                  'rce-mbox-text-retracted': props.retracted,
                  'left': props.position === 'left',
                  'right': props.position === 'right',
                })}
              >
                {props.retracted && <MdBlock />}
                {props.text}
              </div>
            )}

            {props.type === 'location' && <LocationMessage focus={focus} notch={notch} {...props} />}

            {props.type === 'photo' && <PhotoMessage focus={focus} notch={notch} {...props} />}

            {props.type === 'video' && <VideoMessage focus={focus} notch={notch} {...props} />}

            {props.type === 'file' && <FileMessage focus={focus} notch={notch} {...props} />}

            {props.type === 'spotify' && <SpotifyMessage focus={focus} notch={notch} {...props} />}

            {props.type === 'meeting' && <MeetingMessage focus={focus} notch={notch} {...props} />}
            {props.type === 'audio' && <AudioMessage focus={focus} notch={notch} {...props} />}

            {props.type === 'meetingLink' && (
              <MeetingLink focus={focus} notch={notch} {...props} actionButtons={props?.actionButtons} />
            )}

            <div
              title={props.statusTitle}
              className={classNames(
                'rce-mbox-time',
                { 'rce-mbox-time-block': thatAbsoluteTime },
                { 'non-copiable': !props.copiableDate }
              )}
              data-text={props.copiableDate ? undefined : dateText}
            >
              {props.copiableDate && props.date && (props.dateString || format(props.date))}
              {props.status && (
                <span className='rce-mbox-status'>
                  {props.status === 'waiting' && <MdAccessTime />}

                  {props.status === 'sent' && <MdCheck />}

                  {props.status === 'received' && <IoIosDoneAll />}

                  {props.status === 'read' && <MdDoneAll color='#4FC3F7' />}
                </span>
              )}
            </div>
          </div>

          {notch &&
            (props.position === 'right' ? (
              <svg
                style={props.notchStyle}
                className={classNames('rce-mbox-right-notch', { 'message-focus': focus })}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M0 0v20L20 0' />
              </svg>
            ) : (
              <div>
                <svg
                  style={props.notchStyle}
                  className={classNames('rce-mbox-left-notch', { 'message-focus': focus })}
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
