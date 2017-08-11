import React, { Component } from 'react';
import './MessageList.css';

import MessageBox from '../MessageBox/MessageBox';

const classNames = require('classnames');

export class MessageList extends Component {
	render() {
		return (
			<div
				className={classNames(['rce-container-mlist', this.props.className])}>
				{
					this.props.dataSource.map((x, i) => (
						<MessageBox
							key={i}
							position={x.position}
							type={x.type}
							text={x.text}
							data={x.data}/>
					))
				}
			</div>
		);
	}
}

MessageList.defaultProps = {
	dataSource: [],
};

export default MessageList;