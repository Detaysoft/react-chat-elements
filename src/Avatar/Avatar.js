import React, { Component } from 'react';
import './Avatar.css';

const classNames = require('classnames');

export class Avatar extends Component {
	render() {
		return (
			<img alt={this.props.alt} src={this.props.src} className={classNames('rce-avatar', this.props.type, this.props.size, this.props.className)} />
		);
	}
}

Avatar.defaultProps = {
	type: 'default',
	size: 'default',
	src: '',
	alt: '',
};

export default Avatar;
