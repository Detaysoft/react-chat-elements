import React from 'react';
import './Popup.css';

import Button from '../Button/Button';

const classNames = require('classnames');

function Popup(props) {
  if (props.show === true)
  return (
    <div className={classNames('rce-popup-wrapper', props.type, props.className)}>
      <div className='rce-popup'>
        {
          props.renderHeader ?
            <div className='rce-popup-header'>
              {props.renderHeader()}
            </div>
          :
          <div className='rce-popup-header'>
            <span>{props.header}</span>
            {
              props.header &&
              props.headerButtons.map((x, i) => (
                <Button
                  key={i}
                  {...x}/>
              ))
            }
          </div>
        }
        <div className='rce-popup-content' style={{color: props.color}}>
          {
            props.renderContent ?
              props.renderContent()
            :
            props.text
          }
        </div>
        <div className='rce-popup-footer'>
          {
            props.renderFooter ?
              props.renderFooter()
            :
            props.footerButtons.map((x, i) => (
              <Button
                key={i}
                {...x}/>
            ))
          }
        </div>
      </div>
    </div>
  );
  return null;
}

Popup.defaultProps = {
  show: false,
  header: null,
  text: null,
  headerButtons: [],
  footerButtons: [],
  renderHeader: null,
  renderContent: null,
  renderFooter: null,
  color: '#333',
};

export default Popup;
