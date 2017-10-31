import React, { Component } from 'react';
import styles from './AvatarStyle.js';

import {
    View,
    Image,
} from 'react-native';

export class Avatar extends Component {
    render() {
        return (
            <View style={styles.rceAvatarContainer}>
                <Image
                    source={this.props.src} />
                {this.props.sideElement}
            </View>
        );
    }
}

Avatar.defaultProps = {
    type: 'default',
    size: 'default',
    src: '',
    alt: '',
    sideElement: null,
};

export default Avatar;
