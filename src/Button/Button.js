import React, { Component } from 'react';
import './Button.css';

const classNames = require('classnames');

export class Button extends Component {
	render() {
		return (
			<a className={classNames('rce-button', this.props.type)}
				disabled={this.props.disabled}>
				{this.props.text}</a>
		);
	}
}

Button.defaultProps = {
	text: '',
	disabled: false,
	type: 'default',
};

export default Button;