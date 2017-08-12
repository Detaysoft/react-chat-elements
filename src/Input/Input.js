import React, { Component } from 'react';
import './Input.css';

export class Input extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: this.props.defaultValue,
		};
	}

	onChange(e) {
		this.setState({
			value: e.target.value
		});
		this.props.onChange && this.props.onChange(e.target.value);
	}

	render() {
		return (
			<div className="rce-container-input">
				<input
					type={this.props.type}
					className="rce-input"
					placeholder={this.props.placeholder}
					value={this.state.value}
					onChange={this.onChange.bind(this)}/>
			</div>
		);
	}
}

Input.defaultProps = {
	type: 'text',
	placeholder: '',
	defaultValue: '',
	onChange: '',
};

export default Input;