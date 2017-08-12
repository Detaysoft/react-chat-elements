import React, { Component } from 'react';
import './Input.css';

export class Input extends Component {
	render() {
		return (
			<div className="rce-container-input">
				<input type="text" className="rce-input" placeholder={this.props.placeholder} value={this.props.value} />
			</div>
		);
	}
}

Input.defaultProps = {
	placeholder: '',
	value: '',
};

export default Input;