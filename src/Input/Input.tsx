import React, { useEffect } from 'react'
import './Input.css'
import classNames from 'classnames'
import { IInputProps } from '../type'

const Input: React.FC<IInputProps> = ({
  type = 'text',
  multiline = false,
  minHeight = 25,
  maxHeight = 200,
  autoHeight = true,
  autofocus = false,
  ...props
}) => {
  useEffect(() => {
    if (autofocus === true) props.referance?.current?.focus()

    if (props.clear instanceof Function) {
      props.clear(clear)
    }
  }, [])

  const onChangeEvent = (e: any) => {
    if (props.maxlength && (e.target.value || '').length > props.maxlength) {
      if (props.onMaxLengthExceed instanceof Function) props.onMaxLengthExceed()

      if (props.referance?.current?.value == (e.target.value || '').substring(0, props.maxlength)) return
    }

    if (props.onChange instanceof Function) props.onChange(e)

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
      target: props.referance?.current,
    }

    if (props.referance?.current?.value) {
      props.referance.current.value = ''
    }

    onChangeEvent(_event)
  }

  return (
    <div className={classNames('rce-container-input', props.className)}>
      {props.leftButtons && <div className='rce-input-buttons'>{props.leftButtons}</div>}
      {multiline === false ? (
        <input
          ref={props.referance}
          type={type}
          className={classNames('rce-input')}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          style={props.inputStyle}
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
          value={props.value}
        />
      ) : (
        <textarea
          ref={props.referance}
          className={classNames('rce-input', 'rce-input-textarea')}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          style={props.inputStyle}
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
        >
          {props.defaultValue ? props?.value ?? null : null}
        </textarea>
      )}
      {props.rightButtons && <div className='rce-input-buttons'>{props.rightButtons}</div>}
    </div>
  )
}

export default Input
