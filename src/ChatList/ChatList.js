import React, { Component } from 'react';
import './ChatList.css';

import ChatItem from '../ChatItem/ChatItem';

const classNames = require('classnames');

export class ChatList extends Component {

	onClick(item, i) {
		if (this.props.onClick instanceof Function)
			this.props.onClick(item, i);
	}

	render() {
		return (
			<div className={classNames(['rce-container-clist', this.props.className])}>
				{
					this.props.dataSource.map((x, i) => (
						<ChatItem
							id={x.id || i}
							key={i}
							avatar={x.avatar}
							alt={x.alt}
							title={x.title}
							date={x.date}
							subtitle={x.subtitle}
							onClick={() => this.onClick(x, i)}
							unread={x.unread}/>
					))
				}
			</div>
		);
	}
}

ChatList.defaultProps = {
	dataSource: [],
	onClick: null,
};

export default ChatList;