import React, { Component } from 'react';
import './Avatar.css';

const classNames = require('classnames');

export class Avatar extends Component {
	render() {
		return (
			<img src={this.props.src} className={classNames('rce-avatar', this.props.type, this.props.size)}/>
		);
	}
}

Avatar.defaultProps = {
	type: 'default',
	size: 'default',
	src:''
};

export default Avatar;