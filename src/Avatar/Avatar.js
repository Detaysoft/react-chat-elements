import React, { Component } from 'react';
import './Avatar.css';

const classNames = require('classnames');

const loadedAvatars = [];

export class Avatar extends Component {
    constructor(props) {
        super(props);

        this.requestImage = this.requestImage.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
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
            if (this._isMounted !== false) {
                self.setState({});
            }
        };

        var img = document.createElement('img');
        img.src = src;
        img.onload = loaded;
        img.onerror = loaded;
    }

    stringToColour (str) {
        var hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        var colour = '#';
        for (let i = 0; i < 3; i++) {
            var value = (hash >> (i * 8)) & 0xFF;
            value = (value % 150) + 50;
            colour += ('00' + value.toString(16)).substr(-2);
        }
        return colour;
    }

    render() {
        let src = this.props.src;
        let isLazyImage = false;

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
                {
                    this.props.letterItem ?
                    <div
                        className="rce-avatar-letter-background"
                        style={{ backgroundColor: this.stringToColour(this.props.letterItem.id)}}>
                        <span class="rce-avatar-letter">
                            {this.props.letterItem.letter}
                        </span>
                    </div>
                    :
                    <img
                        alt={this.props.alt}
                        src={src}
                        onError={this.props.onError}
                        className={classNames(
                            'rce-avatar',
                            {'rce-avatar-lazy': isLazyImage},
                        )} />
                }
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
