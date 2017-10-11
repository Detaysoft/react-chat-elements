import React, { Component } from 'react';
import './SpotifyMessage.css';

const classNames = require('classnames');

export class SpotifyMessage extends Component {
	render() {
		if (!this.props.uri)
			return null;
		return (
			<div className="rce-mbox-spotify">
				<iframe
					src={"https://open.spotify.com/embed?uri=" + this.props.uri}
					width={this.props.width}
					height={this.props.height}
					frameBorder="0"
					allowTransparency="true"></iframe>
			</div>
		);
	}
}

SpotifyMessage.defaultProps = {
	width: 300,
	height: 380,
}

export default SpotifyMessage;
