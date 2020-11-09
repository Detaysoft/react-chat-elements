import React, { Component } from 'react';

import './VideoMessage.css';

import FaCloudDownload from 'react-icons/lib/fa/cloud-download';
import FaError from 'react-icons/lib/fa/exclamation-triangle';

import classNames from 'classnames';

const ProgressBar = require('react-progress-bar.js');
const Circle = ProgressBar.Circle;

export class VideoMessage extends Component {
    render() {
        var progressOptions = {
            strokeWidth: 2.3,
            color: '#efe',
            trailColor: '#aaa',
            trailWidth: 1,
            step: (state, circle) => {
                circle.path.setAttribute('trail', state.color);
                circle.path.setAttribute('trailwidth-width', state.width);

                var value = Math.round(circle.value() * 100);
                if (value === 0)
                    circle.setText('');
                else
                    circle.setText(value);
            }
        };

        const error = this.props.data.status && this.props.data.status.error === true;
        const downloaded = this.props.data.status && this.props.data.status.download;

        return (
            <div
                className={classNames('rce-mbox-video', {
                    'padding-time': !this.props.text,
                })}>
                <div
                    className='rce-mbox-video--video'
                    style={this.props.data.width && this.props.data.height && {
                        width: this.props.data.width,
                        height: this.props.data.height,
                    }}>

                    {
                        !downloaded &&
                        <img
                            src={this.props.data.uri}
                            alt={this.props.data.alt}
                            onClick={this.props.onOpen}
                            onLoad={this.props.onLoad}
                            onError={this.props.onPhotoError}/>
                    }

                    {
                        downloaded &&
                        <video controls>
                            <source src={this.props.data.videoURL} type='video/mp4'/>
                            Your browser does not support HTML video.
                        </video>
                    }

                    {
                        error &&
                        <div className='rce-mbox-video--video__block'>
                            <span
                                className='rce-mbox-video--video__block-item rce-mbox-video--error'>
                                <FaError/>
                            </span>
                        </div>
                    }
                    {
                        !error &&
                        this.props.data.status &&
                        !downloaded &&
                        <div className='rce-mbox-video--video__block'>
                            {
                                !this.props.data.status.click &&
                                <button
                                    onClick={this.props.onDownload}
                                    className='rce-mbox-video--video__block-item rce-mbox-video--download'>
                                    <FaCloudDownload/>
                                </button>
                            }
                            {
                                typeof this.props.data.status.loading === 'number' &&
                                this.props.data.status.loading !== 0 &&
                                <Circle
                                    progress={this.props.data.status.loading}
                                    options={progressOptions}
                                    initialAnimate={true}
                                    containerClassName={'rce-mbox-video--video__block-item'} />
                            }
                        </div>
                    }
                </div>
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

VideoMessage.defaultProps = {
    text: '',
    data: {},
    onDownload: null,
    onOpen: null,
    onLoad: null,
    onPhotoError: null,
};


export default VideoMessage;
