import React from 'react'

import './PhotoMessage.css'

import { FaCloudDownloadAlt, FaExclamationTriangle } from 'react-icons/fa'
import ProgressCircle from '../Circle/Circle'
import { IPhotoMessageProps, IProgressOptions } from '../type'

const PhotoMessage: React.FC<IPhotoMessageProps> = props => {
  var progressOptions = {
    strokeWidth: 2.3,
    color: '#efe',
    trailColor: '#aaa',
    trailWidth: 1,
    step: (
      state: IProgressOptions,
      circle: {
        path: { setAttribute: (arg0: string, arg1: any) => void }
        value: () => number
        setText: (arg0: string | number) => void
      }
    ) => {
      circle.path.setAttribute('trail', state?.state?.color)
      circle.path.setAttribute('trailwidth-width', state?.state?.width)

      var value = Math.round(circle.value() * 100)
      if (value === 0) circle.setText('')
      else circle.setText(value)
    },
  }

  const error = props.message?.status && props.message?.status.error === true

  return (
    <div className='rce-mbox-photo'>
      <div
        className='rce-mbox-photo--img'
        style={{
          ...(props.message?.width &&
            props.message?.height && {
              width: props.message.width,
              height: props.message.height,
            }),
        }}
      >
        <img
          src={props.message?.uri}
          alt={props.message?.alt}
          onClick={props.onOpen}
          onLoad={props.onLoad}
          onError={props.onPhotoError}
        />
        {error && (
          <div className='rce-mbox-photo--img__block'>
            <span className='rce-mbox-photo--img__block-item rce-mbox-photo--error'>
              <FaExclamationTriangle />
            </span>
          </div>
        )}
        {!error && props.message?.status && !props.message?.status?.download && (
          <div className='rce-mbox-photo--img__block'>
            {!props.message.status.click && (
              <button onClick={props.onDownload} className='rce-mbox-photo--img__block-item rce-mbox-photo--download'>
                <FaCloudDownloadAlt />
              </button>
            )}
            {typeof props.message.status.loading === 'number' && props.message.status.loading !== 0 && (
              <ProgressCircle
                animate={props.message.status.loading}
                progressOptions={progressOptions}
                className='rce-mbox-photo--img__block-item'
              />
            )}
          </div>
        )}
      </div>
      {props.message?.text && <div className='rce-mbox-text'>{props.message.text}</div>}
    </div>
  )
}

export default PhotoMessage
