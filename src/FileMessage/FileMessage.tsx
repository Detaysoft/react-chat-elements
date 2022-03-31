import './FileMessage.css';
import { FaFile, FaCloudDownloadAlt, FaExclamationTriangle } from 'react-icons/fa';
import ProgressCircle from '../Circle/Circle';
import React from 'react';

interface IFileMessageProps {
  onDownload?: Function;
  onOpen?: Function;
  text?: string;
  data?: IFileMessageData;
}

interface IFileMessageData extends IMessage {
  status?: IFileMessageDataStatus;
  size?: string;
}

interface IFileMessageDataStatus {
  error?: boolean;
  download?: Function;
  click?: Function;
  loading?: number;
}

const FileMessage: React.FC<IFileMessageProps> = (props) => {
  var progressOptions = {
    strokeWidth: 5,
    color: '#333',
    trailColor: '#aaa',
    trailWidth: 5,
    step: (state : {
        color?: string;
        width?: number;
      }, circle : {
        path: {
          setAttribute: Function;
        };
        value: Function;
        setText: Function;
      }) => {
      circle.path.setAttribute('trail', state.color);
      circle.path.setAttribute('trailwidth-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0)
        circle.setText('');
      else
        circle.setText(value);
    }
  };

  const error = props?.data?.status && props.data.status.error === true;

  const onClick = (e : React.MouseEvent) => {
    if (!props?.data?.status)
      return;

    if (!props.data.status.download && props.onDownload instanceof Function)
      props.onDownload(e);
    else if (props.data.status.download && props.onOpen instanceof Function)
      props.onOpen(e);
  }

  return (
    <div className='rce-mbox-file'>
      <button onClick={onClick}>
        <div className='rce-mbox-file--icon'>
          <FaFile
            color='#aaa'/>
          <div className='rce-mbox-file--size'>
            {props?.data?.size}
          </div>
        </div>
        <div className='rce-mbox-file--text'>
          {props.text}
        </div>
        <div className='rce-mbox-file--buttons'>
          {
            error &&
            <span className='rce-error-button'>
              <FaExclamationTriangle
                  color='#ff3d3d'/>
            </span>
          }
          {
            !error &&
            props?.data?.status &&
            !props?.data?.status.download &&
            !props.data.status.click &&
            <FaCloudDownloadAlt
              color='#aaa'/>
          }
          {
            !error &&
            props?.data?.status &&
            typeof props.data.status.loading === 'number' &&
            props.data.status.loading !== 0 &&
            <ProgressCircle
              animate={props.data.status.loading}
              className='rce-mbox-file--loading'
              progressOptions={progressOptions} />
          }
        </div>
      </button>
    </div>
  );
}

export default FileMessage;
