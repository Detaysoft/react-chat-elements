import React from 'react';
import './SpotifyMessage.css';


interface ISpotifyMessage extends IMessage {
  uri?: string;
  theme?: string;
  view?: string;
  width?: number;
  height?: number;
}

interface ISpotifyMessageProps {
  message?: ISpotifyMessage;
}

const SpotifyMessage: React.FC<ISpotifyMessageProps> = (props) => {

  const toUrl = () => {
    var formBody: any = [];
    var data = {
      uri: props.message?.uri,
      theme: props.message?.theme,
      view: props.message?.view,
    };
    for (var property in data) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
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

// SpotifyMessage.defaultProps = {
//   uri: '',
//   theme: 'black',
//   view: 'list',
//   width: 300,
//   height: 380,
// }

export default SpotifyMessage;
