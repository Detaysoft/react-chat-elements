import React, { useState, useEffect, useRef } from 'react';
import './MessageList.css';

import MessageBox from '../MessageBox/MessageBox';

import FaChevronDown from 'react-icons/lib/fa/chevron-down';

const classNames = require('classnames');

export default function MessageList(props) {
  const [scrollBottom, setScrollBottom] = useState(0);
  const [downButton, setDownButton] = useState(false);
  const prevProps = useRef(props);

  const checkScroll = () => {
    var e = props.referance;
    if (!e || !e.current)
      return;

    if (props.toBottomHeight === '100%' || scrollBottom < props.toBottomHeight) {
      e.current.scrollTop = e.current.scrollHeight; // scroll to bottom
    } else {
      if (props.lockable === true) {
        e.current.scrollTop = e.current.scrollHeight - e.current.offsetHeight - scrollBottom;
      }
    }
  }

  useEffect(() => {
      if (!props.referance)
        return;

      if (prevProps.current.dataSource.length !== props.dataSource.length) {
        setScrollBottom(getBottom(props.referance));
        checkScroll();
      }

      prevProps.current = props;
  }, [prevProps, props.dataSource]);

  const getBottom = (e) => {
    if (e.current)
      return e.current.scrollHeight - e.current.scrollTop - e.current.offsetHeight;
    return e.scrollHeight - e.scrollTop - e.offsetHeight;
  }

  const onOpen = (item, i, e) => {
    if (props.onOpen instanceof Function)
      props.onOpen(item, i, e);
  }

  const onDownload = (item, i, e) => {
    if (props.onDownload instanceof Function)
      props.onDownload(item, i, e);
  }

  const onPhotoError = (item, i, e) => {
    if (props.onPhotoError instanceof Function)
      props.onPhotoError(item, i, e);
  }

  const onClick = (item, i, e) => {
    if (props.onClick instanceof Function)
      props.onClick(item, i, e);
  }

  const onTitleClick = (item, i, e) => {
    if (props.onTitleClick instanceof Function)
      props.onTitleClick(item, i, e);
  }

  const onForwardClick = (item, i, e) => {
    if (props.onForwardClick instanceof Function)
      props.onForwardClick(item, i, e);
  }

  const onReplyClick = (item, i, e) => {
    if (props.onReplyClick instanceof Function)
      props.onReplyClick(item, i, e);
  }

  const onReplyMessageClick = (item, i, e) => {
    if (props.onReplyMessageClick instanceof Function)
      props.onReplyMessageClick(item, i, e);
  }

  const onRemoveMessageClick = (item, i, e) => {
    if (props.onRemoveMessageClick instanceof Function)
      props.onRemoveMessageClick(item, i, e);
  }

  const onContextMenu = (item, i, e) => {
    if (props.onContextMenu instanceof Function)
      props.onContextMenu(item, i, e);
  }

  const onMessageFocused = (item, i, e) => {
    if (props.onMessageFocused instanceof Function)
      props.onMessageFocused(item, i, e);
  }

  const onMeetingMessageClick = (item, i, e) => {
    if (props.onMeetingMessageClick instanceof Function)
      props.onMeetingMessageClick(item, i, e);
  }

  const onScroll = (e) => {
    var bottom = getBottom(e.target);
    setScrollBottom(bottom);
    if (props.toBottomHeight === '100%' || bottom > props.toBottomHeight) {
      if (downButton !== true) {
        setDownButton(true);
        setScrollBottom(bottom);
      }
    } else {
      if (downButton !== false) {
        setDownButton(false);
        setScrollBottom(bottom);
      }
    }

    if (props.onScroll instanceof Function) {
      props.onScroll(e);
    }
  }

  const toBottom = (e) => {
    if(!props.referance)
      return;
    props.referance.current.scrollTop = props.referance.current.scrollHeight;
    if (props.onDownButtonClick instanceof Function) {
      props.onDownButtonClick(e);
    }
  }

  const onMeetingMoreSelect = (item, i, e) => {
    if (props.onMeetingMoreSelect instanceof Function)
      props.onMeetingMoreSelect(item, i, e);
  }

  const onMeetingLinkClick = (item, i, e) => {
    if (props.onMeetingLinkClick instanceof Function)
      props.onMeetingLinkClick(item, i, e);
  }

  return (
    <div
      className={classNames(['rce-container-mlist', props.className])} {...props.customProps}>
        {
          !!props.children && props.isShowChild &&
          props.children
        }
        <div
          ref={props.referance}
          onScroll={onScroll}
          className='rce-mlist'>
          {
            props.dataSource.map((x, i) => (
              <MessageBox
                key={i}
                {...x}
                onOpen={props.onOpen && ((e) => onOpen(x, i, e))}
                onPhotoError={props.onPhotoError && ((e) => onPhotoError(x, i, e))}
                onDownload={props.onDownload && ((e) => onDownload(x, i, e))}
                onTitleClick={props.onTitleClick && ((e) => onTitleClick(x, i, e))}
                onForwardClick={props.onForwardClick && ((e) => onForwardClick(x, i, e))}
                onReplyClick={props.onReplyClick && ((e) => onReplyClick(x, i, e))}
                onReplyMessageClick={props.onReplyMessageClick && ((e) => onReplyMessageClick(x, i, e))}
                onRemoveMessageClick={props.onRemoveMessageClick && ((e) => onRemoveMessageClick(x, i, e))}
                onClick={props.onClick && ((e) => onClick(x, i, e))}
                onContextMenu={props.onContextMenu && ((e) => onContextMenu(x, i, e))}
                onMeetingMoreSelect={props.onMeetingMoreSelect && ((e) => onMeetingMoreSelect(x, i, e))}
                onMessageFocused={props.onMessageFocused && ((e) => onMessageFocused(x, i, e))}
                onMeetingMessageClick={props.onMeetingMessageClick && ((e) => onMeetingMessageClick(x, i, e))}
                onMeetingTitleClick={props.onMeetingTitleClick}
                onMeetingVideoLinkClick={props.onMeetingVideoLinkClick}
                onMeetingLinkClick={props.onMeetingLinkClick && ((e) => onMeetingLinkClick(x, i, e))}
              />
            ))
          }
      </div>
      {
        props.downButton === true &&
        downButton &&
        props.toBottomHeight !== '100%' &&
        <div
          className='rce-mlist-down-button'
          onClick={toBottom}>
          <FaChevronDown/>
          {
            props.downButtonBadge &&
            <span
              className='rce-mlist-down-button--badge'>
              {props.downButtonBadge}
            </span>
          }
        </div>
      }
    </div>
  );
}

MessageList.defaultProps = {
  onClick: null,
  onTitleClick: null,
  onForwardClick: null,
  onReplyClick: null,
  onReplyMessageClick: null,
  onMeetingMessageClick: null,
  onDownButtonClick: null,
  referance: null,
  onOpen: null,
  onPhotoError: null,
  onDownload: null,
  dataSource: [],
  lockable: false,
  toBottomHeight: 300,
  downButton: true,
  downButtonBadge: null,
};
