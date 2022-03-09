import React from 'react';
import './ChatList.css';

import ChatItem from '../ChatItem/ChatItem';

const classNames = require('classnames');
function ChatList(props) {

  const onClick = (item, i, e) => {
    if (props.onClick instanceof Function)
      props.onClick(item, i, e);
  }

  const onContextMenu = (item, i, e) => {
    e.preventDefault();
    if (props.onContextMenu instanceof Function)
      props.onContextMenu(item, i, e);
  }

  const onAvatarError = (item, i, e) => {
    if (props.onAvatarError instanceof Function)
      props.onAvatarError(item, i, e);
  }

  return (
    <div
      ref={props.cmpRef}
      className={classNames('rce-container-clist', props.className)}>
      {
        props.dataSource.map((x, i) => (
          <ChatItem
            key={i}
            id={x.id || i}
            lazyLoadingImage={props.lazyLoadingImage}
            {...x}
            onAvatarError={(e) => onAvatarError(x, i, e)}
            onContextMenu={(e) => onContextMenu(x, i, e)}
            onClick={(e) => onClick(x, i, e)}
            onClickMute={(e) => props.onClickMute(x, i, e)}
            onClickVideoCall={(e) => props.onClickVideoCall(x, i, e)}
            onDragOver={props.onDragOver}
            onDragEnter={props.onDragEnter}
            onDrop={props.onDrop}
            onDragLeave={props.onDragLeave}
            onDragComponent={props.onDragComponent}
            />
        ))
      }
    </div>
  );
}

ChatList.defaultProps = {
  dataSource: [],
  onClick: null,
  lazyLoadingImage: undefined,
  mute: null,
  onClickMute: null,
  onClickVideoCall: null,
  onDragOver: () => void(0),
  onDrop: () => void(0),
  onDragEnter: () => void(0),
  onDragLeave: () => void(0),
  onDragComponent: null
};

export default ChatList;
