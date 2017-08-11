import React, { Component } from 'react';
import {
	MessageBox,
	ChatItem,
	ChatList,
	SystemMessage,
	MessageList,
} from '../src';

const loremIpsum = require('lorem-ipsum');

export class App extends Component {

	token() {
		return (parseInt(Math.random() * 10 % 3));
	}

	random(type) {
		switch (type) {
			case 'message':
				var type = this.token();
				if (type < 1)
					type = 'photo';
				else if (type > 1)
					type = 'file';
				else
					type = 'text';

				return {
					position: (this.token() >= 1 ? 'right' : 'left'),
					type: type,
					text: loremIpsum({count: 1, units: 'sentences'}),
					data: {
						uri: 'https://user-images.githubusercontent.com/15075759/29005175-1d023bea-7ade-11e7-86d5-21f87225ef56.png',
						status: {
							click: false,
							loading: 0,
						}
					},
					date: new Date(),
				};
			case 'chat':
				return {
					avatar: 'https://avatars0.githubusercontent.com/u/15075759',
					alt: loremIpsum({count: 2, units: 'words'}),
					title: loremIpsum({count: 2, units: 'words'}),
					date: new Date(),
					subtitle: loremIpsum({count: 1, units: 'sentences'}),
					unread: parseInt(Math.random() * 10 % 3),
				};
		}
	}

	test(arr) {
	}

	render() {
		var arr = [];
		for (var i = 0; i < 50; i++)
			arr.push(i);
		
		var messageSource = arr.map(x => this.random('message'));
		var chatSource = arr.map(x => this.random('chat'));

		return (
			<div className='container'>
				<ChatList
					className='chat-list'
					dataSource={chatSource}/>
				<MessageList
					className='message-list'
					dataSource={messageSource}/>

				{
					// arr.map((x, i) => {
						// var tmp = this.random();

						// return <ChatItem
						// 	key={i}
						// 	title={tmp.title}
						// 	subtitle={tmp.subtitle}
						// 	avatar={tmp.avatar}
						// 	unread={tmp.unread}
						// 	date={tmp.date}/>;

						// return <MessageBox
						// 	key={i}
						// 	type={tmp.type}
						// 	text={tmp.text}
						// 	data={tmp.data}
						// 	position={tmp.position}/>

						// return <SystemMessage
						// 	text={'10.10.1996'}/>
					// })
				}
			</div>
		);
	}
}
export default App;
