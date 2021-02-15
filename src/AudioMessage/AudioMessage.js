import React from 'react';

import './AudioMessage.css';

export default class AudioMessage extends React.PureComponent {
    render() {
        const audioURL = this.props.data.audioURL;
        const controlsList = this.props.data.controlsList;

        return (
            <div className={'rce-mbox-audio'}>
                <audio controls controlsList={controlsList ? controlsList : "nodownload"}>
                    <source src={audioURL} type="audio/mp3"/>
                    Your browser does not support the audio element.
                </audio>

                {
                    this.props.text &&
                    <div className='rce-mbox-text'>
                        {this.props.text}
                    </div>
                }
            </div>
        );
    }
}

AudioMessage.defaultProps = {
    data: {},
};
