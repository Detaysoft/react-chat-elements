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
        bottom: -1,
        right: -1,
        position: 'absolute',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
        overflow: 'hidden',
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    rceCitemBodyBottom: {
        marginTop: 4,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    rceCitemBodyTopTitle: {
        flex: 1,
        overflow: 'hidden',
        fontSize: 16,
    },

    rceCitemBodyBottomTitle: {
        flex: 1,
        color: '#555',
        fontSize: 15,
    },

    rceCitemBodyTopTime: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.4)',
        marginLeft: 5,
        maxWidth: 100,
        justifyContent: 'flex-start',
    },

    rceCitemBodyBottomStatus: {
        display: 'flex',
        width: 18,
        height: 18,
        marginLeft: 3,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9,
        overflow: 'hidden',
    },

    rceCitemBodyBottomStatusText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
        backgroundColor: 'transparent',
    },
});
