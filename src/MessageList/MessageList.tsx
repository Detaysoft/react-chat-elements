import React, { FC, Key, useEffect, useRef, useState } from 'react'
import './MessageList.css'

import MessageBox from '../MessageBox/MessageBox'

import classNames from 'classnames'
import { FaChevronDown } from 'react-icons/fa'
import { IMessageListProps, MessageListEvent, MessageType } from '../type'

import { Virtuoso } from 'react-virtuoso'

const MessageList: FC<IMessageListProps<{}, {}>> = ({
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

    if (props.virtualListOptions) {
      setTimeout(() => {
        e.current.scrollToIndex({
          index: props.dataSource.length - 1,
          align: 'end',
        })
      }, 0)
      return
    }

    if (toBottomHeight === '100%' || (toBottomHeight && scrollBottom < toBottomHeight)) {
      e.current.scrollTop = e.current.scrollHeight // scroll to bottom
    } else {
      if (lockable === true) {
        e.current.scrollTop = e.current.scrollHeight - e.current.offsetHeight - scrollBottom
      }
    }
  }

  useEffect(() => {
    fitScrollToBottom()
  }, [])

  useEffect(() => {
    if (!referance) return

    if (prevProps.current.dataSource.length !== props.dataSource.length) {
      fitScrollToBottom()
    }

    prevProps.current = props
  }, [prevProps, props])

  const fitScrollToBottom = () => {
    setScrollBottom(getBottom(referance))
    checkScroll()
  }

  const getBottom = (e: any) => {
    if (e.current) return e.current.scrollHeight - e.current.scrollTop - e.current.offsetHeight
    return e.scrollHeight - e.scrollTop - e.offsetHeight
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

    if (props.virtualListOptions !== null) {
      referance.current.scrollToIndex({ index: props.dataSource.length - 1, behavior: 'smooth' })
      return
    }

    referance.current.scrollTop = referance.current.scrollHeight
    if (props.onDownButtonClick instanceof Function) {
      props.onDownButtonClick(e)
    }
  }

  return (
    <div className={classNames(['rce-container-mlist', props.className])} {...props.customProps}>
      {!!props.children && props.isShowChild && props.children}

      {props.virtualListOptions ? (
        <div className={classNames(['rce-container-mlist', props.className])} {...props.customProps}>
          <Virtuoso
            ref={referance}
            // scrollerRef={ref => (referance.current = ref)}
            // followOutput={true}
            onScroll={onScroll}
            className='rce-mlist'
            style={{ height: '100%' }}
            {...props.virtualListOptions}
            totalCount={props.dataSource.length}
            atBottomStateChange={bottom => {
              setDownButton(!bottom)
            }}
            itemContent={index => <MeessageContent index={index} item={props.dataSource[index]} props={props} />}
          />
        </div>
      ) : (
        <div ref={referance} onScroll={onScroll} className='rce-mlist'>
          {props.dataSource.map((item, i: number) => (
            <MeessageContent index={i} item={item} props={props} />
          ))}
        </div>
      )}

      {downButton === true && _downButton && toBottomHeight !== '100%' && (
        <div className='rce-mlist-down-button' onClick={toBottom}>
          <FaChevronDown />
          {props.downButtonBadge !== undefined ? (
            <span className='rce-mlist-down-button--badge'>{props.downButtonBadge.toString()}</span>
          ) : null}
        </div>
      )}
    </div>
  )
}

function MeessageContent({ props, item, index }: { props: any; item: MessageType; index: number }) {
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

  const onMeetingMoreSelect: MessageListEvent = (item, i, e) => {
    if (props.onMeetingMoreSelect instanceof Function) props.onMeetingMoreSelect(item, i, e)
  }

  const onMeetingLinkClick: MessageListEvent = (item, i, e) => {
    if (props.onMeetingLinkClick instanceof Function) props.onMeetingLinkClick(item, i, e)
  }
  return (
    <MessageBox
      key={index as Key}
      {...(item as any)}
      // data={x}
      onOpen={props.onOpen && ((e: React.MouseEvent<HTMLElement>) => onOpen(item, index, e))}
      onPhotoError={props.onPhotoError && ((e: React.MouseEvent<HTMLElement>) => onPhotoError(item, index, e))}
      onDownload={props.onDownload && ((e: React.MouseEvent<HTMLElement>) => onDownload(item, index, e))}
      onTitleClick={props.onTitleClick && ((e: React.MouseEvent<HTMLElement>) => onTitleClick(item, index, e))}
      onForwardClick={props.onForwardClick && ((e: React.MouseEvent<HTMLElement>) => onForwardClick(item, index, e))}
      onReplyClick={props.onReplyClick && ((e: React.MouseEvent<HTMLElement>) => onReplyClick(item, index, e))}
      onReplyMessageClick={
        props.onReplyMessageClick && ((e: React.MouseEvent<HTMLElement>) => onReplyMessageClick(item, index, e))
      }
      onRemoveMessageClick={
        props.onRemoveMessageClick && ((e: React.MouseEvent<HTMLElement>) => onRemoveMessageClick(item, index, e))
      }
      onClick={props.onClick && ((e: React.MouseEvent<HTMLElement>) => onClick(item, index, e))}
      onContextMenu={props.onContextMenu && ((e: React.MouseEvent<HTMLElement>) => onContextMenu(item, index, e))}
      onMeetingMoreSelect={
        props.onMeetingMoreSelect && ((e: React.MouseEvent<HTMLElement>) => onMeetingMoreSelect(item, index, e))
      }
      onMessageFocused={props.onMessageFocused && ((e: React.MouseEvent<HTMLElement>) => onMessageFocused(item, index, e))}
      onMeetingMessageClick={
        props.onMeetingMessageClick && ((e: React.MouseEvent<HTMLElement>) => onMeetingMessageClick(item, index, e))
      }
      onMeetingTitleClick={props.onMeetingTitleClick}
      onMeetingVideoLinkClick={props.onMeetingVideoLinkClick}
      onMeetingLinkClick={props.onMeetingLinkClick && ((e: React.MouseEvent<HTMLElement>) => onMeetingLinkClick(item, index, e))}
      actionButtons={props.actionButtons}
      styles={props.messageBoxStyles}
      notchStyle={props.notchStyle}
    />
  )
}

export default MessageList
