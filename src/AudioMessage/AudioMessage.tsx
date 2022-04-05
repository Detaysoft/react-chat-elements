import React from 'react'
import './AudioMessage.css';

const AudioMessage: React.FC<IAudioMessageProps> = (props) => {

  return (
    <div className={'rce-mbox-audio'} style={props.customStyle}>
      <audio {...props.audioProps}>
        <source src={props.data.audioURL} type={props.data.audioType || 'audio/mp3'}/>
        Your browser does not support the audio element.
      </audio>

      {
        props.data.text &&
        <div className='rce-mbox-text'>
          {props.data.text}
        </div>
      }
    </div>
  );
}

export default AudioMessage;