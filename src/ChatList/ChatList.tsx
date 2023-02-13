import React, { Dispatch, Key, SetStateAction } from 'react'
import classNames from 'classnames'
import './ChatList.css'

import ChatItem from '../ChatItem/ChatItem'
import { IChatListProps, ChatListEvent } from '../type'

let list: Dispatch<SetStateAction<any>>[] = []

const ChatList: React.FC<IChatListProps> = props => {
  const onClick: ChatListEvent = (item, index, event) => {
    if (props.onClick instanceof Function) props.onClick(item, index, event)
  }

  const onContextMenu: ChatListEvent = (item, index, event) => {
    event.preventDefault()
    if (props.onContextMenu instanceof Function) props.onContextMenu(item, index, event)
  }

  const onAvatarError: ChatListEvent = (item, index, event) => {
    if (props.onAvatarError instanceof Function) props.onAvatarError(item, index, event)
  }

  const setDragStates = <S,>(state: Dispatch<SetStateAction<S>>) => {
    list.push(state)
  }

  const onDragLeaveMW = (e: React.MouseEvent<HTMLElement>, id: number | string) => {
    if (list.length > 0) list.forEach(item => item(false))
    props.onDragLeave?.(e, id)
  }

  return (
    <div className={classNames('rce-container-clist', props.className)}>
      {props.dataSource.map((x, i: number) => (
        <ChatItem
          {...x}
          key={i as Key}
          lazyLoadingImage={props.lazyLoadingImage}
          onAvatarError={(e: React.MouseEvent<HTMLElement>) => onAvatarError(x, i, e)}
          onContextMenu={(e: React.MouseEvent<HTMLElement>) => onContextMenu(x, i, e)}
          onClick={(e: React.MouseEvent<HTMLElement>) => onClick(x, i, e)}
          onClickMute={(e: React.MouseEvent<HTMLElement>) => props.onClickMute?.(x, i, e)}
          onClickVideoCall={(e: React.MouseEvent<HTMLElement>) => props.onClickVideoCall?.(x, i, e)}
          onDragOver={props?.onDragOver}
          onDragEnter={props?.onDragEnter}
          onDrop={props.onDrop}
          onDragLeave={onDragLeaveMW}
          onDragComponent={props.onDragComponent}
          setDragStates={setDragStates}
        />
      ))}
    </div>
  )
}

export default ChatList
