import React, { Component } from 'react';
import './Input.css';

export class Input extends Component {
	render() {
		return (
			<div className="rce-container-input">
				<input type="text" className="rce-input"/>
			</div>
		);
	}
}

export default Input;