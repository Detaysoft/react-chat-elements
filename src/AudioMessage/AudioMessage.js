import React from 'react';

import './AudioMessage.css';

export default class AudioMessage extends React.PureComponent {
    render() {
        return (
            <div className={'rce-mbox-audio'}>
                <audio controls>
                    <source src={this.props.audioURL} type="audio/mp3"/>
                    Your browser does not support the audio element.
                </audio>
            </div>
        );
    }
}

AudioMessage.defaultProps = {
    audioURL: null,
};
