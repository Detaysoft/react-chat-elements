import React, { Component } from 'react';
import './Popup.css';

import Button from '../Button/Button';

const classNames = require('classnames');

export class Popup extends Component {
	render() {
		return (
			<div className={classNames('rce-popup-wrapper', this.props.type)}>
				<div className="rce-popup">
					<div className="rce-popup-header">
						<span>Popup Window Title</span>
						<Button
							color='white'
							text="OKAY" />
					</div>
					<div className="rce-popup-content">
						<p>
							Chocolate ice cream pie chocolate gingerbread. Cake lollipop apple pie macaroon candy. Wafer wafer sweet roll. 
						</p>
					</div>
					<div className="rce-popup-footer">
						<Button
							color='white'
							type="default"
							text="OKAY" />
						<Button
							color='white'
							backgroundColor='#ff5e3e'
							text="CANCEL" />
					</div>
				</div>
			</div>
		);
	}
}

Popup.defaultProps = {
	type: 'default',
};

export default Popup;