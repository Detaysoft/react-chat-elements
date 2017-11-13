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
    ScrollView,
} from 'react-native';

import { ChatItem, MessageBox, } from '../native';
import Theme from '../native/Theme';

import IconI from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';

export default class App extends Component<{}> {
    constructor(props) {
        super(props);

        this.state = {
            show: true,
            messageList: [],
        };
        Theme.icons = {
            waiting: <IconM name='access-time' size={13}/>,
            sent: <IconM name='check' size={13}/>,
            received: <IconI name='md-done-all' size={13}/>,
            read: <IconI name='md-done-all' color='#4FC3F7' size={13}/>,
        }
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
        var arr = [];
        for (var i = 0; i < 5; i++)
            arr.push(i);

        var chatSource = arr.map(x => this.random('chat'));
        var messageSource = arr.map(x => this.random('message'));
        return (
            <ScrollView
                style={{
                    flex: 1,
                    marginTop: 10,
                    backgroundColor: '#ccc',
                }}>
                {
                    messageSource.map((x, i) => (
                        <MessageBox
                            key={i}
                            {...x}/>
                    ))
                }
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
            </ScrollView>
        );
    }
}
