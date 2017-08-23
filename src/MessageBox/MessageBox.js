import React, { Component } from 'react';
import './MessageBox.css';

import PhotoMessage from '../PhotoMessage/PhotoMessage';
import FileMessage from '../FileMessage/FileMessage';

const classNames = require('classnames');

export class MessageBox extends Component {
	render() {
		var positionCls = classNames('rce-mbox', { 'rce-mbox-right' : this.props.position === 'right' });

		return (
			<div className="rce-container-mbox" onClick={this.props.onClick}>
				<div
					className={positionCls}>
					{
						this.props.type === 'text' &&
						<div className="rce-mbox-text">
							{this.props.text}
						</div>
					}

					{
						this.props.type === 'photo' &&
						<PhotoMessage
							data={this.props.data}
							text={this.props.text}/>
					}
					{
						this.props.type === 'file' &&
						<FileMessage
							data={this.props.data}
							text={this.props.text}/>
					}

					<div className="rce-mbox-time rce-mbox-right">
						12:30
					</div>

					{
						this.props.position === 'right' ?
							<svg className="rce-mbox-right-notch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
								<path d="M0 0v20L20 0"/>
							</svg>
						:
							<div>
								<svg className="rce-mbox-left-notch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<defs>
										<filter id="filter1" x="0" y="0">
											<feOffset result="offOut" in="SourceAlpha" dx="-2" dy="-5" />
											<feGaussianBlur result="blurOut" in="offOut" stdDeviation="3" />
											<feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
										</filter>
									</defs>
									<path d="M20 0v20L0 0" filter="url(#filter1)"/>
								</svg>
							</div>
					}
				</div>
			</div>
		);
	}
}

MessageBox.defaultProps = {
	position: 'left',
	type: 'text',
	text: '',
	data: {},
	onClick: null,
};


export default MessageBox;
