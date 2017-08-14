import React, { Component } from 'react';
import './Navbar.css';
import {
	Button,
} from '../../src';

const classNames = require('classnames');

export class Navbar extends Component {
	render() {
		return (
			<div className={classNames('rce-navbar', this.props.type)}>
				<div className="rce-navbar-item rce-navbar-item__left">
					{this.props.left}
				</div>
				<div className="rce-navbar-item rce-navbar-item__center">
					{this.props.center}
				</div>
				<div className="rce-navbar-item rce-navbar-item__right">
					{this.props.right}
				</div>
			</div>
		);
	}
}

Navbar.defaultProps = {
	title: '',
	left: null,
	center: null,
	right: null,
	type:'light'
};

export default Navbar;