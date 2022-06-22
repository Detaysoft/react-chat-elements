import React, { useEffect } from 'react'
import './Input.css'
import classNames from 'classnames'
import { IInputProps } from '../type'

const Input: React.FC<IInputProps> = ({
  type = "text",
  placeholder = "",
  defaultValue = "",
  onChange = null,
  rightButtons = null,
  leftButtons = null,
  multiline = false,
  minHeight = 25,
  maxHeight = 200,
  autoHeight = true,
  inputStyle = null,
  referance = null,
  maxlength = null,
  onMaxLengthExceed = null,
  autofocus = false,
  ...props
}) => {
  useEffect(() => {
    if (autofocus === true) referance?.referance.current?.focus()

    if (props.clear instanceof Function) {
      props.clear(clear)
    }
  }, [])

  const onChangeEvent = (e: any) => {
    if (maxlength && (e.target.value || '').length > maxlength) {
      if (onMaxLengthExceed instanceof Function) onMaxLengthExceed()

      if (referance?.referance.current?.value == (e.target.value || '').substring(0, maxlength)) return
    }

    if (onChange instanceof Function) onChange(e)

    if (multiline === true) {
      if (autoHeight === true) {
        if (e.target.style.height !== minHeight + 'px') {
          e.target.style.height = minHeight + 'px'
        }

        let height
        if (e.target.scrollHeight <= maxHeight) height = e.target.scrollHeight + 'px'
        else height = maxHeight + 'px'

        if (e.target.style.height !== height) {
          e.target.style.height = height
        }
      }
    }
  }

  const clear = () => {
    var _event = {
      FAKE_EVENT: true,
      target: referance?.current,
    }

    if (referance?.current?.value) {
      referance.current.value = ''
    }

    onChangeEvent(_event)
  }

  return (
    <div className={classNames('rce-container-input', props.className)}>
      {leftButtons && <div className='rce-input-buttons'>{leftButtons}</div>}
      {multiline === false ? (
        <input
          ref={referance}
          type={type}
          className={classNames('rce-input')}
          placeholder={placeholder}
          defaultValue={defaultValue}
          style={inputStyle}
          onChange={onChangeEvent}
          onCopy={props.onCopy}
          onCut={props.onCut}
          onPaste={props.onPaste}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onSelect={props.onSelect}
          onSubmit={props.onSubmit}
          onReset={props.onReset}
          onKeyDown={props.onKeyDown}
          onKeyPress={props.onKeyPress}
          onKeyUp={props.onKeyUp}
        />
      ) : (
        <textarea
          ref={referance}
          className={classNames('rce-input', 'rce-input-textarea')}
          placeholder={placeholder}
          defaultValue={defaultValue}
          style={inputStyle}
          onChange={onChangeEvent}
          onCopy={props.onCopy}
          onCut={props.onCut}
          onPaste={props.onPaste}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onSelect={props.onSelect}
          onSubmit={props.onSubmit}
          onReset={props.onReset}
          onKeyDown={props.onKeyDown}
          onKeyPress={props.onKeyPress}
          onKeyUp={props.onKeyUp}
        ></textarea>
      )}
      {rightButtons && <div className='rce-input-buttons'>{rightButtons}</div>}
    </div>
  )
}

export default Input
