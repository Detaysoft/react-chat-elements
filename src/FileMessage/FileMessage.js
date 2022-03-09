import React from 'react';
import './FileMessage.css';

import FaCloudDownload from 'react-icons/lib/fa/cloud-download';
import FaError from 'react-icons/lib/fa/exclamation-triangle';
import FaFile from 'react-icons/lib/fa/file';

const ProgressBar = require('react-progress-bar.js');
const Circle = ProgressBar.Circle;
function FileMessage(props) {
  var progressOptions = {
    strokeWidth: 5,
    color: '#333',
    trailColor: '#aaa',
    trailWidth: 5,
    step: (state, circle) => {
      circle.path.setAttribute('trail', state.color);
      circle.path.setAttribute('trailwidth-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0)
        circle.setText('');
      else
        circle.setText(value);
    }
  };

  const error = props.data.status && props.data.status.error === true;

  const onClick = (e) => {
    if (!props.data.status)
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
            {props.data.size}
          </div>
        </div>
        <div className='rce-mbox-file--text'>
          {props.text}
        </div>
        <div className='rce-mbox-file--buttons'>
          {
            error &&
            <span className='rce-error-button'>
              <FaError
                  color='#ff3d3d'/>
            </span>
          }
          {
            !error &&
            props.data.status &&
            !props.data.status.download &&
            !props.data.status.click &&
            <FaCloudDownload
              color='#aaa'/>
          }
          {
            !error &&
            props.data.status &&
            typeof props.data.status.loading === 'number' &&
            props.data.status.loading !== 0 &&
            <Circle
              progress={props.data.status.loading}
              options={progressOptions}
              initialAnimate={true}
              containerClassName={'rce-mbox-file--loading'} />
          }
        </div>
      </button>
    </div>
  );
}

FileMessage.defaultProps = {
  text: '',
  data: {},
  onClick: null,
  onDownload: null,
  onOpen: null,
};

export default FileMessage;
