import React from 'react';

import './AudioMessage.css';

function AudioMessage({ data, text }) {
  const audioURL = data.audioURL;
  const controlsList = data.controlsList;

  return (
    <div className={'rce-mbox-audio'}>
      <audio controls controlsList={controlsList ? controlsList : 'nodownload'}>
        <source src={audioURL} type='audio/mp3'/>
        Your browser does not support the audio element.
      </audio>

      {
        text &&
        <div className='rce-mbox-text'>
          {text}
        </div>
      }
    </div>
  );
}

AudioMessage.defaultProps = {
  data: {},
};

export default AudioMessage;