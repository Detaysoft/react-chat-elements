import React, { Component } from 'react';
import './ReplyMessage.css';

const classNames = require('classnames');

export class ReplyMessage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            photoURL,
            title,
            titleColor,
            message,
            onClick,
        } = this.props;

        return (
            <div
                className={classNames("rce-mbox-reply", {
                    'rce-mbox-reply-border': !!titleColor
                })}
                style={titleColor && { borderColor: titleColor }}
                onClick={onClick}>
                <div className="rce-mbox-reply-left">
                    <div
                        style={titleColor && { color: titleColor }}
                        className="rce-mbox-reply-owner">
                        {title || 'Unknown'}
                    </div>
                    <div className="rce-mbox-reply-message">
                        {message || '...'}
                    </div>
                </div>
                {
                    photoURL &&
                    <div className="rce-mbox-reply-right">
                        <img src={photoURL} alt=""/>
                    </div>
                }
            </div>
        );
    }
}

ReplyMessage.defaultProps = {
    photoURL: null,
    title: null,
    titleColor: null,
    message: null,
    onClick: () => void(0),
}

export default ReplyMessage;
