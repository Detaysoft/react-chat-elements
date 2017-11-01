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
  View
} from 'react-native';

import { ChatItem } from '../native';

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
                var statu = 'waiting';
                switch (type) {
                    case 0:
                        type = 'photo';
                        statu = 'sent';
                        break;
                    case 1:
                        type = 'file';
                        statu = 'sent';
                        break;
                    case 2:
                        type = 'system';
                        statu = 'received';
                        break;
                    case 3:
                        type = 'location';
                        break;
                    case 4:
                        type = 'spotify';
                        break;
                    default:
                        type = 'text';
                        statu = 'read';
                        break;
                }

                return {
                    position: (this.token() >= 1 ? 'right' : 'left'),
                    forwarded: true,
                    type: type,
                    theme: 'white',
                    view: 'list',
                    title: 'consectetur adipisicing elit',
                    titleColor: this.getRandomColor(),
                    text: type === 'spotify' ? 'spotify:track:7wGoVu4Dady5GV0Sv4UIsx' : 'Ab beatae odit deleniti dolor numquam nisi, non laboriosam sequi',
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
                    statu: statu,
                    date: new Date(),
                    dateString: new Date().toString(),
                    avatar: require('./assets/chat-user.png'),
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
                    dateString: new Date().toString(),
                };
        }
    }

    render() {
        var arr = [];
        for (var i = 0; i < 5; i++)
            arr.push(i);

        var chatSource = arr.map(x => this.random('chat'));
        return (
            <View style={{flex: 1, marginTop: 10}}>
                {
                    chatSource.map((x, i) => (
                        <ChatItem
                            key={i}
                            title={x.title}
                            unread={i || 1}
                            statusColor='lightgreen'
                            subtitle={x.subtitle}
                            avatar={require('./assets/chat-user.png')}/>
                    ))
                }
            </View>
        );
    }
}
