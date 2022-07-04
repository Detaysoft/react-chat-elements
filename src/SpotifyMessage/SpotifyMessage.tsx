import React from 'react'
import { ISpotifyMessageProps } from '../type'
import './SpotifyMessage.css'

const SpotifyMessage: React.FC<ISpotifyMessageProps> = ({
  width = 300,
  height = 380,
  ...props
}) => {
  const toUrl = (): string => {
    var formBody: string[] | string = []
    for (var property in props) {
      var encodedKey = encodeURIComponent(property)
      // @ts-ignore
      var encodedValue = encodeURIComponent(props[property])
      formBody.push(encodedKey + '=' + encodedValue)
    }

    return formBody.join('&')
  }

  if (!props.uri) return null
  return (
    <div className='rce-mbox-spotify'>
      <iframe
        src={'https://open.spotify.com/embed?' + toUrl()}
        width={width}
        height={height}
        frameBorder='0'
        allowTransparency={true}
      ></iframe>
    </div>
  )
}

export default SpotifyMessage
