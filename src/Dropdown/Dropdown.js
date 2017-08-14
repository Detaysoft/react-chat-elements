import React, { Component } from 'react';
import './Dropdown.css';

const classNames = require('classnames');

export class Dropdown extends Component {
	render() {
		return (
			<div className={classNames('rce-dropdown', this.props.animtype,this.props.position)}>
				<ul>
					<li><a>Dropdown Item1</a></li>
					<li><a>Dropdown Item2</a></li>
					<li><a>Dropdown Item3</a></li>
				</ul>
			</div>
		);
	}
}

Dropdown.defaultProps = {
	animtype: 'default',
	position:'top',
};

export default Dropdown;