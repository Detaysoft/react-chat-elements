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
                            sideElement={
                                this.props.statusColor &&
                                <View
                                    style={[styles.rceCitemStatus, {backgroundColor: this.props.statusColor}]}>
                                    <Text>
                                        {this.props.statusText}
                                    </Text>
                                </View>
                            }
                            type={'circle' && {'flexible': this.props.avatarFlexible}}/>
                    </View>

                    <View style={styles.rceCitemBody}>
                        <View style={styles.rceCitemBodyTop}>
                            <Text
                                ellipsizeMode='tail'
                                numberOfLines={1}
                                style={styles.rceCitemBodyTopTitle}>
                                {this.props.title}
                            </Text>
                            <Text
                                style={styles.rceCitemBodyTopTime}
                                ellipsizeMode='tail'
                                numberOfLines={1}>
                                {
                                    this.props.date &&
                                    !isNaN(this.props.date) &&
                                    (
                                        this.props.dateString ||
                                        (this.props.date).toString()
                                    )
                                }
                            </Text>
                        </View>

                        <View style={styles.rceCitemBodyBottom}>
                            <Text
                                ellipsizeMode='tail'
                                numberOfLines={1}
                                style={styles.rceCitemBodyTopTitle}>
                                {this.props.subtitle}
                            </Text>
                            {
                                this.props.unread > 0 &&
                                <View
                                    style={styles.rceCitemBodyBottomStatus}>
                                    <Text
                                        style={styles.rceCitemBodyBottomStatusText}>
                                        {this.props.unread}
                                    </Text>
                                </View>
                            }
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
