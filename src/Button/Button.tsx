import './Button.css'
import classNames from 'classnames'
import { IButtonProps } from '../type'

const Button: React.FC<IButtonProps> = ({
  text = '',
  disabled = false,
  type = null,
  icon = null,
  backgroundColor = '#3979aa',
  color = 'white',
  className = null,
  buttonRef = null,
  title = null,
  ...props
}) => {
  return (
    <button
      ref={buttonRef}
      title={title}
      className={classNames('rce-button', type, className)}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        borderColor: backgroundColor,
      }}
      disabled={disabled}
      onClick={props.onClick}
    >
      {icon ? (
        <span className='rce-button-icon--container'>
          {(icon.float === 'right' || !icon.float) && <span>{text}</span>}

          <span style={{ float: icon.float, fontSize: icon.size || 12 }} className='rce-button-icon'>
            {icon.component}
          </span>

          {icon.float === 'left' && <span>{text}</span>}
        </span>
      ) : (
        <span>{text}</span>
      )}
    </button>
  )
}
export default Button
