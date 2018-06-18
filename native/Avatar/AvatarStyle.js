import {
    StyleSheet,
} from 'react-native';

export default StyleSheet.create({
    rceAvatarContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    rceAvatarDefault: {
        width: 50,
        height: 50,
    },

    rceAvatarContainerFlexibleRceAvatar: {
        height: 'auto',
        width: '100%',
    },

    rceAvatarContainerRounded: {
        borderRadius: 5,
    },

    rceAvatarContainerCircle: {
        borderRadius: 100,
    },

    rceAvatarContainerXsmall: {
        width: '30px',
        height: '30px',
    },

    rceAvatarContainerSmall: {
        width: '35px',
        height: '35px',
    },

    rceAvatarContainerMedium: {
        width: '40px',
        height: '40px',
    },

    rceAvatarContainerLarge: {
        width: '45px',
        height: '45px',
    },

    rceAvatarContainerXlarge: {
        width: '55px',
        height: '55px',
    },
});
