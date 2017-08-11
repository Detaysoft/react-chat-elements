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
	random() {
		return {
			position: (parseInt(Math.random() * 10 % 2) && 'right'),
			type: (parseInt(Math.random() * 10 % 2) ? 'file' : 'photo'),
			text: loremIpsum({count: 1, units: 'sentences'}),
			data: {
				uri: 'https://user-images.githubusercontent.com/15075759/29005175-1d023bea-7ade-11e7-86d5-21f87225ef56.png',
				status: {
					click: true,
					loading: 1,
				}
			},
			date: new Date(),
		};
	}

	render() {
		var arr = [1,2,3,4,5,6,7,8,9,0];
		var dataSource = arr.map(x => this.random());

		return (
			<div>
				{
					<MessageList
						dataSource={dataSource}/>
				}
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
