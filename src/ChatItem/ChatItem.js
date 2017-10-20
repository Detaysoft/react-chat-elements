import React, { Component } from 'react';
import './ChatItem.css';

import Avatar from '../Avatar/Avatar';

const moment = require('moment');
const classNames = require('classnames');

export class ChatItem extends Component {

    render() {
        return (
            <div
                className={classNames('rce-container-citem', this.props.className)}
                onClick={this.props.onClick}
                onContextMenu={this.props.onContextMenu}>
                <div className="rce-citem">
                    <div className="rce-citem-avatar">
                        <Avatar
                            src={this.props.avatar}
                            alt={this.props.alt}
                            size="large"
                            sideElement={
                                this.props.statusColor &&
                                <span className='rce-citem-status' style={{backgroundColor: this.props.statusColor}}>
                                    {this.props.statusText}
                                </span>
                            }
                            type={classNames('circle', {'flexible': this.props.avatarFlexible})}/>
                    </div>

                    <div className="rce-citem-body">
                        <div className="rce-citem-body--top">
                            <div className="rce-citem-body--top-title">
                                {this.props.title}
                            </div>
                            <div className="rce-citem-body--top-time">
                                {
                                    this.props.date &&
                                    !isNaN(this.props.date) &&
                                    (
                                        this.props.dateString ||
                                        moment(this.props.date).fromNow()
                                    )
                                }
                            </div>
                        </div>

                        <div className="rce-citem-body--bottom">
                            <div className="rce-citem-body--bottom-title">
                                {this.props.subtitle}
                            </div>
                            <div className="rce-citem-body--bottom-status">
                                {
                                    this.props.unread > 0 &&
                                    <span>{this.props.unread}</span>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ChatItem.defaultProps = {
    id: '',
    onClick: null,
    avatar: '',
    avatarFlexible: false,
    alt: '',
    title: '',
    subtitle: '',
    date: new Date(),
    unread: 0,
    statusColor: null,
    statusText: null,
    dateString: null,
}

export default ChatItem;
