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
    render() {
        return (
            <View style={{flex: 1}}>
                <ChatItem
                    title='React Chat Element'
                    subtitle='Hello there!'
                    avatar={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
            </View>
        );
    }
}
