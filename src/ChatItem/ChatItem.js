import React, { Component } from 'react';
import './ChatItem.css';

import Avatar from '../Avatar/Avatar';

const moment = require('moment')

export class ChatItem extends Component {
	render() {
		return (
			<div className="rce-container-citem">
				<div className="rce-citem">
					<div className="rce-citem-avatar">
						<Avatar src={this.props.avatar} alt={this.props.alt} size="large" type="circle"/>
					</div>

					<div className="rce-citem-body">
						<div className="rce-citem-body--top">
							<div className="rce-citem-body--top-title">
								{this.props.title}
							</div>
							<div className="rce-citem-body--top-time">
								{moment(this.props.date).fromNow()}
							</div>
						</div>

						<div className="rce-citem-body--bottom">
							<div className="rce-citem-body--bottom-title">
								{this.props.subtitle}
							</div>
							<div className="rce-citem-body--bottom-status">
								{
									this.props.unread > 0 &&
									<span>{this.props.unread}</span>
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ChatItem.defaultProps = {
	avatar: '',
	alt: '',
	title: '',
	subtitle: '',
	date: new Date(),
	unread: 0,
}

export default ChatItem;