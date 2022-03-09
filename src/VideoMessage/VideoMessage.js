import React, { Component } from 'react';

import './VideoMessage.css';

import FaCloudDownload from 'react-icons/lib/fa/cloud-download';
import FaError from 'react-icons/lib/fa/exclamation-triangle';

import classNames from 'classnames';

const ProgressBar = require('react-progress-bar.js');
const Circle = ProgressBar.Circle;

function VideoMessage(props) {
  var progressOptions = {
    strokeWidth: 2.3,
    color: '#efe',
    trailColor: '#aaa',
    trailWidth: 1,
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
  const downloaded = props.data.status && props.data.status.download;

  return (
    <div
      className={classNames('rce-mbox-video', {
          'padding-time': !props.text,
      })}>
      <div
        className='rce-mbox-video--video'
        style={props.data.width && props.data.height && {
          width: props.data.width,
          height: props.data.height,
        }}>

        {
          !downloaded &&
          <img
            src={props.data.uri}
            alt={props.data.alt}
            onClick={props.onOpen}
            onLoad={props.onLoad}
            onError={props.onPhotoError}/>
        }

        {
          downloaded &&
          <video controls>
            <source src={props.data.videoURL} type='video/mp4'/>
            Your browser does not support HTML video.
          </video>
        }

        {
          error &&
          <div className='rce-mbox-video--video__block'>
            <span
              className='rce-mbox-video--video__block-item rce-mbox-video--error'>
              <FaError/>
            </span>
          </div>
        }
        {
          !error &&
          props.data.status &&
          !downloaded &&
          <div className='rce-mbox-video--video__block'>
            {
              !props.data.status.click &&
              <button
                onClick={props.onDownload}
                className='rce-mbox-video--video__block-item rce-mbox-video--download'>
                <FaCloudDownload/>
              </button>
            }
            {
              typeof props.data.status.loading === 'number' &&
              props.data.status.loading !== 0 &&
              <Circle
                progress={props.data.status.loading}
                options={progressOptions}
                initialAnimate={true}
                containerClassName={'rce-mbox-video--video__block-item'} />
            }
          </div>
        }
      </div>
      {
        props.text &&
        <div className='rce-mbox-text'>
          {props.text}
        </div>
      }
    </div>
  );
}

VideoMessage.defaultProps = {
  text: '',
  data: {},
  onDownload: null,
  onOpen: null,
  onLoad: null,
  onPhotoError: null,
};

export default VideoMessage;
