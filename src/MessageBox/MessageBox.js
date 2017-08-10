import React, { Component } from 'react';
import './MessageBox.css';

import FaCloudDownload from 'react-icons/lib/fa/cloud-download';
import FaFile from 'react-icons/lib/fa/file';

const classNames = require('classnames');
const ProgressBar = require('react-progressbar.js');
const Circle = ProgressBar.Circle;

export class MessageBox extends Component {
	render() {
		var positionCls = classNames('rce-mbox', { 'rce-mbox-right' : this.props.position === 'right' });
		var progressOptions = {
			strokeWidth: 2.3,
			color: '#efe',
			trailColor: '#aaa',
			trailWidth: 1,
			step: (state, circle) => {
				circle.path.setAttribute('trail', state.color);
				circle.path.setAttribute('trailwidth-width', state.width);

				var value = Math.round(circle.value() * 100);
				if (value === 0)
					circle.setText('');
				else
					circle.setText(value);
			}
		};
		var fileProgressOptions = Object.assign({}, progressOptions);
		fileProgressOptions.strokeWidth = 5;
		fileProgressOptions.color = '#333';
		fileProgressOptions.trailWidth = 5;

		return (
			<div className="rce-container-mbox">
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
						<div className="rce-mbox-photo">
							<div className="rce-mbox-photo--img">
								<img src={this.props.data.uri} alt={this.props.data.alt}/>
								{
									this.props.data.status &&
									!this.props.data.status.download &&
									<div className="rce-mbox-photo--img__block">
										{
											!this.props.data.status.click &&
											<button
												className="rce-mbox-photo--img__block-item rce-mbox-photo--download">
												<FaCloudDownload/>
											</button>
										}
										{
											this.props.data.status.loading !== 0 &&
											<Circle
												progress={this.props.data.status.loading}
												options={progressOptions}
												initialAnimate={true}
												containerStyle={{
													width: '100px',
													height: '100px',
												}}
												containerClassName={'rce-mbox-photo--img__block-item'} />
										}
									</div>
								}
							</div>
							<div className="rce-mbox-text">
								{this.props.text}
							</div>
						</div>
					}
					{
						this.props.type === 'file' &&
						<button className="rce-mbox-file">
							<div className="rce-mbox-file--icon">
								<FaFile
									color='#aaa'/>
								<div className="rce-mbox-file--size">
									1024mB
								</div>
							</div>
							<div className="rce-mbox-file--text">
								{this.props.text}
							</div>
							<div className="rce-mbox-file--buttons">
								{
									!this.props.data.status.click &&
									<FaCloudDownload
										color='#aaa'/>
								}
								{
									this.props.data.status.loading !== 0 &&
									<Circle
										progress={this.props.data.status.loading}
										options={fileProgressOptions}
										initialAnimate={true}
										containerStyle={{
											width: '40px',
											height: '40px',
										}}
										containerClassName={'rce-mbox-file--loading'} />
								}
							</div>
						</button>
					}
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