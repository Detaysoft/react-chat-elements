import React, { Component } from 'react';
import './MessageList.css';

import MessageBox from '../MessageBox/MessageBox';

const classNames = require('classnames');

export class MessageList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			scrollBottom: 0,
		};
	}

	componentDidUpdate() {
		var e = this.refs.mlist;
		var bottom = this.getBottom(e);
		if (this.props.toBottomHeight === '100%' || bottom < this.props.toBottomHeight) {
			// scroll to bottom
			e.scrollTop = e.scrollHeight;
		} else {
			if (this.props.lockable === true) {
				e.scrollTop = e.scrollHeight - e.offsetHeight - this.state.scrollBottom;
			}
		}
	}

	componentWillReceiveProps() {
		this.setState({
			scrollBottom: this.getBottom(this.refs.mlist),
		});
	}

	getBottom(e) {
		return e.scrollHeight - e.scrollTop - e.offsetHeight;
	}

	render() {
		return (
			<div
				ref='mlist'
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
	lockable: false,
	toBottomHeight: 300,
};

export default MessageList;
