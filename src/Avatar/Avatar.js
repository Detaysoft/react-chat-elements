import React, { Component } from 'react';
import './Avatar.css';

const classNames = require('classnames');

const loadedAvatars = [];

export class Avatar extends Component {
    constructor(props) {
        super(props);

        this.requestImage = this.requestImage.bind(this);
    }

    isLoaded(src) {
        return loadedAvatars.indexOf(src) !== -1;
    }

    requestImage(src) {
        var self = this;
        this.loading = true;

        var loaded = () => {
            loadedAvatars.push(src);
            delete self.loading;
            self.setState({});
        };

        var img = document.createElement('img');
        img.src = src;
        img.onload = loaded;
        img.onerror = loaded;
    }

    render() {
        var src = this.props.src;
        var isLazyImage = false;

        if (this.props.lazyLoadingImage) {
            isLazyImage = true;

            if (!this.isLoaded(src)) {
                src = this.props.lazyLoadingImage; // lazy image

                if (!this.loading) {
                    this.requestImage(this.props.src);
                }
            }
            else {
                isLazyImage = false;
            }
        }

        return (
            <div className={classNames('rce-avatar-container', this.props.type, this.props.size, this.props.className)}>
                <img
                    alt={this.props.alt}
                    src={src}
                    onError={this.props.onError}
                    className={classNames(
                        'rce-avatar',
                        {'rce-avatar-lazy': isLazyImage},
                    )} />
                {this.props.sideElement}
            </div>
        );
    }
}

Avatar.defaultProps = {
    type: 'default',
    size: 'default',
    src: '',
    alt: '',
    sideElement: null,
    lazyLoadingImage: undefined,
    onError: () => void(0),
};

export default Avatar;
