import React from 'react';

import './PhotoMessage.css';

import { FaCloudDownloadAlt, FaExclamationTriangle } from 'react-icons/fa';
import ProgressCircle from '../Circle/Circle';

interface IProgressOptions {
  state: {
    color: string;
    width: string;
  };
  circle: {
    path:{
      setAttribute: (arg0: string, arg1: string | undefined) => void;
    };
    value: () => number; setText: (arg0: string | number) => void;
  };
}

interface IPhotoMessage extends IMessage {
  status?: {
    error?: boolean;
    loading?: number;
    download?: boolean;
    click?: boolean;
  };
  width?: number;
  height?: number;
  uri?: string;
  alt?: string;
}

interface IPhotoMessageProps {
  message?: IPhotoMessage;
  onDownload?: React.MouseEventHandler;
  onOpen?: React.MouseEventHandler;
  onLoad?: React.ReactEventHandler;
  onPhotoError?: React.ReactEventHandler;
}

const PhotoMessage: React.FC<IPhotoMessageProps> = (props) => {
  var progressOptions = {
    strokeWidth: 2.3,
    color: '#efe',
    trailColor: '#aaa',
    trailWidth: 1,
    step: (state: IProgressOptions, circle: IProgressOptions) => {
      circle.circle.path.setAttribute('trail', state.state.color);
      circle.circle.path.setAttribute('trailwidth-width', state.state.width);

      var value = Math.round(circle.circle.value() * 100);
      if (value === 0)
        circle.circle.setText('');
      else
        circle.circle.setText(value);
    }
  };

  const error = props.message?.status && props.message?.status.error === true;

  return (
    <div className='rce-mbox-photo'>
      <div
        className='rce-mbox-photo--img'
        style={{...props.message?.width && props.message?.height && {
          width: props.message.width,
          height: props.message.height,
        }}}>
        <img
          src={props.message?.uri}
          alt={props.message?.alt}
          onClick={props.onOpen}
          onLoad={props.onLoad}
          onError={props.onPhotoError}/>
        {
          error &&
          <div className='rce-mbox-photo--img__block'>
            <span
              className='rce-mbox-photo--img__block-item rce-mbox-photo--error'>
              <FaExclamationTriangle/>
            </span>
          </div>
        }
        {
          !error &&
          props.message?.status &&
          !props.message?.status?.download &&
          <div className='rce-mbox-photo--img__block'>
            {
              !props.message.status.click &&
              <button
                onClick={props.onDownload}
                className='rce-mbox-photo--img__block-item rce-mbox-photo--download'>
                <FaCloudDownloadAlt />
              </button>
            }
            {
              typeof props.message.status.loading === 'number' &&
              props.message.status.loading !== 0 &&
              <ProgressCircle
                animate={props.message.status.loading}
                progressOptions={progressOptions}
                className='rce-mbox-photo--img__block-item' />
            }
          </div>
        }
      </div>
      {
        props.message?.text &&
        <div className='rce-mbox-text'>
          {props.message.text}
        </div>
      }
    </div>
  );
}

// PhotoMessage.defaultProps = {
//   text: '',
//   data: {},
//   onDownload: null,
//   onOpen: null,
//   onLoad: null,
//   onPhotoError: null,
// };

export default PhotoMessage;
