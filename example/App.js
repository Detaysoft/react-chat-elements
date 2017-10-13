import React, { Component } from 'react';
import {
	MessageBox,
	ChatItem,
	ChatList,
	SystemMessage,
	MessageList,
	Input,
	Button,
	Avatar,
	Navbar,
	SideBar,
	Dropdown,
	Popup,
} from '../src';

import FaSearch from 'react-icons/lib/fa/search';
import FaComments from 'react-icons/lib/fa/comments';
import FaClose from 'react-icons/lib/fa/close';

const loremIpsum = require('lorem-ipsum');
const Identicon = require('identicon.js')

export class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			show: true,
			messageList: [],
		};
	}

	componentWillMount() {
		// setInterval(this.addMessage.bind(this), 3000);
	}

	getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	token() {
		return (parseInt(Math.random() * 10 % 6));
	}

	photo(size) {
		return new Identicon(String(Math.random()) + String(Math.random()), {
			margin: 0,
			size: size || 20,
		}).toString()
	}

	random(type) {
		switch (type) {
			case 'message':
				var type = this.token();
				var statu = 'waiting';
				switch(type) {
					case 0:
						type = 'photo';
						statu = 'sent';
						break;
					case 1:
						type = 'file';
						statu = 'sent';
						break;
					case 2:
						type = 'system';
						statu = 'received';
						break;
					case 3:
						type = 'location';
						break;
					case 4:
						type = 'spotify';
						break;
					default:
						type = 'text';
						statu = 'read';
						break;
				}

				return {
					position: (this.token() >= 1 ? 'right' : 'left'),
					forwarded: true,
					type: type,
					theme: 'white',
					view: 'list',
					title: loremIpsum({ count: 2, units: 'words' }),
					titleColor: this.getRandomColor(),
					text: type === 'spotify' ? 'spotify:user:spotify:playlist:3rgsDhGHZxZ9sB9DQWQfuf' : loremIpsum({ count: 1, units: 'sentences' }),
					data: {
						uri: `data:image/png;base64,${this.photo(150)}`,
						status: {
							click: false,
							loading: 0,
						},
						width: 300,
						height: 300,
						latitude: '37.773972',
						longitude: '-122.431297',
					},
					statu: statu,
					date: new Date(),
				};
			case 'chat':
				return {
					id: String(Math.random()),
					avatar: `data:image/png;base64,${this.photo()}`,
					avatarFlexible: true,
					statusColor: 'lightgreen',
					alt: loremIpsum({ count: 2, units: 'words' }),
					title: loremIpsum({ count: 2, units: 'words' }),
					date: new Date(),
					subtitle: loremIpsum({ count: 1, units: 'sentences' }),
					unread: parseInt(Math.random() * 10 % 3),
				};
		}
	}

	addMessage()  {
		var list = this.state.messageList;
		list.push(this.random('message'));
		this.setState({
			messageList: list,
		});
	}

	render() {
		var arr = [];
		for (var i = 0; i < 5; i++)
			arr.push(i);

		var chatSource = arr.map(x => this.random('chat'));

		return (
			<div className='container'>
				<div
					className='chat-list'>
					<SideBar
						top={
							<Popup
								// show={this.state.show}
								header='Lorem ipsum dolor sit amet.'
								headerButtons={[{
									type: 'transparent',
									color: 'black',
									onClick: () => {
										this.setState({ show: false })
									},
									icon: {
										component: <FaClose />,
										size: 18
									}
								}]}
								text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem animi veniam voluptas eius!'
								footerButtons={[{
									color: 'white',
									backgroundColor: '#ff5e3e',
									text: "Vazgeç",
								}, {
									color: 'white',
									backgroundColor: 'lightgreen',
									text: "Tamam",
								}]} />
						}
						center={
							<ChatList
								dataSource={chatSource} />
						}
						bottom={
							<span>
								<Button
									type='transparent'
									color='black'
									icon={{
										component: <FaComments />,
										size: 18
									}} />
								<Button
									type='transparent'
									color='black'
									icon={{
										component: <FaSearch />,
										size: 18
									}} />
								<Button text="Count"></Button>
							</span>
						} />
				</div>
				<div
					className='right-panel'>
					<MessageList
						className='message-list'
						lockable={true}
						dataSource={this.state.messageList} />

					<Input
						placeholder="Mesajınızı buraya yazınız."
						defaultValue=""
						ref='input'
						multiline={true}
						// buttonsFloat='left'
						onKeyPress={(e) => {
							if (e.shiftKey && e.charCode === 13) {
								return true;
							}
							if (e.charCode === 13) {
								this.refs.input.clear();
								this.addMessage();
								e.preventDefault();
								return false;
							}
						}}
						rightButtons={
							<Button
								text='Gönder'
								onClick={this.addMessage.bind(this)} />
						} />
				</div>

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
