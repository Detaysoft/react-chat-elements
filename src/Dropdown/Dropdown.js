import React, { Component } from 'react';
import './Dropdown.css';

const classNames = require('classnames');

export class Dropdown extends Component {
	render() {
		if (this.props.show === true)
		return (
			<div
				style={{
					top: this.props.target.Y,
					left: this.props.target.X,
				}}
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
							<li key={i} onClick={() => this.props.onSelect(i)}>
								<a>{x}</a>
							</li>
						))
					}
				</ul>
			</div>
		);
		return null;
	}
}

Dropdown.defaultProps = {
	show: false,
	animationType: 'default',
	animationPosition: 'nortwest',
	items: [],
	onSelect: Function,
	target: { X: 0, Y: 0 },
};

export default Dropdown;