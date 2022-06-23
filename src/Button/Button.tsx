import './Button.css'
import classNames from 'classnames'
import { IButtonProps } from '../type'

const Button: React.FC<IButtonProps> = ({ disabled = false, backgroundColor = '#3979aa', color = 'white', ...props }) => {
  return (
    <button
      ref={props.buttonRef}
      title={props.title}
      className={classNames('rce-button', props.type, props.className)}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        borderColor: backgroundColor,
      }}
      disabled={disabled}
      onClick={props.onClick}
    >
      {props.icon ? (
        <span className='rce-button-icon--container'>
          {(props.icon.float === 'right' || !props.icon.float) && <span>{props.text}</span>}

          <span style={{ float: props.icon.float, fontSize: props.icon.size || 12 }} className='rce-button-icon'>
            {props.icon.component}
          </span>

          {props.icon.float === 'left' && <span>{props.text}</span>}
        </span>
      ) : (
        <span>{props.text}</span>
      )}
    </button>
  )
}
export default Button
