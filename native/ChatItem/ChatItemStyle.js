import {
    StyleSheet,
} from 'react-native';

export default StyleSheet.create({
    rceContainerCitem: {
        flexDirection: 'column',
        overflow: 'hidden',
        minWidth: 240,
    },

    rceCitem: {
        position: 'relative',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        height: 72,
        maxWidth: '100%',
        overflow: 'hidden',
        minWidth: 240,
    },

    rceCitemHover: {
        backgroundColor: '#f9f9f9',
    },

    rceCitemAvatar: {
        position: 'relative',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 15,
        paddingRight: 13,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
    },

    rceCitemStatus: {
        width: 20,
        height: 20,
        bottom: 10,
        right: 10,
        position: 'absolute',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
    },

    rceCitemAvatarImg: {
        width: 50,
        height: 50,
        backgroundColor: '#ccc',
        borderRadius: 25,
        overflow: 'hidden',
        fontSize: 10,
        textAlign: 'center',
        lineHeight: 50,
        // textOverflow: 'ellipsis',
        // whiteSpace: 'nowrap',
    },

    rceCitemBody: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        paddingRight: 15,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,.05)',
        overflow: 'hidden',
    },

    rceCitemBodyTop: {
        display: 'flex',
    },

    rceCitemBodyBottom: {
        marginTop: 4,
        display: 'flex',
    },

    rceCitemBodyTopTitle: {
        flex: 1,
        // whiteSpace: 'nowrap',
        // textOverflow: 'ellipsis',
        overflow: 'hidden',
    },

    rceCitemBodyTopTitle: {
        fontSize: 16,
    },

    rceCitemBodyBottomTitle: {
        color: '#555',
        fontSize: 15,
    },

    rceCitemBodyTopTime: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.4)',
    },

    rceCitemBodyBottomStatus: {
        marginLeft: 3,
    },

    rceCitemBodyBottomStatusText: {
        width: 18,
        height: 18,
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        borderRadius: 9,
        backgroundColor: 'red',
    },
});
