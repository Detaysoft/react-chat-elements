import React, { useEffect, useRef } from 'react';
import './MessageBox.css';

import PhotoMessage from '../PhotoMessage/PhotoMessage';
import FileMessage from '../FileMessage/FileMessage';
import SystemMessage from '../SystemMessage/SystemMessage';
import LocationMessage from '../LocationMessage/LocationMessage';
import SpotifyMessage from '../SpotifyMessage/SpotifyMessage';
import ReplyMessage from '../ReplyMessage/ReplyMessage';
import MeetingMessage from '../MeetingMessage/MeetingMessage';
import VideoMessage from '../VideoMessage/VideoMessage';
import AudioMessage from '../AudioMessage/AudioMessage';
import MeetingLink from '../MeetingLink/MeetingLink';

import Avatar from '../Avatar/Avatar';

import { RiShareForwardFill } from 'react-icons/ri';
import { IoIosDoneAll } from 'react-icons/io';
import { MdAccessTime, MdCheck, MdMessage, MdDelete, MdBlock } from 'react-icons/md';

import {
  format,
} from 'timeago.js';

import classNames from 'classnames';

const MessageBox: React.FC<IMessageItemProps> = (props) => {
  const prevProps = useRef(props);
  const messageRef = useRef<HTMLDivElement>(null);

  var positionCls = classNames('rce-mbox', { 'rce-mbox-right': props.data.position === 'right' });
  var thatAbsoluteTime = !/(text|video|file|meeting|audio)/g.test(props.messageItem?.type || 'text') && !(props.messageItem?.type === 'location' && props.data.text);
  const dateText = props.data.date && !isNaN(props.data.date) && (props.data.dateString || format(props.data.date));

  useEffect(() => {
    if (prevProps.current.data.focus !== props.data.focus && prevProps.current.data.focus === true) {
      if (messageRef) {
        messageRef.current?.scrollIntoView({
          block: "center",
          behavior: 'smooth'
        })

        props.onMessageFocused(prevProps);
      }
    }
    prevProps.current = props;
  }, [props.data.focus, prevProps]);

  return (
    <div
      ref={messageRef}
      className={classNames('rce-container-mbox', props.data.className)}
      onClick={props.onClick}>
      {
        props.renderAddCmp instanceof Function &&
        props.renderAddCmp()
      }
      {
        props.messageItem?.type === 'system' ?
          <SystemMessage
            text={props.data.text} />
        :
        <div
          className={classNames(
            positionCls,
            {'rce-mbox--clear-padding': thatAbsoluteTime},
            {'rce-mbox--clear-notch': !props.data.notch},
            { 'message-focus': props.data.focus},
          )}>
          <div className='rce-mbox-body' onContextMenu={props.onContextMenu}>
            {
              !props.data.retracted &&
              props.data.forwarded === true &&
              <div
                className={classNames(
                  'rce-mbox-forward',
                  { 'rce-mbox-forward-right': props.data.position === 'left' },
                  { 'rce-mbox-forward-left': props.data.position === 'right' }
                )}
                onClick={props.onForwardClick}>
                  <RiShareForwardFill />
              </div>
            }

            {
              !props.data.retracted &&
              props.data.replyButton === true &&
              <div
                className={props.data.forwarded !== true ? classNames(
                  'rce-mbox-forward',
                  { 'rce-mbox-forward-right': props.data.position === 'left' },
                  { 'rce-mbox-forward-left': props.data.position === 'right' }
                ) : classNames(
                  'rce-mbox-forward',
                  { 'rce-mbox-reply-btn-right': props.data.position === 'left' },
                  { 'rce-mbox-reply-btn-left': props.data.position === 'right' }
                )}
                onClick={props.onReplyClick}>
                  <MdMessage />
              </div>
            }

            {
              !props.data.retracted &&
              props.data.removeButton === true &&
              <div
                className={props.data.forwarded === true ? classNames(
                  'rce-mbox-remove',
                  { 'rce-mbox-remove-right': props.data.position === 'left' },
                  { 'rce-mbox-remove-left': props.data.position === 'right' }
                ) : classNames(
                  'rce-mbox-forward',
                  { 'rce-mbox-reply-btn-right': props.data.position === 'left' },
                  { 'rce-mbox-reply-btn-left': props.data.position === 'right' }
                )}
                onClick={props.onRemoveMessageClick}>
                  <MdDelete />
              </div>
            }

            {
              (props.data.title || props.data.avatar) &&
              <div
                style={{...props.data.titleColor && { color: props.data.titleColor }}}
                onClick={props.onTitleClick}
                className={classNames('rce-mbox-title', {
                  'rce-mbox-title--clear': props.messageItem?.type === 'text',
                })}>
                {
                  props.data.avatar &&
                  <Avatar
                      letterItem={props.data.letterItem}
                      src={props.data.avatar}/>
                }
                {
                  props.data.title &&
                  <span>{props.data.title}</span>
                }
              </div>
            }

            {
              props.reply &&
              <ReplyMessage
                data={props.reply}
                onClick={props.onReplyMessageClick}/>
            }

            {
              props.messageItem?.type === 'text' &&
              <div className={classNames('rce-mbox-text', {
                'rce-mbox-text-retracted': props.data.retracted,
                'left': props.data.position === 'left',
                'right': props.data.position === 'right',
              })}>
                {
                  props.data.retracted &&
                  <MdBlock />
                }
                {props.data.text}
              </div>
            }

            {
              props.messageItem?.type === 'location' &&
              <LocationMessage
                onOpen={props?.onOpen}
                data={props.messageItem?.data}
                target={props.messageItem?.target}
                href={props.messageItem?.href}
                apiKey={props.messageItem?.apiKey}
                src={props.messageItem?.src}
                zoom={props.messageItem?.zoom}
                markerColor={props.messageItem?.markerColor}
                text={props.messageItem?.text} />
            }

            {
              props.messageItem?.type === 'photo' &&
              <PhotoMessage
                onOpen={props?.onOpen}
                onDownload={props.messageItem?.onDownload}
                onLoad={props.messageItem?.onLoad}
                onPhotoError={props.onPhotoError}
                data={props.messageItem?.data} />
            }

            {
              props.messageItem?.type === 'video' &&
              <VideoMessage
                onOpen={props?.onOpen}
                onDownload={props.messageItem?.onDownload}
                onLoad={props.messageItem?.onLoad}
                onPhotoError={props?.onPhotoError}
                data={props.messageItem?.data} />
            }

            {
              props.messageItem?.type === 'file' &&
              <FileMessage
                onOpen={props?.onOpen}
                onDownload={props.messageItem?.onDownload}
                data={props.messageItem?.data} />
            }

            {
              props.messageItem?.type === 'spotify' &&
              <SpotifyMessage
                data={props.messageItem?.data} />
            }

            {
              props.messageItem?.type === 'meeting' &&
              props.meeting &&
              <MeetingMessage
                subject={props.messageItem?.subject}
                title={props.messageItem?.title}
                date={props.messageItem?.date}
                dateString={props.messageItem?.dateString}
                collapseTitle={props.messageItem?.collapseTitle}
                participants={props.messageItem?.participants}
                moreItems={props.messageItem?.moreItems}
                dataSource={props.messageItem?.dataSource}
                onClick={props.onMeetingMessageClick}
                onMeetingMoreSelect={props.messageItem?.onMeetingMoreSelect}
                onMeetingVideoLinkClick={props.messageItem?.onMeetingVideoLinkClick}
                onMeetingTitleClick={props.messageItem?.onMeetingTitleClick} />
            }
            {
              props.messageItem?.type === 'audio' &&
              <AudioMessage
                onOpen={props?.onOpen}
                onDownload={props.messageItem?.onDownload}
                onLoad={props.messageItem?.onLoad}
                data={props.messageItem?.data} />
            }

            {
              props.messageItem?.type === 'meetingLink' &&
              <MeetingLink
                meetingID={props.messageItem?.meetingID}
                title={props.messageItem?.title}
                onMeetingMoreSelect={props.messageItem?.onMeetingLinkClick}/>
            }

            <div
              className={classNames(
                'rce-mbox-time',
                { 'rce-mbox-time-block': thatAbsoluteTime },
                { 'non-copiable': !props.data.copiableDate },
              )}
              data-text={props.data.copiableDate ? undefined : dateText}>
              {
                props.data.copiableDate &&
                props.data.date &&
                !isNaN(props.data.date) &&
                (
                  props.data.dateString ||
                  format(props.data.date)
                )
              }
              {
                props.data.status &&
                <span className='rce-mbox-status'>
                  {
                    props.data.status === 'waiting' &&
                    <MdAccessTime />
                  }

                  {
                    props.data.status === 'sent' &&
                    <MdCheck />
                  }

                  {
                    props.data.status === 'received' &&
                    <IoIosDoneAll />
                  }

                  {
                    props.data.status === 'read' &&
                    <IoIosDoneAll color='#4FC3F7'/>
                  }
                </span>
              }
            </div>
          </div>

          {
            props.data.notch &&
            (props.data.position === 'right' ?
              <svg className={classNames(
                "rce-mbox-right-notch",
                { 'message-focus': props.data.focus},
              )} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M0 0v20L20 0" />
              </svg>
              :
              <div>
                <svg className={classNames(
                    "rce-mbox-left-notch",
                    { 'message-focus': props.data.focus},
                  )} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <defs>
                    <filter id="filter1" x="0" y="0">
                      <feOffset result="offOut" in="SourceAlpha" dx="-2" dy="-5" />
                      <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3" />
                      <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                    </filter>
                  </defs>
                  <path d="M20 0v20L0 0" filter="url(#filter1)" />
                </svg>
              </div>
            )
          }
        </div>
      }
    </div>
  );
}

export default MessageBox;