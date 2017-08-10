import React, { Component } from 'react';
import './FileMessage.css';

import FaCloudDownload from 'react-icons/lib/fa/cloud-download';
import FaFile from 'react-icons/lib/fa/file';

const ProgressBar = require('react-progressbar.js');
const Circle = ProgressBar.Circle;

export class FileMessage extends Component {
	render() {
		var progressOptions = {
			strokeWidth: 5,
			color: '#333',
			trailColor: '#aaa',
			trailWidth: 5,
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
		
		return (
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
						this.props.data.status &&
						!this.props.data.status.click &&
						<FaCloudDownload
							color='#aaa'/>
					}
					{
						this.props.data.status &&
						this.props.data.status.loading !== 0 &&
						<Circle
							progress={this.props.data.status.loading}
							options={progressOptions}
							initialAnimate={true}
							containerStyle={{
								width: '40px',
								height: '40px',
							}}
							containerClassName={'rce-mbox-file--loading'} />
					}
				</div>
			</button>
		);
	}
}

FileMessage.defaultProps = {
	text: '',
	data: {},
};


export default FileMessage;