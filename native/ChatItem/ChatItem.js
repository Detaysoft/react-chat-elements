import React, { Component } from 'react';
import styles from './ChatItemStyle.js';

import Avatar from '../Avatar/Avatar';

import {
    View,
    Text,
    Image,
} from 'react-native';

export class ChatItem extends Component {

    render() {
        return (
            <View
                style={styles.rceContainerCitem}
                onClick={this.props.onClick}
                onContextMenu={this.props.onContextMenu}>
                <View style={styles.rceCitem}>
                    <View style={styles.rceCitemAvatar}>
                        <Avatar
                            src={this.props.avatar}
                            alt={this.props.alt}
                            size="large"
                            sideElement={
                                this.props.statusColor &&
                                <Text className='rce-citem-status' style={[styles.rceCitemStatus, {backgroundColor: this.props.statusColor}]}>
                                    {this.props.statusText}
                                </Text>
                            }
                            type={'circle' && {'flexible': this.props.avatarFlexible}}/>
                    </View>

                    <View style={styles.rceCitemBody}>
                        <View style={styles.rceCitemBodyTop}>
                            <View>
                                <Text style={styles.rceCitemBodyTopTitle}>
                                    {this.props.title}
                                </Text>
                            </View>
                            <Text style={styles.rceCitemBodyTopTime}>
                                {
                                    this.props.date &&
                                    !isNaN(this.props.date) &&
                                    (
                                        this.props.dateString ||
                                        'Moment(this.props.date).fromNow()'
                                    )
                                }
                            </Text>
                        </View>

                        <View style={styles.rceCitemBodyBottom}>
                            <View>
                                <Text style={styles.rceCitemBodyTopTitle}>
                                    {this.props.subtitle}
                                </Text>
                            </View>
                            <View style={styles.rceCitemBodyBottomStatus}>
                                {
                                    this.props.unread > 0 &&
                                    <Text
                                        style={styles.rceCitemBodyBottomStatusText}>
                                        {this.props.unread}
                                    </Text>
                                }
                            </View>
                        </View>
                    </View>
                </View>
            </View>
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
