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

	onOpen(item, i) {
		if (this.props.onOpen instanceof Function)
			this.props.onOpen(item, i);
	}

	onDownload(item, i) {
		if (this.props.onDownload instanceof Function)
			this.props.onDownload(item, i);
	}

	onClick(item, i) {
		if (this.props.onClick instanceof Function)
			this.props.onClick(item, i);
	}

	onTitleClick(item, i) {
		if (this.props.onTitleClick instanceof Function)
			this.props.onTitleClick(item, i);
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
							{...x}
							onOpen={() => this.onOpen(x, i)}
							onDownload={() => this.onDownload(x, i)}
							onTitleClick={() => this.onTitleClick(x, i)}
							onClick={() => this.onClick(x, i)} />
					))
				}
			</div>
		);
	}
}

MessageList.defaultProps = {
	onClick: null,
	onTitleClick: null,
	onOpen: null,
	onDownload: null,
	dataSource: [],
	lockable: false,
	toBottomHeight: 300,
};

export default MessageList;
