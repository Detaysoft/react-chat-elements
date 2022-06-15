import './LocationMessage.css'
import classNames from 'classnames'

const STATIC_URL =
  'https://maps.googleapis.com/maps/api/staticmap?markers=color:MARKER_COLOR|LATITUDE,LONGITUDE&zoom=ZOOM&size=270x200&scale=2&key=KEY'
const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=LATITUDE,LONGITUDE&zoom=ZOOM'

const LocationMessage: React.FC<ILocationMessageProps> = props => {
  const message = props.message

  const buildURL = (url: string) => {
    var center = props.message

    return url
      .replace(/LATITUDE/g, center?.latitude)
      .replace(/LONGITUDE/g, center?.longitude)
      .replace('MARKER_COLOR', props?.markerColor)
      .replace('ZOOM', props?.zoom)
      .replace('KEY', props?.apiKey)
  }
  const className = () => {
    var _className = classNames('rce-mbox-location', props.className)

    if (props.text) {
      _className = classNames(_className, 'rce-mbox-location-has-text')
    }

    return _className
  }

  return (
    <div className='rce-container-lmsg'>
      <a
        onClick={props.onOpen}
        target={props.target}
        href={props.href || props.src || buildURL(message.mapURL || MAP_URL)}
        className={className()}
      >
        <img
          onError={props.onError}
          className='rce-mbox-location-img'
          src={props.src || buildURL(message.staticURL || STATIC_URL)}
        />
      </a>
      {props.text && <div className='rce-mbox-text rce-mbox-location-text'>{props.text}</div>}
    </div>
  )
}

export default LocationMessage
