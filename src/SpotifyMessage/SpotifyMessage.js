import React, { Component } from 'react';
import './SpotifyMessage.css';

const classNames = require('classnames');

export class SpotifyMessage extends Component {
    toUrl() {
        var formBody = [];
        var data = {
            uri: this.props.uri,
            theme: this.props.theme,
            view: this.props.view,
        };
        for (var property in data) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(data[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        return formBody;
    }

    render() {
        if (!this.props.uri)
            return null;
        return (
            <div className="rce-mbox-spotify">
                <iframe
                    src={"https://open.spotify.com/embed?" + this.toUrl()}
                    width={this.props.width}
                    height={this.props.height}
                    frameBorder="0"
                    allowtransparency="true"></iframe>
            </div>
        );
    }
}

SpotifyMessage.defaultProps = {
    uri: '',
    theme: 'black',
    view: 'list',
    width: 300,
    height: 380,
}

export default SpotifyMessage;
