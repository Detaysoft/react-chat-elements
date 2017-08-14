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
				<div className="rce-navbar-left-side">
					<Button type="default" text="Back" />
				</div>
				<div className="rce-navbar-center-side">
					<span className="rce-navbar-title">{this.props.title}</span>
				</div>
				<div className="rce-navbar-right-side">
					<Button type="default" text="View Profile" />
				</div>
			</div>
		);
	}
}

Navbar.defaultProps = {
	title: '',
	type:'light'
};

export default Navbar;