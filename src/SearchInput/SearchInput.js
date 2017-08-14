import React, { Component } from 'react';
import './SearchInput.css';
import {
	Button,
	Input,
} from '../../src';

const classNames = require('classnames');

export class SearchInput extends Component {
	render() {
		return (
			<div className="rce-container-search-input">
				{/* <input
					type={this.props.type}
					className="rce-search-input"
					placeholder={this.props.placeholder}
					value={this.state.value} /> */}
				<Input
					placeholder="Mesajınızı buraya yazınız." defaultValue="" />
				<Button
					type="default" text="Search" />
			</div>
		);
	}
}

SearchInput.defaultProps = {
	type: 'text',
	placeholder: '',
	value: ''
};

export default SearchInput;