import React from 'react'

import './VideoMessage.css'

import classNames from 'classnames'
import ProgressCircle from '../Circle/Circle'
import { IProgressOptions, IVideoMessageProps } from '../type'

import { HugeiconsIcon } from '@hugeicons/react';
// @ts-ignore
import { CloudDownloadIcon, Alert02Icon } from '@hugeicons/core-free-icons';

const VideoMessage: React.FC<IVideoMessageProps> = props => {
  var progressOptions = {
    strokeWidth: 2.3,
    color: '#efe',
    trailColor: '#aaa',
    trailWidth: 1,
    step: (
      data: IProgressOptions,
      circle: {
        path: { setAttribute: (arg0: string, arg1: string) => void }
        value: () => number
        setText: (arg0: string | number) => void
      }
    ) => {
      circle.path.setAttribute('trail', (data.state !== undefined && data?.state?.color) || '')
      circle.path.setAttribute('trailwidth-width', (data.state !== undefined && data?.state?.width) || '')

      var value = Math.round(circle?.value() * 100)
      if (value === 0) circle?.setText('')
      else circle?.setText(value)
    },
  }

  const error = props?.data?.status && props?.data?.status.error === true
  const downloaded = props?.data?.status && props?.data?.status.download

  return (
    <div
      className={classNames('rce-mbox-video', {
        'padding-time': !props?.text,
      })}
    >
      <div
        className='rce-mbox-video--video'
        style={{
          ...(props?.data.width &&
            props?.data.height && {
              width: props.data.width,
              height: props.data.height,
            }),
        }}
      >
        {!downloaded && (
          <img
            src={props?.data.uri}
            alt={props?.data.alt}
            onClick={props.onOpen}
            onLoad={props.onLoad}
            onError={props.onPhotoError}
          />
        )}

        {downloaded && (
          <video controls controlsList={props.controlsList}>
            <source src={props?.data.videoURL} type='video/mp4' />
            Your browser does not support HTML video.
          </video>
        )}

        {error && (
          <div className='rce-mbox-video--video__block'>
            <span className='rce-mbox-video--video__block-item rce-mbox-video--error'>
              <HugeiconsIcon icon={Alert02Icon} />
            </span>
          </div>
        )}
        {!error && props?.data?.status && !downloaded && (
          <div className='rce-mbox-video--video__block'>
            {!props.data.status.click && (
              <button onClick={props.onDownload} className='rce-mbox-video--video__block-item rce-mbox-video--download'>
                <HugeiconsIcon icon={CloudDownloadIcon} />
              </button>
            )}
            {typeof props.data.status.loading === 'number' && props.data.status.loading !== 0 && (
              <ProgressCircle
                animate={props.data.status.loading}
                className='rce-mbox-video--video__block-item'
                progressOptions={progressOptions}
              />
            )}
          </div>
        )}
      </div>
      {props?.text && <div className='rce-mbox-text'>{props.text}</div>}
    </div>
  )
}

export default VideoMessage
