import React from 'react';
import './MeetingList.css';

import MeetingItem from '../MeetingItem/MeetingItem';

const classNames = require('classnames');

function MeetingList(props) {

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

  const onMeetingClick = (item, i, e) => {
    if (props.onMeetingClick instanceof Function)
      props.onMeetingClick(item, i, e);
  }

  const onShareClick = (item, i, e) => {
    if (props.onShareClick instanceof Function)
      props.onShareClick(item, i, e);
  }

  const onCloseClick = (item, i, e) => {
    if (props.onCloseClick instanceof Function)
      props.onCloseClick(item, i, e);
  }

  return (
    <div
      ref={props.cmpRef}
      className={classNames('rce-container-mtlist', props.className)}>
      {
        props.dataSource.map((x, i) => (
          <MeetingItem
            id={x.id || i}
            key={i}
            lazyLoadingImage={props.lazyLoadingImage}
            {...x}
            onAvatarError={(e) => onAvatarError(x, i, e)}
            onContextMenu={(e) => onContextMenu(x, i, e)}
            onClick={(e) => onClick(x, i, e)}
            onMeetingClick={(e) => onMeetingClick(x, i, e)}
            onShareClick={(e) => onShareClick(x, i, e)}
            onCloseClick={(e) => onCloseClick(x, i, e)}/>
        ))
      }
    </div>
  );
}

MeetingList.defaultProps = {
  dataSource: [],
  onClick: null,
  lazyLoadingImage: undefined,
};

export default MeetingList;
