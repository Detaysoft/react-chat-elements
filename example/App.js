"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var src_1 = require("../src");
var fa_1 = require("react-icons/fa");
var md_1 = require("react-icons/md");
var lorem_ipsum_1 = require("lorem-ipsum");
var identicon_js_1 = require("identicon.js");
var clearRef = function () { };
function useForceUpdate() {
    var _a = (0, react_1.useState)(0), value = _a[0], setValue = _a[1];
    return function () { return setValue(function (value) { return value + 1; }); };
}
;
var App = function (props) {
    var messageListReferance = (0, react_1.useRef)();
    var inputReferance = (0, react_1.useRef)();
    var _a = (0, react_1.useState)(true), show = _a[0], setShow = _a[1];
    var _b = (0, react_1.useState)('chat'), list = _b[0], setList = _b[1];
    var _c = (0, react_1.useState)([]), messageList = _c[0], setMessageList = _c[1];
    var _d = (0, react_1.useState)([]), chatSource = _d[0], setChatSource = _d[1];
    var _e = (0, react_1.useState)([]), meetingSource = _e[0], setMeetingSource = _e[1];
    var _f = (0, react_1.useState)(false), isShowChild = _f[0], setIsShowChild = _f[1];
    var _g = (0, react_1.useState)(false), preview = _g[0], setPreview = _g[1];
    (0, react_1.useEffect)(function () {
        addMessage(8);
        var arr = [];
        for (var i = 0; i < 5; i++)
            arr.push(i);
        setChatSource(arr.map(function (x) { return random('chat', token()); }));
        setMeetingSource(arr.map(function (x) { return random('meeting', token()); }));
    }, []);
    var getRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    var token = function () {
        return (Math.floor(Math.random() * 10 % 8));
    };
    var photo = function (size) {
        return new identicon_js_1["default"](String(Math.random()) + String(Math.random()), {
            margin: 0,
            size: size || 20
        }).toString();
    };
    var random = function (type, mtype) {
        switch (type) {
            case 'message':
                mtype = mtype || token();
                var status = 'waiting';
                switch (mtype) {
                    case 0:
                        mtype = 'photo';
                        status = 'sent';
                        break;
                    case 1:
                        mtype = 'file';
                        status = 'sent';
                        break;
                    case 2:
                        mtype = 'system';
                        status = 'received';
                        break;
                    case 3:
                        mtype = 'location';
                        break;
                    case 4:
                        mtype = 'spotify';
                        break;
                    case 5:
                        mtype = 'meeting';
                        break;
                    case 6:
                        mtype = 'video';
                        status = 'sent';
                        break;
                    case 7:
                        mtype = 'audio';
                        break;
                    case 8:
                        mtype = 'meetingLink';
                        break;
                    default:
                        mtype = 'text';
                        status = 'read';
                        break;
                }
                return {
                    position: (token() >= 1 ? 'right' : 'left'),
                    forwarded: true,
                    replyButton: true,
                    removeButton: true,
                    retracted: false,
                    reply: token() >= 1 ? ({
                        photoURL: token() >= 1 ? "data:image/png;base64,".concat(photo(150)) : null,
                        title: (0, lorem_ipsum_1["default"])({ count: 2, units: 'words' }),
                        titleColor: getRandomColor(),
                        message: (0, lorem_ipsum_1["default"])({ count: 1, units: 'sentences' })
                    }) : null,
                    meeting: token() >= 1 ? ({
                        subject: (0, lorem_ipsum_1["default"])({ count: 2, units: 'words' }),
                        title: (0, lorem_ipsum_1["default"])({ count: 2, units: 'words' }),
                        date: +new Date(),
                        collapseTitle: (0, lorem_ipsum_1["default"])({ count: 2, units: 'words' }),
                        participants: Array(token() + 6).fill(1).map(function (x) { return ({
                            id: Math.floor(Math.random() * 10 % 7),
                            title: (0, lorem_ipsum_1["default"])({ count: 1, units: 'words' })
                        }); }),
                        dataSource: Array(token() + 5).fill(1).map(function (x) { return ({
                            id: String(Math.random()),
                            avatar: "data:image/png;base64,".concat(photo(20)),
                            message: (0, lorem_ipsum_1["default"])({ count: 1, units: 'sentences' }),
                            title: (0, lorem_ipsum_1["default"])({ count: 2, units: 'words' }),
                            avatarFlexible: true,
                            date: +new Date(),
                            event: {
                                title: (0, lorem_ipsum_1["default"])({ count: 2, units: 'words' }),
                                avatars: Array(token() + 2).fill(1).map(function (x) { return ({
                                    src: "data:image/png;base64,".concat(photo(20)),
                                    title: "react, rce"
                                }); }),
                                avatarsLimit: 5
                            },
                            record: {
                                avatar: "data:image/png;base64,".concat(photo(20)),
                                title: (0, lorem_ipsum_1["default"])({ count: 1, units: 'words' }),
                                savedBy: 'Kaydeden: ' + (0, lorem_ipsum_1["default"])({ count: 2, units: 'words' }),
                                time: new Date().toLocaleString()
                            }
                        }); })
                    }) : null,
                    type: mtype,
                    theme: 'white',
                    view: 'list',
                    title: (0, lorem_ipsum_1["default"])({ count: 2, units: 'words' }),
                    titleColor: getRandomColor(),
                    text: mtype === 'spotify' ? 'spotify:track:0QjjaCaXE45mvhCnV3C0TA' : (0, lorem_ipsum_1["default"])({ count: 1, units: 'sentences' }),
                    data: {
                        videoURL: token() >= 1 ? 'https://www.w3schools.com/html/mov_bbb.mp4' : 'http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4',
                        audioURL: 'https://www.w3schools.com/html/horse.mp3',
                        uri: "data:image/png;base64,".concat(photo(150)),
                        status: {
                            click: true,
                            loading: 0.5,
                            download: mtype === 'video'
                        },
                        size: "100MB",
                        width: 300,
                        height: 300,
                        latitude: '37.773972',
                        longitude: '-122.431297',
                        staticURL: 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-circle+FF0000(LONGITUDE,LATITUDE)/LONGITUDE,LATITUDE,ZOOM/270x200@2x?access_token=KEY'
                    },
                    onLoad: function () {
                        console.log('Photo loaded');
                    },
                    status: status,
                    date: +new Date(),
                    onReplyMessageClick: function () {
                        console.log('onReplyMessageClick');
                    },
                    onRemoveMessageClick: function () {
                        console.log('onRemoveMessageClick');
                    },
                    avatar: "data:image/png;base64,".concat(photo(20))
                };
            case 'chat':
                return {
                    id: String(Math.random()),
                    avatar: "data:image/png;base64,".concat(photo(20)),
                    avatarFlexible: true,
                    statusColor: 'lightgreen',
                    statusColorType: Math.floor(Math.random() * 100 % 2) === 1 ? 'encircle' : undefined,
                    alt: (0, lorem_ipsum_1["default"])({ count: 2, units: 'words' }),
                    title: (0, lorem_ipsum_1["default"])({ count: 2, units: 'words' }),
                    date: new Date(),
                    subtitle: (0, lorem_ipsum_1["default"])({ count: 1, units: 'sentences' }),
                    unread: Math.floor(Math.random() * 10 % 3),
                    muted: Math.floor(Math.random() * 10 % 2) === 1,
                    showMute: Math.floor(Math.random() * 10 % 2) === 1,
                    showVideoCall: Math.floor(Math.random() * 10 % 2) === 1,
                    dropdownMenu: (<src_1.Dropdown animationPosition="norteast" title='Dropdown Title' buttonProps={{
                            type: "transparent",
                            color: "#cecece",
                            icon: {
                                component: <md_1.MdOutlineMoreVert />,
                                size: 24
                            }
                        }} items={[
                            {
                                icon: {
                                    component: <fa_1.FaSquare />,
                                    float: 'left',
                                    color: 'red',
                                    size: 22
                                },
                                text: 'Menu Item'
                            },
                            {
                                icon: {
                                    component: <fa_1.FaSquare />,
                                    float: 'left',
                                    color: 'purple',
                                    size: 22
                                },
                                text: 'Menu Item'
                            },
                            {
                                icon: {
                                    component: <fa_1.FaSquare />,
                                    float: 'left',
                                    color: 'yellow',
                                    size: 22
                                },
                                text: 'Menu Item'
                            },
                        ]}/>)
                };
            case 'meeting':
                return {
                    id: String(Math.random()),
                    lazyLoadingImage: "data:image/png;base64,".concat(photo(20)),
                    avatarFlexible: true,
                    subject: (0, lorem_ipsum_1["default"])({ count: 1, units: 'sentences' }),
                    date: new Date(),
                    avatars: Array(token() + 2).fill(1).map(function (x) { return ({
                        src: "data:image/png;base64,".concat(photo(20))
                    }); }),
                    closable: true
                };
        }
    };
    var forceUpdate = useForceUpdate();
    var addMessage = function (mtype) {
        var list = messageList;
        list.push(random('message', mtype));
        setMessageList(list);
        clearRef();
        forceUpdate();
    };
    return (<div className='container'>
      <div className='chat-list'>
        <src_1.SideBar top={<div>
              <src_1.Popup 
        // show={show}
        header='Lorem ipsum dolor sit amet.' headerButtons={[{
                    type: 'transparent',
                    color: 'black',
                    onClick: function () {
                        setShow(false);
                    },
                    icon: {
                        component: <fa_1.FaTimes />,
                        size: 18
                    }
                }]} text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem animi veniam voluptas eius!' footerButtons={[{
                    color: 'white',
                    backgroundColor: '#ff5e3e',
                    text: "Vazgeç"
                }, {
                    color: 'white',
                    backgroundColor: 'lightgreen',
                    text: "Tamam"
                }]}/>

              <src_1.Button type='transparent' color='black' text={list === 'chat' ? 'MeetingList' : 'ChatList'} onClick={function () {
                setList(list === 'chat' ? 'meeeting' : 'chat');
            }}/>
            </div>} center={list === 'chat' ?
            <src_1.ChatList dataSource={chatSource} onClickMute={function (_a) {
                var props = __rest(_a, []);
                return console.log(props);
            }} onClickVideoCall={function (_a) {
                var props = __rest(_a, []);
                return console.log(props);
            }} onDragEnter={function (e, id) { return console.log(id, 'onDragEnter'); }} onDragLeave={function (e, id) { return console.log(id, 'onDragLeave'); }} onDrop={function (e, id) { return console.log(e, id, 'onDrop'); }} onDragComponent={function (id) { return <div className="on-drag-mlist">{(0, lorem_ipsum_1["default"])({ count: 4, units: 'words' })}</div>; }}/>
            :
                <src_1.MeetingList onMeetingClick={console.log} onShareClick={console.log} dataSource={meetingSource}/>} bottom={<span>
              <src_1.Button type='transparent' color='black' icon={{
                component: <fa_1.FaComments />,
                size: 18
            }}/>
              <src_1.Button type='transparent' color='black' icon={{
                component: <fa_1.FaSearch />,
                size: 18
            }}/>
              <src_1.Button text="Count"></src_1.Button>
            </span>}/>
    </div>
    <div className='right-panel'>
      <src_1.MessageList referance={messageListReferance} className='message-list' lockable={true} downButtonBadge={10} dataSource={messageList} sendMessagePreview={true} isShowChild={isShowChild} customProps={{
            onDragEnter: function (e) {
                e.preventDefault();
                console.log('onDragEnter');
                setIsShowChild(true);
            }
        }}>
        {preview ?
            <div className="on-drag-mlist" onClick={function () {
                    setIsShowChild(false);
                    setPreview(false);
                }}>preview click and finish</div>
            :
                <div className="on-drag-mlist" onDragOver={function (e) {
                        e.preventDefault();
                        console.log('onDragOver');
                    }} onDragLeave={function (e) {
                        e.preventDefault();
                        console.log('onDragLeave');
                        setIsShowChild(false);
                    }} onDrop={function (e) {
                        e.preventDefault();
                        console.log(e.dataTransfer.files, 'onDrop');
                        setPreview(true);
                    }}>
              {(0, lorem_ipsum_1["default"])({ count: 4, units: 'words' })}
          </div>}
      </src_1.MessageList>

      <src_1.Input placeholder="Mesajınızı buraya yazınız." defaultValue="" referance={inputReferance} clear={function (clear) { return clearRef = clear; }} 
    // buttonsFloat='left'
    onKeyPress={function (e) {
            if (e.shiftKey && e.charCode === 13) {
                return true;
            }
            if (e.charCode === 13) {
                clearRef();
                addMessage(8);
            }
        }} rightButtons={<src_1.Button text='Gönder' onClick={function () { return addMessage(8); }}/>}/>
      </div>
    </div>);
};
exports["default"] = App;
