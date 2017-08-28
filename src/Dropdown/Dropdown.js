import React, { Component } from 'react';
import './Dropdown.css';

import Button from '../Button/Button';

const classNames = require('classnames');

export class Dropdown extends Component {
	constructor(props) {
		super(props);

		this.state = {
			show: false,
		};
	}

	onBlur(e) {
		if (this.state.show === true)
			this.setState({show: false});
	}

	render() {
		return (
			<div className='rce-dropdown-container' onBlur={this.onBlur.bind(this)}>
				{
					<Button
						{...this.props.buttonProps}
						onClick={() => this.setState({show: !this.state.show})}/>
				}
				{
					this.state.show &&
					<div
						className={
							classNames(
								'rce-dropdown',
								this.props.animationType,
								'rce-dropdown-open__' + this.props.animationPosition,
							)
						}>
						<ul>
							{
								this.props.items.map((x, i) => (
									<li key={i} onMouseDown={(e) => this.props.onSelect(i)}>
										<a>{x}</a>
									</li>
								))
							}
						</ul>
					</div>
				}
			</div>
		);
	}
}

Dropdown.defaultProps = {
	animationType: 'default',
	animationPosition: 'nortwest',
	items: [],
	onSelect: Function,
	buttonProps: null
};

export default Dropdown;
