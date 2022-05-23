import React from 'react';
import './SpotifyMessage.css';

const SpotifyMessage: React.FC<ISpotifyMessageProps> = (props) => {

  const toUrl = () => {
    var formBody: any = [];
    for (var property in props.message) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(props.message[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join('&');
    return formBody;
  }

  if (!props.message?.uri)
    return null;
  return (
    <div className='rce-mbox-spotify'>
      <iframe
        src={'https://open.spotify.com/embed?' + toUrl()}
        width={props.message.width}
        height={props.message.height}
        frameBorder='0'
        allowTransparency={true} ></iframe>
    </div>
  );
}

export default SpotifyMessage;
