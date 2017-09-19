import React, { Component } from 'react';
import './LocationMessage.css';

const classNames = require('classnames');

export class LocationMessage extends Component {
	constructor(props) {
		super(props);

		const {
			latitude,
			longitude,
		} = this.props.data || {};

		this.state = {
			url: 'https://maps.googleapis.com/maps/api/staticmap?markers=color:red|'+latitude+','+longitude+'&zoom=14&size=270x200&scale=2',
		};
	}

	render() {
		return (
			<a
				onClick={this.props.onOpen}
				target={this.props.target}
				href={this.props.href || this.props.src || this.state.url}
				className={classNames('rce-mbox-location', this.props.className)}>
				<img
					className='rce-mbox-location-img'
					src={
						this.props.src ||
						this.state.url
					}/>
			</a>
		);
	}
}

LocationMessage.defaultProps = {
	target: '_blank',
}

export default LocationMessage;
