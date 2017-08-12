import React, { Component } from 'react';
import './Button.css';

const classNames = require('classnames');

export class Button extends Component {
	render() {
		return (
			// <div className="rce-container-input">
			// 	<input type="text" className="rce-input" placeholder={this.props.placeholder} value={this.props.value} />
			// </div>
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