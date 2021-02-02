import React from 'react';

import './AudioMessage.css';

export default class AudioMessage extends React.PureComponent {
    render() {
        return (
            <div className={'rce-mbox-audio'}>
                <audio controls controlsList="nodownload">
                    <source src={this.props.audioURL} type="audio/mp3"/>
                    Your browser does not support the audio element.
                </audio>
                {
                    this.props.text &&
                    this.props.audioURL === null &&
                    <div className='rce-mbox-text'>
                        {this.props.text}
                    </div>
                }
            </div>
        );
    }
}

AudioMessage.defaultProps = {
    audioURL: null,
};
