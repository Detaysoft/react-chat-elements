import './MessageBox.css'
import classNames from 'classnames'

import { IModernMessageBoxProps } from '../../type'

function MessageBox({ messageText } : IModernMessageBoxProps) {
  return (
    <div className={classNames("messageBoxContainer")}>
        <div className={classNames("textMessageContainer")}>
            {messageText}
        </div>
    </div>
  )
}

export default MessageBox