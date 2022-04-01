import {useEffect, useRef, FC} from 'react';
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

const MessageBox: FC<IMessageItemProps> = (props) => {
  const prevProps = useRef(props);
  const messageRef = useRef<HTMLDivElement>(null);


  var positionCls = classNames('rce-mbox', { 'rce-mbox-right': props.message.position === 'right' });
  var thatAbsoluteTime = !/(text|video|file|meeting|audio)/g.test(props.messageItem?.type || 'text') && !(props.messageItem?.type === 'location' && props.message.text);
  const dateText = props.message.date && props.message.date && (props.message.dateString || format(props.message.date));

  useEffect(() => {
    if (prevProps.current.message.focus !== props.message.focus && !prevProps.current.message.focus === true) {
      if (messageRef) {
        messageRef.current?.scrollIntoView({
          block: "center",
          behavior: 'smooth'
        })

        props.onMessageFocused(prevProps);
      }
    }
    prevProps.current = props;
  }, [props.message.focus, prevProps]);

  return (
    <div
      ref={messageRef}
      className={classNames('rce-container-mbox', props.message.className)}
      onClick={props.onClick}>
      {
        props.renderAddCmp instanceof Function &&
        props.renderAddCmp()
      }
      {
        props.messageItem?.type === 'system' ?
          <SystemMessage
            text={props.message.text} />
        :
        <div
          className={classNames(
            positionCls,
            {'rce-mbox--clear-padding': thatAbsoluteTime},
            {'rce-mbox--clear-notch': !props.message.notch},
            { 'message-focus': props.message.focus},
          )}>
          <div className='rce-mbox-body' onContextMenu={props.onContextMenu}>
            {
              !props.message.retracted &&
              props.message.forwarded === true &&
              <div
                className={classNames(
                  'rce-mbox-forward',
                  { 'rce-mbox-forward-right': props.message.position === 'left' },
                  { 'rce-mbox-forward-left': props.message.position === 'right' }
                )}
                onClick={props.onForwardClick}>
                  <RiShareForwardFill />
              </div>
            }

            {
              !props.message.retracted &&
              props.message.replyButton === true &&
              <div
                className={props.message.forwarded !== true ? classNames(
                  'rce-mbox-forward',
                  { 'rce-mbox-forward-right': props.message.position === 'left' },
                  { 'rce-mbox-forward-left': props.message.position === 'right' }
                ) : classNames(
                  'rce-mbox-forward',
                  { 'rce-mbox-reply-btn-right': props.message.position === 'left' },
                  { 'rce-mbox-reply-btn-left': props.message.position === 'right' }
                )}
                onClick={props.onReplyClick}>
                  <MdMessage />
              </div>
            }

            {
              !props.message.retracted &&
              props.message.removeButton === true &&
              <div
                className={props.message.forwarded === true ? classNames(
                  'rce-mbox-remove',
                  { 'rce-mbox-remove-right': props.message.position === 'left' },
                  { 'rce-mbox-remove-left': props.message.position === 'right' }
                ) : classNames(
                  'rce-mbox-forward',
                  { 'rce-mbox-reply-btn-right': props.message.position === 'left' },
                  { 'rce-mbox-reply-btn-left': props.message.position === 'right' }
                )}
                onClick={props.onRemoveMessageClick}>
                  <MdDelete />
              </div>
            }

            {
              (props.message.title || props.message.avatar) &&
              <div
                style={{...props.message.titleColor && { color: props.message.titleColor }}}
                onClick={props.onTitleClick}
                className={classNames('rce-mbox-title', {
                  'rce-mbox-title--clear': props.messageItem?.type === 'text',
                })}>
                {
                  props.message.avatar &&
                  <Avatar
                    letterItem={props.message.letterItem}
                    src={props.message.avatar}/>
                }
                {
                  props.message.title &&
                  <span>{props.message.title}</span>
                }
              </div>
            }

            {
              props.reply &&
              <ReplyMessage
                data={props.reply.data}
                onClick={() => props.onReplyMessageClick} />
            }

            {
              props.messageItem?.type === 'text' &&
              <div className={classNames('rce-mbox-text', {
                'rce-mbox-text-retracted': props.message.retracted,
                'left': props.message.position === 'left',
                'right': props.message.position === 'right',
              })}>
                {
                  props.message.retracted &&
                  <MdBlock />
                }
                {props.message.text}
              </div>
            }

            {
              props.messageItem?.type === 'location' &&
              <LocationMessage
                onOpen={props.onOpen}
                data={props.messageItem.data}
                target={props.messageItem?.target}
                href={props.messageItem?.href}
                apiKey={props.messageItem?.apiKey}
                src={props.messageItem?.src}
                zoom={props.messageItem?.zoom}
                markerColor={props.messageItem?.markerColor}
                text={props.message.text} />
            }

            {
              props.messageItem?.type === 'photo' &&
              <PhotoMessage
                onOpen={props.onOpen}
                onDownload={props.onDownload}
                onLoad={props.onLoad}
                onPhotoError={props.onPhotoError}
                data={props.messageItem?.data} />
            }

            {
              props.messageItem?.type === 'video' &&
              <VideoMessage
                onOpen={props.onOpen}
                onDownload={props.onDownload}
                onLoad={props.onLoad}
                onPhotoError={props.onPhotoError}
                data={props.messageItem?.data} />
            }

            {
              props.messageItem?.type === 'file' &&
              <FileMessage
                onOpen={props.onOpen}
                onDownload={props.onDownload}
                data={props.messageItem.data}
                text={props.message.text} />
            }

            {
              props.messageItem?.type === 'spotify' &&
              <SpotifyMessage
                data={props.messageItem?.data}
                uri={props.messageItem?.uri || props.message.text} />
            }

            {
              props.messageItem?.type === 'meeting' &&
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
                onMeetingMoreSelect={props.onMeetingMoreSelect} />
            }
            {
              props.messageItem?.type === 'audio' &&
              <AudioMessage
                message={props.messageItem?.message}
                onOpen={props.onOpen}
                onDownload={props.onDownload}
                onLoad={props.onLoad} />
            }

            {
              props.messageItem?.type === 'meetingLink' &&
              <MeetingLink
                meetingID={props.messageItem?.meetingID}
                title={props.message.text}
                onMeetingMoreSelect={props.onMeetingLinkClick}/>
            }

            <div
              className={classNames(
                'rce-mbox-time',
                { 'rce-mbox-time-block': thatAbsoluteTime },
                { 'non-copiable': !props.message.copiableDate },
              )}
              data-text={props.message.copiableDate ? undefined : dateText}>
              {
                props.message.copiableDate &&
                props.message.date &&
                (
                  props.message.dateString ||
                  format(props.message.date)
                )
              }
              {
                props.message.status &&
                <span className='rce-mbox-status'>
                  {
                    props.message.status === 'waiting' &&
                    <MdAccessTime />
                  }

                  {
                    props.message.status === 'sent' &&
                    <MdCheck />
                  }

                  {
                    props.message.status === 'received' &&
                    <IoIosDoneAll />
                  }

                  {
                    props.message.status === 'read' &&
                    <IoIosDoneAll color='#4FC3F7'/>
                  }
                </span>
              }
            </div>
          </div>

          {
            props.message.notch &&
            (props.message.position === 'right' ?
              <svg className={classNames(
                "rce-mbox-right-notch",
                { 'message-focus': props.message.focus},
              )} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M0 0v20L20 0" />
              </svg>
              :
              <div>
                <svg className={classNames(
                    "rce-mbox-left-notch",
                    { 'message-focus': props.message.focus},
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