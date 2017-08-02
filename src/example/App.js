import React, { Component } from 'react';
import MessageBox from '../MessageBox/MessageBox';

const loremIpsum = require('lorem-ipsum');

export class App extends Component {
	random() {
		return {
			position: (parseInt(Math.random() * 10 % 2) && 'right'),
			type: 'text',
			text: loremIpsum({count: 1, units: 'sentences'}),
			data: {},
			date: new Date(),
		};
	}

	render() {
		var arr = [1,2,3,4,5,6,7,8,9,0];
		return (
			<div>
				{
					arr.map((x, i) => {
						var tmp = this.random();

						return <MessageBox
							key={i}
							type={tmp.type}
							text={tmp.text}
							data={tmp.data}
							position={tmp.position}/>
					})
				}
			</div>
		);
	}
}
export default App;
