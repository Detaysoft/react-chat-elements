import React, { Component } from 'react';
import './SystemMessage.css';

export class SystemMessage extends Component {
	render() {
		return (
			<div className="rce-container-smsg">
				<div
					className='rce-smsg'>
					<div className="rce-smsg-text">
						{this.props.text}
					</div>
				</div>
			</div>
		);
	}
}

export default SystemMessage;