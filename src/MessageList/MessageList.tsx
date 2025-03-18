import React, { FC, Key, useEffect, useRef, useState } from 'react'
import './MessageList.css'

import MessageBox from '../MessageBox/MessageBox'

import classNames from 'classnames'
import { IMessageListProps, MessageListEvent } from '../type'

import { HugeiconsIcon } from '@hugeicons/react';
// @ts-ignore
import { ArrowDown01Icon } from '@hugeicons/core-free-icons';

const MessageList: FC<IMessageListProps> = ({
  referance = null,
  lockable = false,
  toBottomHeight = 300,
  downButton,
  ...props
}) => {
  const [scrollBottom, setScrollBottom] = useState(0)
  const [_downButton, setDownButton] = useState(false)
  const prevProps = useRef(props)

  const checkScroll = () => {
    var e = referance
    if (!e || !e.current) return

    if (toBottomHeight === '100%' || (toBottomHeight && scrollBottom < toBottomHeight)) {
      e.current.scrollTop = e.current.scrollHeight // scroll to bottom
    } else {
      if (lockable === true) {
        e.current.scrollTop = e.current.scrollHeight - e.current.offsetHeight - scrollBottom
      }
    }
  }

  useEffect(() => {
    if (!referance) return

    if (prevProps.current.dataSource.length !== props.dataSource.length) {
      setScrollBottom(getBottom(referance))
      checkScroll()
    }

    prevProps.current = props
  }, [prevProps, props])

  const getBottom = (e: any) => {
    if (e.current) return e.current.scrollHeight - e.current.scrollTop - e.current.offsetHeight
    return e.scrollHeight - e.scrollTop - e.offsetHeight
  }

  const onOpen: MessageListEvent = (item, index, event) => {
    if (props.onOpen instanceof Function) props.onOpen(item, index, event)
  }

  const onDownload: MessageListEvent = (item, index, event) => {
    if (props.onDownload instanceof Function) props.onDownload(item, index, event)
  }

  const onPhotoError: MessageListEvent = (item, index, event) => {
    if (props.onPhotoError instanceof Function) props.onPhotoError(item, index, event)
  }

  const onClick: MessageListEvent = (item, index, event) => {
    if (props.onClick instanceof Function) props.onClick(item, index, event)
  }

  const onTitleClick: MessageListEvent = (item, index, event) => {
    if (props.onTitleClick instanceof Function) props.onTitleClick(item, index, event)
  }

  const onForwardClick: MessageListEvent = (item, index, event) => {
    if (props.onForwardClick instanceof Function) props.onForwardClick(item, index, event)
  }

  const onReplyClick: MessageListEvent = (item, index, event) => {
    if (props.onReplyClick instanceof Function) props.onReplyClick(item, index, event)
  }

  const onReplyMessageClick: MessageListEvent = (item, index, event) => {
    if (props.onReplyMessageClick instanceof Function) props.onReplyMessageClick(item, index, event)
  }

  const onRemoveMessageClick: MessageListEvent = (item, index, event) => {
    if (props.onRemoveMessageClick instanceof Function) props.onRemoveMessageClick(item, index, event)
  }

  const onContextMenu: MessageListEvent = (item, index, event) => {
    if (props.onContextMenu instanceof Function) props.onContextMenu(item, index, event)
  }

  const onMessageFocused: MessageListEvent = (item, index, event) => {
    if (props.onMessageFocused instanceof Function) props.onMessageFocused(item, index, event)
  }

  const onMeetingMessageClick: MessageListEvent = (item, index, event) => {
    if (props.onMeetingMessageClick instanceof Function) props.onMeetingMessageClick(item, index, event)
  }

  const onScroll = (e: React.UIEvent<HTMLElement>): void => {
    var bottom = getBottom(e.currentTarget)
    setScrollBottom(bottom)
    if (toBottomHeight === '100%' || (toBottomHeight && bottom > toBottomHeight)) {
      if (_downButton !== true) {
        setDownButton(true)
        setScrollBottom(bottom)
      }
    } else {
      if (_downButton !== false) {
        setDownButton(false)
        setScrollBottom(bottom)
      }
    }

    if (props.onScroll instanceof Function) {
      props.onScroll(e)
    }
  }

  const toBottom = (e: any) => {
    if (!referance) return
    referance.current.scrollTop = referance.current.scrollHeight
    if (props.onDownButtonClick instanceof Function) {
      props.onDownButtonClick(e)
    }
  }

  const onMeetingMoreSelect: MessageListEvent = (item, i, e) => {
    if (props.onMeetingMoreSelect instanceof Function) props.onMeetingMoreSelect(item, i, e)
  }

  const onMeetingLinkClick: MessageListEvent = (item, i, e) => {
    if (props.onMeetingLinkClick instanceof Function) props.onMeetingLinkClick(item, i, e)
  }

  return (
    <div className={classNames(['rce-container-mlist', props.className])} {...props.customProps}>
      {!!props.children && props.isShowChild && props.children}
      <div ref={referance} onScroll={onScroll} className='rce-mlist'>
        {props.dataSource.map((x, i: number) => (
          <MessageBox
            key={i as Key}
            {...(x as any)}
            // data={x}
            onOpen={props.onOpen && ((e: React.MouseEvent<HTMLElement>) => onOpen(x, i, e))}
            onPhotoError={props.onPhotoError && ((e: React.MouseEvent<HTMLElement>) => onPhotoError(x, i, e))}
            onDownload={props.onDownload && ((e: React.MouseEvent<HTMLElement>) => onDownload(x, i, e))}
            onTitleClick={props.onTitleClick && ((e: React.MouseEvent<HTMLElement>) => onTitleClick(x, i, e))}
            onForwardClick={props.onForwardClick && ((e: React.MouseEvent<HTMLElement>) => onForwardClick(x, i, e))}
            onReplyClick={props.onReplyClick && ((e: React.MouseEvent<HTMLElement>) => onReplyClick(x, i, e))}
            onReplyMessageClick={
              props.onReplyMessageClick && ((e: React.MouseEvent<HTMLElement>) => onReplyMessageClick(x, i, e))
            }
            onRemoveMessageClick={
              props.onRemoveMessageClick && ((e: React.MouseEvent<HTMLElement>) => onRemoveMessageClick(x, i, e))
            }
            onClick={props.onClick && ((e: React.MouseEvent<HTMLElement>) => onClick(x, i, e))}
            onContextMenu={props.onContextMenu && ((e: React.MouseEvent<HTMLElement>) => onContextMenu(x, i, e))}
            onMeetingMoreSelect={
              props.onMeetingMoreSelect && ((e: React.MouseEvent<HTMLElement>) => onMeetingMoreSelect(x, i, e))
            }
            onMessageFocused={props.onMessageFocused && ((e: React.MouseEvent<HTMLElement>) => onMessageFocused(x, i, e))}
            onMeetingMessageClick={
              props.onMeetingMessageClick && ((e: React.MouseEvent<HTMLElement>) => onMeetingMessageClick(x, i, e))
            }
            onMeetingTitleClick={props.onMeetingTitleClick}
            onMeetingVideoLinkClick={props.onMeetingVideoLinkClick}
            onMeetingLinkClick={props.onMeetingLinkClick && ((e: React.MouseEvent<HTMLElement>) => onMeetingLinkClick(x, i, e))}
            actionButtons={props.actionButtons}
            styles={props.messageBoxStyles}
            notchStyle={props.notchStyle}
          />
        ))}
      </div>
      {downButton === true && _downButton && toBottomHeight !== '100%' && (
        <div className='rce-mlist-down-button' onClick={toBottom}>
          <HugeiconsIcon icon={ArrowDown01Icon} />
          {props.downButtonBadge !== undefined ? (
            <span className='rce-mlist-down-button--badge'>{props.downButtonBadge.toString()}</span>
          ) : null}
        </div>
      )}
    </div>
  )
}

export default MessageList
