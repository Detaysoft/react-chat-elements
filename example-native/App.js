/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { ChatItem, MessageList, } from '../native';

import IconI from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';
var messageSource=[];
export default class App extends Component<{}> {
    constructor(props) {
        super(props);

        this.state = {
            show: true,
            messageList: [],
        };
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    token() {
        return (parseInt(Math.random() * 10 % 6));
    }

    photo(size) {
        return require('./assets/chat-user.png')
    }

    random(type) {
        switch (type) {
            case 'message':
                var type = this.token();
                var status = 'waiting';
                type = 'text';

                return {
                    position: (this.token() >= 1 ? 'right' : 'left'),
                    forwarded: true,
                    type: type,
                    theme: 'white',
                    view: 'list',
                    title: 'consectetur adipisicing elit',
                    titleColor: this.getRandomColor(),
                    text: 'Ab beatae odit deleniti dolor numquam nisi, non laboriosam sequi',
                    data: {
                        uri: require('./assets/chat-user.png'),
                        status: {
                            click: false,
                            loading: 0,
                        },
                        width: 300,
                        height: 300,
                        latitude: '37.773972',
                        longitude: '-122.431297',
                    },
                    status: status,
                    date: new Date(),
                    dateString: new Date().toTimeString().split(' ')[0],
                    // avatar: require('./assets/chat-user.png'),
                };
            case 'chat':
                return {
                    id: String(Math.random()),
                    avatar: `data:image/png;base64,${this.photo()}`,
                    avatarFlexible: true,
                    statusColor: 'lightgreen',
                    alt: 'dolore voluptate facilis nobis officia commodi quia',
                    title: 'dolore voluptate facilis nobis officia commodi quia',
                    date: new Date(),
                    subtitle: 'eligendi quaerat nam ipsam tempora.',
                    unread: parseInt(Math.random() * 10 % 3),
                    dateString: new Date().toTimeString().split(' ')[0],
                };
        }
    }

    render() {
        messageSource.unshift(this.random('message'));
        return (
            <View
                style={{
                    flex: 1,
                    marginTop: 10,
                    backgroundColor: '#ccc',
                }}>
                <MessageList
                    lockable={true}
                    dataSource={messageSource}/>
                <Text onPress={() => {this.setState(this.state)}}>Gönder</Text>
            </View>
        );
    }
}
