import React from 'react'
import { ISpotifyMessageProps } from '../type'
import './SpotifyMessage.css'

const SpotifyMessage: React.FC<ISpotifyMessageProps> = props => {
  const toUrl = (): string => {
    var formBody: string[] | string = []
    for (var property in props.message) {
      var encodedKey = encodeURIComponent(property)
      // @ts-ignore
      var encodedValue = encodeURIComponent(props.message[property])
      formBody.push(encodedKey + '=' + encodedValue)
    }

    return formBody.join('&')
  }

  if (!props.message.uri) return null
  return (
    <div className='rce-mbox-spotify'>
      <iframe
        src={'https://open.spotify.com/embed?' + toUrl()}
        width={props.message.width}
        height={props.message.height}
        frameBorder='0'
        allowTransparency={true}
      ></iframe>
    </div>
  )
}

export default SpotifyMessage
