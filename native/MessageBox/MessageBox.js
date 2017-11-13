import React, { Component } from 'react';
import styles from './MessageBoxStyle.js';

import Avatar from '../Avatar/Avatar';

import {
    View,
    Text,
    Image,
} from 'react-native';

import Theme from '../Theme';

export class MessageBox extends Component {

    render() {
        var positionCls = [
            styles.rceMbox,
            this.props.position === 'right' && styles.rceMboxRight,
        ];
        var thatAbsoluteTime = this.props.type !== 'text' && this.props.type !== 'file' && !(this.props.type === 'location' && this.props.text);

        return (
            <View
                style={styles.rceContainerMbox}
                onClick={this.props.onClick}>

                {
                    this.props.type === 'system' ?
                        null
                        :
                        <View
                            style={[
                                positionCls,
                            ]}>
                            <View
                                style={styles.rceMboxBody}>
                                {
                                    (this.props.title || this.props.avatar) &&
                                    <View
                                        style={[
                                            styles.rceMboxTitle,
                                            this.props.type === 'text' && styles.rceMboxTitleClear,
                                        ]}
                                        onClick={this.props.onTitleClick}>
                                        {
                                            this.props.avatar &&
                                            <View
                                                style={styles.rceMboxTitleAvatar}>
                                                    <Avatar
                                                        size={{
                                                            width: 30,
                                                            height: 30,
                                                        }}
                                                        src={this.props.avatar}/>
                                            </View>
                                        }
                                        <View>
                                        {
                                            this.props.title &&
                                            <Text
                                                style={[
                                                    styles.rceMboxTitleText,
                                                    this.props.titleColor && { color: this.props.titleColor },
                                                ]}>{this.props.title}</Text>
                                        }
                                        </View>
                                    </View>
                                }

                                {
                                    this.props.type === 'text' &&
                                    <Text
                                        style={styles.rceMboxText}>
                                        {this.props.text}
                                        {'\t\t\t\t\t'}
                                    </Text>
                                }

                                <View
                                    style={[
                                        styles.rceMboxTime,
                                        thatAbsoluteTime && styles.rceMboxTimeBlock
                                    ]}>
                                    <Text
                                        style={styles.rceMboxTimeText}>
                                    {
                                        this.props.date &&
                                        !isNaN(this.props.date) &&
                                        (
                                            this.props.dateString ||
                                            moment(this.props.date).fromNow()
                                        )
                                    }
                                    </Text>
                                    {
                                        this.props.status &&
                                        <Text
                                            style={styles.rceMboxStatus}>
                                            {
                                                this.props.status === 'waiting' &&
                                                Theme.icons.waiting
                                            }

                                            {
                                                this.props.status === 'sent' &&
                                                Theme.icons.sent
                                            }

                                            {
                                                this.props.status === 'received' &&
                                                Theme.icons.received
                                            }

                                            {
                                                this.props.status === 'read' &&
                                                Theme.icons.read
                                            }
                                        </Text>
                                    }
                                </View>
                            </View>
                        </View>
                }
            </View>
        );
    }
}

MessageBox.defaultProps = {
    position: 'left',
    type: 'text',
    text: '',
    title: null,
    titleColor: null,
    onTitleClick: null,
    onForwardClick: null,
    date: new Date(),
    data: {},
    onClick: null,
    onOpen: null,
    onDownload: null,
    forwarded: false,
    status: null,
    dateString: 'tarih',
    notch: true,
    avatar: null,
    renderAddCmp: null,
};

export default MessageBox;
