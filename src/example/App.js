import React, { Component } from 'react';
import MessageBox from '../MessageBox/MessageBox';
import ChatItem from '../ChatItem/ChatItem';

const loremIpsum = require('lorem-ipsum');

export class App extends Component {
	random() {
		return {
			unread: parseInt(Math.random() * 10 % 2),
			title: loremIpsum({count: 1, units: 'sentences'}),
			avatar: 'https://avatars0.githubusercontent.com/u/15075759?v=4',
			subtitle: loremIpsum({count: 1, units: 'sentences'}),
			date: new Date().setDate(1),
		};
	}

	render() {
		var arr = [1,2,3,4,5,6,7,8,9,0];
		return (
			<div>
				{
					arr.map((x, i) => {
						var tmp = this.random();
						return <ChatItem
							key={i}
							title={tmp.title}
							subtitle={tmp.subtitle}
							avatar={tmp.avatar}
							unread={tmp.unread}
							date={tmp.date}/>;

						// return <MessageBox
						// 	key={i}
						// 	type={tmp.type}
						// 	text={tmp.text}
						// 	data={tmp.data}
						// 	position={tmp.position}/>;
					})
				}
			</div>
		);
	}
}
export default App;
