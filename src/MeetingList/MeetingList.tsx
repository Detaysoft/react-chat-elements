import React, { FC, Key } from 'react'
import './MeetingList.css'

import MeetingItem from '../MeetingItem/MeetingItem'
import classNames from 'classnames'
import { IMeetingListProps, MeetingListEvent } from '../type'

const MeetingList: FC<IMeetingListProps> = props => {
  const onClick: MeetingListEvent = (item, index, event) => {
    if (props.onClick instanceof Function) props.onClick(item, index, event)
  }

  const onContextMenu: MeetingListEvent = (item, index, event) => {
    event.preventDefault()
    if (props.onContextMenu instanceof Function) props.onContextMenu(item, index, event)
  }

  const onAvatarError: MeetingListEvent = (item, index, event) => {
    if (props.onAvatarError instanceof Function) props.onAvatarError(item, index, event)
  }

  const onMeetingClick: MeetingListEvent = (item, index, event) => {
    if (props.onMeetingClick instanceof Function) props.onMeetingClick(item, index, event)
  }

  const onShareClick: MeetingListEvent = (item, index, event) => {
    if (props.onShareClick instanceof Function) props.onShareClick(item, index, event)
  }

  const onCloseClick: MeetingListEvent = (item, index, event) => {
    if (props.onCloseClick instanceof Function) props.onCloseClick(item, index, event)
  }

  return (
    <div ref={props.cmpRef} className={classNames('rce-container-mtlist', props.className)}>
      {props.dataSource?.map((x, i: number) => (
        <MeetingItem
          key={i as Key}
          lazyLoadingImage={props.lazyLoadingImage}
          {...x}
          onAvatarError={(e: React.MouseEvent<HTMLElement>) => onAvatarError(x, i, e)}
          onContextMenu={(e: React.MouseEvent<HTMLElement>) => onContextMenu(x, i, e)}
          onClick={(e: React.MouseEvent<HTMLElement>) => onClick(x, i, e)}
          onMeetingClick={(e: React.MouseEvent<HTMLElement>) => onMeetingClick(x, i, e)}
          onShareClick={(e: React.MouseEvent<HTMLElement>) => onShareClick(x, i, e)}
          onCloseClick={(e: React.MouseEvent<HTMLElement>) => onCloseClick(x, i, e)}
        />
      ))}
    </div>
  )
}

export default MeetingList
