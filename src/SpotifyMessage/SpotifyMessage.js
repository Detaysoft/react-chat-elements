import React from 'react';
import './SpotifyMessage.css';

function SpotifyMessage(props) {

  const toUrl = () => {
    var formBody = [];
    var data = {
      uri: props.uri,
      theme: props.theme,
      view: props.view,
    };
    for (var property in data) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    return formBody;
  }

  if (!props.uri)
    return null;
  return (
    <div className='rce-mbox-spotify'>
      <iframe
        src={'https://open.spotify.com/embed?' + toUrl()}
        width={props.width}
        height={props.height}
        frameBorder='0'
        allowtransparency='true'></iframe>
    </div>
  );
}

SpotifyMessage.defaultProps = {
  uri: '',
  theme: 'black',
  view: 'list',
  width: 300,
  height: 380,
}

export default SpotifyMessage;
