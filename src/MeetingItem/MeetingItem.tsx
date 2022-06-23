import { FC } from 'react'
import './MeetingItem.css'

import { MdVideoCall, MdLink, MdCall } from 'react-icons/md'

import Avatar from '../Avatar/Avatar'

import { format } from 'timeago.js'

import classNames from 'classnames'
import { IMeetingItemProps } from '../type'

const MeetingItem: FC<IMeetingItemProps> = ({
  subjectLimit = 60,
  onClick = () => void 0,
  avatarFlexible = false,
  date = new Date(),
  lazyLoadingImage = undefined,
  avatarLimit = 5,
  avatars = [],
  audioMuted = true,
  onAvatarError = () => void 0,
  onMeetingClick = () => void 0,
  onShareClick = () => void 0,
  ...props
}) => {
  const statusColorType = props.statusColorType
  const AVATAR_LIMIT = avatarLimit

  const dateText = date && (props.dateString || format(date))

  const subject =
    props.subject && subjectLimit && props.subject.substring(0, subjectLimit) + (props.subject.length > subjectLimit ? '...' : '')

  return (
    <div className={classNames('rce-container-mtitem', props.className)} onClick={onClick} onContextMenu={props.onContextMenu}>
      <audio autoPlay loop muted={audioMuted} src={props.audioSource} />

      <div className='rce-mtitem'>
        <div className='rce-mtitem-top'>
          <div className='rce-mtitem-subject'>{subject}</div>
          <div className='rce-mtitem-share' onClick={onShareClick}>
            <MdLink />
          </div>
        </div>
        <div className='rce-mtitem-body'>
          <div className='rce-mtitem-body--avatars'>
            {
              // props.avatars?.slice(0, AVATAR_LIMIT).map((x, i) => x instanceof Avatar ? x : (
              avatars?.slice(0, AVATAR_LIMIT).map((x, i) => (
                <Avatar
                  key={i}
                  src={x.src}
                  alt={x.alt}
                  className={x.statusColorType === 'encircle' ? 'rce-mtitem-avatar-encircle-status' : ''}
                  size={'small'}
                  letterItem={x.letterItem}
                  sideElement={
                    x.statusColor ? (
                      <span
                        className='rce-mtitem-status'
                        style={
                          statusColorType === 'encircle'
                            ? {
                                boxShadow: `inset 0 0 0 2px ${x.statusColor}, inset 0 0 0 5px #FFFFFF`,
                              }
                            : {
                                backgroundColor: x.statusColor,
                              }
                        }
                      >
                        {x.statusText}
                      </span>
                    ) : (
                      <></>
                    )
                  }
                  onError={onAvatarError}
                  lazyLoadingImage={lazyLoadingImage}
                  type={classNames('circle', { 'flexible': avatarFlexible })}
                />
              ))
            }

            {avatars && AVATAR_LIMIT && avatars.length > AVATAR_LIMIT && (
              <div className='rce-avatar-container circle small rce-mtitem-letter'>
                <span>{'+' + (avatars.length - AVATAR_LIMIT)}</span>
              </div>
            )}
          </div>
          <div className='rce-mtitem-body--functions'>
            {props.closable && (
              <div className='rce-mtitem-closable' onClick={props.onCloseClick}>
                <MdCall />
              </div>
            )}
            <div className='rce-mtitem-button' onClick={onMeetingClick}>
              <MdVideoCall />
            </div>
          </div>
        </div>
        <div className='rce-mtitem-footer'>
          <span className='rce-mtitem-date'>{dateText}</span>
        </div>
      </div>
    </div>
  )
}

export default MeetingItem
