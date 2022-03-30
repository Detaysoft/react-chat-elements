import React from 'react'
import './AudioMessage.css';

const AudioMessage: React.FC<IAudioMessageProps> = (props) => {

  return (
    <div className={'rce-mbox-audio'} style={props.customStyle}>
      <audio {...props.audioProps}>
        <source src={props.message.audioURL} type={props.message.audioType || 'audio/mp3'}/>
        Your browser does not support the audio element.
      </audio>

      {
        props.message.text &&
        <div className='rce-mbox-text'>
          {props.message.text}
        </div>
      }
    </div>
  );
}

export default AudioMessage;