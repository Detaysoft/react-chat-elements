import React, { Component } from 'react';
import styles from './AvatarStyle.js';

import {
    View,
    Image,
} from 'react-native';

export class Avatar extends Component {
    render() {
        const size = this.props.size;

        return (
            <View style={styles.rceAvatarContainer}>
                <Image
                    style={[
                        styles.rceAvatarDefault,
                        size && { width: size.width, height: size.height },
                    ]}
                    source={this.props.src} />
                {this.props.sideElement}
            </View>
        );
    }
}

Avatar.defaultProps = {
    type: 'default',
    size: null,
    src: '',
    alt: '',
    sideElement: null,
};

export default Avatar;
