import React, { Component } from 'react';
import './MessageBox.css';

const classNames = require('classnames');

export class MessageBox extends Component {
	render() {
		var positionCls = classNames('rce-mbox', { 'rce-mbox-right' : this.props.position === 'right' });
		
		return (
			<div className="rce-container-mbox">
				<div
					className={positionCls}>
					<div className="rce-mbox-text">
						{this.props.text}
					</div>
					<div className="rce-mbox-time rce-mbox-right">
						12:30
					</div>
					<svg className="rce-mbox-right-notch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M0 0v20L20 0"/>
					</svg>
				</div>
			</div>
		);
	}
}

export default MessageBox;