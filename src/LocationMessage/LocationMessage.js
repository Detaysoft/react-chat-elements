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

        var key = this.props.apiKey ? ('&key=' + this.props.apiKey): '';
        this.state = {
            url: 'https://maps.googleapis.com/maps/api/staticmap?markers=color:red|'+latitude+','+longitude+'&zoom=14&size=270x200&scale=2' + key,
        };

        this.className = this.className.bind(this);
    }

    className() {
      var className = classNames('rce-mbox-location', this.props.className);

      if (this.props.text && this.props.text.length > 0) {
        className = classNames(className, 'rce-mbox-location-has-text');
      }

      return className;
    }

    render() {
        return (
            <div>
                <a
                    onClick={this.props.onOpen}
                    target={this.props.target}
                    href={this.props.href || this.props.src || this.state.url}
                    className={this.className()}>
                        <img className='rce-mbox-location-img'
                             src={
                                 this.props.src ||
                                 this.state.url
                             }/>
                </a>
                {
                    this.props.text &&
                    <div className="rce-mbox-text rce-mbox-location-text">
                        {this.props.text}
                    </div>
                }
            </div>
        );
    }
}

LocationMessage.defaultProps = {
    target: '_blank',
    apiKey: null,
}

export default LocationMessage;
