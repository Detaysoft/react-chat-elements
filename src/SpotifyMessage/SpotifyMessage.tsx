import React from 'react';
import './SpotifyMessage.css';

const SpotifyMessage: React.FC<ISpotifyMessageProps> = (props) => {

  const toUrl = () => {
    var formBody: any = [];
    var data = {
      uri: props.data.uri,
      theme: props.data.theme,
      view: props.data.view,
    };
    for (var property in data) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    return formBody;
  }

  if (!props.data.uri)
    return null;
  return (
    <div className='rce-mbox-spotify'>
      <iframe
        src={'https://open.spotify.com/embed?' + toUrl()}
        width={props.data.width}
        height={props.data.height}
        frameBorder='0'
        allowTransparency={true} ></iframe>
    </div>
  );
}

export default SpotifyMessage;
