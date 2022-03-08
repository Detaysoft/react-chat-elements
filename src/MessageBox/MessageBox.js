import React, {useEffect, useRef} from 'react';
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

import FaForward from 'react-icons/lib/fa/mail-forward';

import IoDoneAll from 'react-icons/lib/io/android-done-all';
import MdIosTime from 'react-icons/lib/md/access-time';
import MdCheck from 'react-icons/lib/md/check';
import MdMessage from 'react-icons/lib/md/message';
import MdRemove from 'react-icons/lib/md/delete';
import MdBlock from 'react-icons/lib/md/block';

import {
  format,
} from 'timeago.js';

import classNames from 'classnames';

export default function MessageBox(props) {
  const messageRef = useRef(null);
  const prevProps = useRef(props);

  var positionCls = classNames('rce-mbox', { 'rce-mbox-right': props.position === 'right' });
  var thatAbsoluteTime = !/(text|video|file|meeting|audio)/g.test(props.type) && !(props.type === 'location' && props.text);
  const dateText = props.date && !isNaN(props.date) && (props.dateString || format(props.date));

  useEffect(() => {
    if (prevProps.current.focus !== props.focus && prevProps.current.focus === true) {
      if (messageRef) {
        messageRef.current.scrollIntoView({
          block: "center",
          behavior: 'smooth'
        })

        props.onMessageFocused(prevProps);
      }
    }
    prevProps.current = props;
  }, [props.focus, prevProps]);

  return (
    <div
      ref={messageRef}
      className={classNames('rce-container-mbox', props.className)}
      onClick={props.onClick}>
      {
        props.renderAddCmp instanceof Function &&
        props.renderAddCmp()
      }
      {
        props.type === 'system' ?
          <SystemMessage
            text={props.text} />
        :
        <div
          className={classNames(
            positionCls,
            {'rce-mbox--clear-padding': thatAbsoluteTime},
            {'rce-mbox--clear-notch': !props.notch},
            { 'message-focus': props.focus},
          )}>
          <div className='rce-mbox-body' onContextMenu={props.onContextMenu}>
            {
              !props.retracted &&
              props.forwarded === true &&
              <div
                className={classNames(
                  'rce-mbox-forward',
                  { 'rce-mbox-forward-right': props.position === 'left' },
                  { 'rce-mbox-forward-left': props.position === 'right' }
                )}
                onClick={props.onForwardClick}>
                  <FaForward />
              </div>
            }

            {
              !props.retracted &&
              props.replyButton === true &&
              <div
                className={props.forwarded !== true ? classNames(
                  'rce-mbox-forward',
                  { 'rce-mbox-forward-right': props.position === 'left' },
                  { 'rce-mbox-forward-left': props.position === 'right' }
                ) : classNames(
                  'rce-mbox-forward',
                  { 'rce-mbox-reply-btn-right': props.position === 'left' },
                  { 'rce-mbox-reply-btn-left': props.position === 'right' }
                )}
                onClick={props.onReplyClick}>
                  <MdMessage />
              </div>
            }

            {
              !props.retracted &&
              props.removeButton === true &&
              <div
                className={props.forwarded === true ? classNames(
                  'rce-mbox-remove',
                  { 'rce-mbox-remove-right': props.position === 'left' },
                  { 'rce-mbox-remove-left': props.position === 'right' }
                ) : classNames(
                  'rce-mbox-forward',
                  { 'rce-mbox-reply-btn-right': props.position === 'left' },
                  { 'rce-mbox-reply-btn-left': props.position === 'right' }
                )}
                onClick={props.onRemoveMessageClick}>
                  <MdRemove />
              </div>
            }

            {
              (props.title || props.avatar) &&
              <div
                style={props.titleColor && { color: props.titleColor }}
                onClick={props.onTitleClick}
                className={classNames('rce-mbox-title', {
                  'rce-mbox-title--clear': props.type === 'text',
                })}>
                {
                  props.avatar &&
                  <Avatar
                      letterItem={props.letterItem}
                      src={props.avatar}/>
                }
                {
                  props.title &&
                  <span>{props.title}</span>
                }
              </div>
            }

            {
              props.reply &&
              <ReplyMessage
                photoURL={props.reply.photoURL}
                title={props.reply.title}
                titleColor={props.reply.titleColor}
                message={props.reply.message}
                onClick={props.onReplyMessageClick}/>
            }

            {
              props.type === 'text' &&
              <div className={classNames('rce-mbox-text', {
                'rce-mbox-text-retracted': props.retracted,
                'left': props.position === 'left',
                'right': props.position === 'right',
              })}>
                {
                  props.retracted &&
                  <MdBlock />
                }
                {props.text}
              </div>
            }

            {
              props.type === 'location' &&
              <LocationMessage
                onOpen={props.onOpen}
                data={props.data}
                target={props.target}
                href={props.href}
                apiKey={props.apiKey}
                src={props.src}
                zoom={props.zoom}
                markerColor={props.markerColor}
                text={props.text} />
            }

            {
                props.type === 'photo' &&
                <PhotoMessage
                  onOpen={props.onOpen}
                  onDownload={props.onDownload}
                  onLoad={props.onLoad}
                  onPhotoError={props.onPhotoError}
                  data={props.data}
                  width={props.width}
                  height={props.height}
                  text={props.text} />
            }

            {
              props.type === 'video' &&
              <VideoMessage
                onOpen={props.onOpen}
                onDownload={props.onDownload}
                onLoad={props.onLoad}
                onPhotoError={props.onPhotoError}
                data={props.data}
                width={props.width}
                height={props.height}
                text={props.text} />
            }

            {
              props.type === 'file' &&
              <FileMessage
                onOpen={props.onOpen}
                onDownload={props.onDownload}
                data={props.data}
                text={props.text} />
            }

            {
              props.type === 'spotify' &&
              <SpotifyMessage
                width={props.width}
                height={props.height}
                theme={props.theme}
                view={props.view}
                data={props.data}
                uri={props.uri || props.text} />
            }

            {
              props.type === 'meeting' &&
              props.meeting &&
              <MeetingMessage
                subject={props.meeting.subject}
                title={props.meeting.title}
                date={props.meeting.date}
                dateString={props.meeting.dateString}
                collapseTitle={props.meeting.collapseTitle}
                participants={props.meeting.participants}
                moreItems={props.meeting.moreItems}
                dataSource={props.meeting.dataSource}
                onClick={props.onMeetingMessageClick}
                onMeetingMoreSelect={props.onMeetingMoreSelect}
                onMeetingVideoLinkClick={props.onMeetingVideoLinkClick}
                onMeetingTitleClick={props.onMeetingTitleClick} />
            }
            {
              props.type === 'audio' &&
              <AudioMessage
                onOpen={props.onOpen}
                onDownload={props.onDownload}
                onLoad={props.onLoad}
                data={props.data}
                text={props.text} />
            }

            {
              props.type === 'meetingLink' &&
              <MeetingLink
                meetingID={props.meetingID}
                title={props.text}
                onMeetingMoreSelect={props.onMeetingLinkClick}/>
            }

            <div
              className={classNames(
                'rce-mbox-time',
                { 'rce-mbox-time-block': thatAbsoluteTime },
                { 'non-copiable': !props.copiableDate },
              )}
              data-text={props.copiableDate ? undefined : dateText}>
              {
                props.copiableDate &&
                props.date &&
                !isNaN(props.date) &&
                (
                  props.dateString ||
                  format(props.date)
                )
              }
              {
                props.status &&
                <span className='rce-mbox-status'>
                  {
                    props.status === 'waiting' &&
                    <MdIosTime />
                  }

                  {
                    props.status === 'sent' &&
                    <MdCheck />
                  }

                  {
                    props.status === 'received' &&
                    <IoDoneAll />
                  }

                  {
                    props.status === 'read' &&
                    <IoDoneAll color='#4FC3F7'/>
                  }
                </span>
              }
            </div>
          </div>

          {
            props.notch &&
            (props.position === 'right' ?
              <svg className={classNames(
                "rce-mbox-right-notch",
                { 'message-focus': props.focus},
              )} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M0 0v20L20 0" />
              </svg>
              :
              <div>
                <svg className={classNames(
                    "rce-mbox-left-notch",
                    { 'message-focus': props.focus},
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

MessageBox.defaultProps = {
  position: 'left',
  type: 'text',
  text: '',
  title: null,
  titleColor: null,
  onTitleClick: null,
  onForwardClick: null,
  onReplyClick: null,
  onRemoveMessageClick: null,
  onReplyMessageClick: null,
  date: new Date(),
  data: {},
  onClick: null,
  onOpen: null,
  onDownload: null,
  onLoad: null,
  onPhotoError: null,
  forwarded: false,
  reply: false,
  status: null,
  dateString: null,
  notch: true,
  avatar: null,
  renderAddCmp: null,
  copiableDate: false,
  onContextMenu: null,
  focus: false,
  onMessageFocused: null,
};
