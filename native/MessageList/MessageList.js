import React, { Component } from 'react';
import styles from './MessageListStyle.js';

import Avatar from '../Avatar/Avatar';
import MessageBox from '../MessageBox/MessageBox';

import {
    ScrollView,
} from 'react-native';

export class MessageList extends Component {

    constructor(props) {
        super(props);
    }

    onOpen(item, i, e) {
        if (this.props.onOpen instanceof Function)
            this.props.onOpen(item, i, e);
    }

    onDownload(item, i, e) {
        if (this.props.onDownload instanceof Function)
            this.props.onDownload(item, i, e);
    }

    onPress(item, i, e) {
        if (this.props.onPress instanceof Function)
            this.props.onPress(item, i, e);
    }

    onTitlePress(item, i, e) {
        if (this.props.onTitlePress instanceof Function)
            this.props.onTitlePress(item, i, e);
    }

    onForwardPress(item, i, e) {
        if (this.props.onForwardPress instanceof Function)
            this.props.onForwardPress(item, i, e);
    }

    loadRef(ref) {
        this.mlistRef = ref;
        if (this.props.cmpRef instanceof Function)
            this.props.cmpRef(ref);
    }

    render() {
        return (
            <ScrollView
                ref={this.loadRef.bind(this)}
                style={styles.rceContainerMlist}>
                {
                    this.props.dataSource.map((x, i) => (
                        <MessageBox
                            key={i}
                            {...x}
                            onOpen={this.props.onOpen && ((e) => this.onOpen(x, i, e))}
                            onDownload={this.props.onDownload && ((e) => this.onDownload(x, i, e))}
                            onTitlePress={this.props.onDownload && ((e) => this.onTitlePress(x, i, e))}
                            onForwardPress={this.props.onForwardPress && ((e) => this.onForwardPress(x, i, e))}
                            onPress={this.props.onPress && ((e) => this.onPress(x, i, e))}/>
                    ))
                }
            </ScrollView>
        );
    }
}


MessageList.defaultProps = {
    onPress: null,
    onTitlePress: null,
    onForwardPress: null,
    onOpen: null,
    onDownload: null,
    dataSource: [],
    lockable: false,
    toBottomHeight: 300,
};

export default MessageList;
