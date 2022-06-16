import React from 'react'

import './VideoMessage.css'

import { FaCloudDownloadAlt, FaExclamationTriangle } from 'react-icons/fa'

import classNames from 'classnames'
import ProgressCircle from '../Circle/Circle'
import { IProgressOptions, IVideoMessageProps } from '../type'

const VideoMessage: React.FC<IVideoMessageProps> = props => {
  var progressOptions = {
    strokeWidth: 2.3,
    color: '#efe',
    trailColor: '#aaa',
    trailWidth: 1,
    step: (
      state: IProgressOptions,
      circle: {
        path: { setAttribute: (arg0: string, arg1: string) => void }
        value: () => number
        setText: (arg0: string | number) => void
      }
    ) => {
      circle.path.setAttribute('trail', state.state.color)
      circle.path.setAttribute('trailwidth-width', state.state.width)

      var value = Math.round(circle?.value() * 100)
      if (value === 0) circle?.setText('')
      else circle?.setText(value)
    },
  }

  const error = props.message?.status && props.message?.status.error === true
  const downloaded = props.message?.status && props.message?.status.download

  return (
    <div
      className={classNames('rce-mbox-video', {
        'padding-time': !props.message?.text,
      })}
    >
      <div
        className='rce-mbox-video--video'
        style={{
          ...(props.message?.width &&
            props.message?.height && {
              width: props.message.width,
              height: props.message.height,
            }),
        }}
      >
        {!downloaded && (
          <img
            src={props.message?.uri}
            alt={props.message?.alt}
            onClick={props.onOpen}
            onLoad={props.onLoad}
            onError={props.onPhotoError}
          />
        )}

        {downloaded && (
          <video controls>
            <source src={props.message?.videoURL} type='video/mp4' />
            Your browser does not support HTML video.
          </video>
        )}

        {error && (
          <div className='rce-mbox-video--video__block'>
            <span className='rce-mbox-video--video__block-item rce-mbox-video--error'>
              <FaExclamationTriangle />
            </span>
          </div>
        )}
        {!error && props.message?.status && !downloaded && (
          <div className='rce-mbox-video--video__block'>
            {!props.message.status.click && (
              <button onClick={props.onDownload} className='rce-mbox-video--video__block-item rce-mbox-video--download'>
                <FaCloudDownloadAlt />
              </button>
            )}
            {typeof props.message.status.loading === 'number' && props.message.status.loading !== 0 && (
              <ProgressCircle
                animate={props.message.status.loading}
                className='rce-mbox-video--video__block-item'
                progressOptions={progressOptions}
              />
            )}
          </div>
        )}
      </div>
      {props.message?.text && <div className='rce-mbox-text'>{props.message.text}</div>}
    </div>
  )
}

export default VideoMessage
