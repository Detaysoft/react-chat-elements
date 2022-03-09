import React, { useEffect, useRef } from 'react';
import './Input.css';

const classNames = require('classnames');

function Input(props) {
  useEffect(() => {
    if (props.autofocus === true)
      props.referance.current.focus();

    if (props.clear instanceof Function) {
      props.clear(clear);
    }
  }, []);

  const onChange = (e) => {
    if (props.maxlength && (e.target.value || '').length > props.maxlength) {
      if (props.onMaxLengthExceed instanceof Function)
        props.onMaxLengthExceed();

      props.referance.current.value = (e.target.value || '').substring(0, props.maxlength);
      return;
    }

    if (props.onChange instanceof Function)
      props.onChange(e);

    if (props.multiline === true) {
      if (props.autoHeight === true) {
        if (e.target.style.height !== props.minHeight + 'px') {
          e.target.style.height = props.minHeight + 'px';
        }

        let height;
        if (e.target.scrollHeight <= props.maxHeight)
          height = e.target.scrollHeight + 'px';
        else
          height = props.maxHeight + 'px';

        if (e.target.style.height !== height) {
          e.target.style.height = height;
        }
      }
    }
  }

  const clear = () => {
    var _event = {
      FAKE_EVENT: true,
      target: props.referance.current,
    };

    if (props.referance.current.value) {
       props.referance.current.value = '';
    }

    onChange(_event);
  }

  return (
    <div className={classNames('rce-container-input', props.className)}>
      {
        props.leftButtons &&
        <div className='rce-input-buttons'>
            {props.leftButtons}
        </div>
      }
      {
        props.multiline === false ?
        <input
          ref={props.referance}
          type={props.type}
          className={classNames('rce-input')}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          style={props.inputStyle}
          onChange={onChange}
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
          onKeyUp={props.onKeyUp}/>
        :
        <textarea
          ref={props.referance}
          type={props.type}
          className={classNames('rce-input', 'rce-input-textarea')}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          style={props.inputStyle}
          onChange={onChange}
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
          onKeyUp={props.onKeyUp}></textarea>
      }
      {
        props.rightButtons &&
        <div className='rce-input-buttons'>
          {props.rightButtons}
        </div>
      }
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  defaultValue: '',
  onChange: null,
  rightButtons: null,
  leftButtons: null,
  multiline: false,
  minHeight: 25,
  maxHeight: 200,
  autoHeight: true,
  inputStyle: null,
  referance: null,
  maxlength: null,
  onMaxLengthExceed: null,
  autofocus: false,
};

export default Input;
