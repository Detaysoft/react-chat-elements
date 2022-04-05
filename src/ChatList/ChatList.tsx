import React, { Key } from 'react';
import classNames from 'classnames';
import './ChatList.css';

import ChatItem from '../ChatItem/ChatItem';

const ChatList: React.FC<IChatListProps> = (props) => {

  const onClick: ChatListEvent = (item, index, event) => {
    if (props.onClick instanceof Function)
      props.onClick(item, index, event);
  }

  const onContextMenu: ChatListEvent = (item, index, event) => {
    event.preventDefault();
    if (props.onContextMenu instanceof Function)
      props.onContextMenu(item, index, event);
  }

  const onAvatarError: ChatListEvent = (item, index, event) => {
    if (props.onAvatarError instanceof Function)
      props.onAvatarError(item, index, event);
  }

  return (
    <div
      className={classNames('rce-container-clist', props.className)}>
      {
        props.dataSource.map((x, i: Number) => (
          <ChatItem
            key={i as Key}
            lazyLoadingImage={props.lazyLoadingImage}
            chat={x}
            onAvatarError={(e: React.MouseEvent<HTMLElement>) => onAvatarError(x, i, e)}
            onContextMenu={(e: React.MouseEvent<HTMLElement>) => onContextMenu(x, i, e)}
            onClick={(e: React.MouseEvent<HTMLElement>) => onClick(x, i, e)}
            onClickMute={(e: React.MouseEvent<HTMLElement>) => props.onClickMute?.(x, i, e)}
            onClickVideoCall={(e: React.MouseEvent<HTMLElement>) => props.onClickVideoCall?.(x, i, e)}
            onDragOver={props?.onDragOver}
            onDragEnter={props?.onDragEnter}
            onDrop={props.onDrop}
            onDragLeave={props.onDragLeave}
            onDragComponent={props.onDragComponent}
            avatar={x.avatar}
            />
        ))
      }
    </div>
  );
}

export default ChatList;
