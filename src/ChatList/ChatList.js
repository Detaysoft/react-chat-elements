import React, { Component } from 'react';
import './ChatList.css';

import ChatItem from '../ChatItem/ChatItem';

export class ChatList extends Component {
	render() {
		return (
			<div className="rce-container-clist">
				{
					this.props.dataSource.map((x, i) => (
						<ChatItem
							key={i}
							avatar={x.avatar}
							alt={x.alt}
							title={x.title}
							date={x.date}
							subtitle={x.subtitle}
							unread={x.unread}/>
					))
				}
			</div>
		);
	}
}

ChatList.defaultProps = {
	dataSource: [],
};

export default ChatList;