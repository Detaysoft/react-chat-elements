import {
    StyleSheet,
} from 'react-native';

export default StyleSheet.create({
    rceContainerMbox: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        minWidth: 200,
    },

    rceMbox: {
        backgroundColor: 'white',
        borderRadius: 5,
        // boxShadow: 1px 1px 1px 1px rgba(0, 0, 0, .2),
        borderTopLeftRadius: 0,
        marginLeft: 20,
        marginRight: 5,
        marginTop: 3,
        flexDirection: 'column',
        marginBottom: 3,
        paddingTop: 7,
        paddingLeft: 9,
        paddingBottom: 8,
        paddingRight: 9,
        minWidth: 140,
    },

    rceMboxBody: {
        margin: 0,
        padding: 0,
        position: 'relative',
    },

    rceMboxRight: {
        marginLeft: 5,
        marginRight: 20,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 5,
    },

    rceMboxText: {
        fontSize: 13.6,
    },

    rceMboxTime: {
        position: 'absolute',
        right: -4,
        bottom: -5,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },

    rceMboxTimeText: {
        textAlign: 'right',
        color: '#777',
        fontSize: 12,
    },

    rceMboxTimeBlock: {
        /*position: relative,*/
        right: 0,
        bottom: 0,
        left: 0,
        marginRight: -6,
        marginLeft: -6,
        paddingTop: 5,
        paddingRight: 3,
        paddingBottom: 2,
        // backgroundColor: linear-gradient(to top, rgba(0,0,0,0.33), transparent),
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },

    rceMboxClearPadding: {
        paddingBottom: 3,
    },

    rceMboxRceMboxClearNotch: {
        borderRadius: 5,
    },

    rceMboxTitle: {
        margin: 0,
        marginBottom: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    rceMboxTitleAvatar: {
        display: 'flex',
        marginRight: 5,
    },

    rceMboxTitleText: {
        fontWeight: '500',
        fontSize: 13,
        color: '#4f81a1',
    },

    rceMboxTitleClear: {
        marginBottom: 5,
    },

    rceMboxStatus: {
        textAlign: 'right',
        marginLeft: 3,
        color: '#999'
    },

    rceMboxTitleRceAvatarContainer: {
        marginRight: 5,
    },

});
