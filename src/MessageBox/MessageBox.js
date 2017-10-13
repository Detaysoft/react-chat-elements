import React, { Component } from 'react';
import './MessageBox.css';

import PhotoMessage from '../PhotoMessage/PhotoMessage';
import FileMessage from '../FileMessage/FileMessage';
import SystemMessage from '../SystemMessage/SystemMessage';
import LocationMessage from '../LocationMessage/LocationMessage';
import SpotifyMessage from '../SpotifyMessage/SpotifyMessage';

import FaForward from 'react-icons/lib/fa/mail-forward';
import FaReply from 'react-icons/lib/fa/mail-reply';

import IoDoneAll from 'react-icons/lib/io/android-done-all';
import MdIosTime from 'react-icons/lib/md/access-time';
import MdCheck from 'react-icons/lib/md/check';

const moment = require('moment');

const classNames = require('classnames');

export class MessageBox extends Component {
	render() {
		var positionCls = classNames('rce-mbox', { 'rce-mbox-right': this.props.position === 'right' });

		return (
			<div
				className={classNames('rce-container-mbox', this.props.className)}
				onClick={this.props.onClick}>
				{
					this.props.type === 'system' ?
						<SystemMessage
							text={this.props.text} />
						:
						<div
							className={positionCls}>
							{
								this.props.forwarded === true &&
								<div
									className={classNames(
										'rce-mbox-forward',
										{ 'rce-mbox-forward-right': this.props.position === 'left' },
										{ 'rce-mbox-forward-left': this.props.position === 'right' }
									)}
									onClick={this.props.onForwardClick}>
										<FaForward />
								</div>
							}

							{
								this.props.title &&
								<p style={this.props.titleColor && { color: this.props.titleColor }} onClick={this.props.onTitleClick} className="rce-mbox-title">{this.props.title}</p>
							}

							{
								this.props.type === 'text' &&
								<div className="rce-mbox-text">
									{this.props.text}
								</div>
							}

							{
								this.props.type === 'location' &&
								<LocationMessage
									onOpen={this.props.onOpen}
									data={this.props.data}
									target={this.props.target}
									href={this.props.href}
									src={this.props.src} />
							}

							{
								this.props.type === 'photo' &&
								<PhotoMessage
									onOpen={this.props.onOpen}
									onDownload={this.props.onDownload}
									data={this.props.data}
									width={this.props.width}
									height={this.props.height}
									text={this.props.text} />
							}

							{
								this.props.type === 'file' &&
								<FileMessage
									onOpen={this.props.onOpen}
									onDownload={this.props.onDownload}
									data={this.props.data}
									text={this.props.text} />
							}

							{
								this.props.type === 'spotify' &&
								<SpotifyMessage
									width={this.props.width}
									height={this.props.height}
									theme={this.props.theme}
									view={this.props.view}
									data={this.props.data}
									uri={this.props.uri || this.props.text} />
							}

							<div className="rce-mbox-time">
								{
									this.props.date &&
									!isNaN(this.props.date) &&
									moment(this.props.date).fromNow()
								}
								{
									this.props.statu &&
									<span className='rce-mbox-statu'>
										{
											this.props.statu === 'waiting' &&
											<MdIosTime />
										}

										{
											this.props.statu === 'sent' &&
											<MdCheck />
										}

										{
											this.props.statu === 'received' &&
											<IoDoneAll />
										}

										{
											this.props.statu === 'read' &&
											<IoDoneAll color='#4FC3F7'/>
										}
									</span>
								}
							</div>

							{
								this.props.position === 'right' ?
									<svg className="rce-mbox-right-notch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
										<path d="M0 0v20L20 0" />
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
											<path d="M20 0v20L0 0" filter="url(#filter1)" />
										</svg>
									</div>
							}
						</div>
				}
			</div>
		);
	}
}

MessageBox.defaultProps = {
	position: 'left',
	type: 'text',
	text: '',
	title: null,
	titleColor: null,
	onTitleClick: null,
	onForwardClick: null,
	date: new Date(),
	data: {},
	onClick: null,
	onOpen: null,
	onDownload: null,
	forwarded: false,
	statu: null,
};


export default MessageBox;
