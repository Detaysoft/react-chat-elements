import React, { Component } from 'react';
import './Input.css';

const classNames = require('classnames');

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
					className={classNames("rce-input", {'rce-input-nopadding': this.props.buttons})}
					placeholder={this.props.placeholder}
					value={this.state.value}
					onChange={this.onChange.bind(this)}/>

				{
					this.props.buttons &&
					<div
						className='rce-input-buttons'>
						{this.props.buttons}
					</div>
				}
			</div>
		);
	}
}

Input.defaultProps = {
	type: 'text',
	placeholder: '',
	defaultValue: '',
	onChange: Function,
	buttons: null
};

export default Input;