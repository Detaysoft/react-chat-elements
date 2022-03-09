import React, { useEffect, useState, useRef } from 'react';
import {
    ChatList,
    MessageList,
    Input,
    Button,
    SideBar,
    Dropdown,
    Popup,
    MeetingList,
} from '../src';

import FaSearch from 'react-icons/lib/fa/search';
import FaComments from 'react-icons/lib/fa/comments';
import FaClose from 'react-icons/lib/fa/close';
import FaMenu from 'react-icons/lib/md/more-vert';
import FaSquare from 'react-icons/lib/md/crop-square';

import loremIpsum from 'lorem-ipsum';
import Identicon from 'identicon.js';

let clearRef = () => {};

function useForceUpdate(){
  const [value, setValue] = useState(0);
  return () => setValue(value => value + 1);
};

function App() {
  const messageListReferance = useRef();
  const inputReferance = useRef();

  const [show, setShow] = useState(true);
  const [list, setList] = useState('chat');
  const [messageList, setMessageList] = useState([]);
  const [chatSource, setChatSource] = useState([]);
  const [meetingSource, setMeetingSource] = useState([]);
  const [isShowChild, setIsShowChild] = useState(false);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    addMessage(8);

    var arr = [];
    for (var i = 0; i < 5; i++)
        arr.push(i);

    setChatSource(arr.map(x => random('chat')));
    setMeetingSource(arr.map(x => random('meeting')));
  }, []);

  const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const token = () => {
    return (parseInt(Math.random() * 10 % 8));
  }

  const photo = (size) => {
    return new Identicon(String(Math.random()) + String(Math.random()), {
      margin: 0,
      size: size || 20,
    }).toString()
  }

  const random = (type, mtype) => {
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
            photoURL: token() >= 1 ? `data:image/png;base64,${photo(150)}` : null,
            title: loremIpsum({ count: 2, units: 'words' }),
            titleColor: getRandomColor(),
            message: loremIpsum({ count: 1, units: 'sentences' }),
          }) : null,
          meeting: token() >= 1 ? ({
            subject: loremIpsum({ count: 2, units: 'words' }),
            title: loremIpsum({ count: 2, units: 'words' }),
            date: +new Date(),
            collapseTitle: loremIpsum({ count: 2, units: 'words' }),
            participants: Array(token() + 6).fill(1).map(x => ({
              id: parseInt(Math.random() * 10 % 7),
              title: loremIpsum({ count: 1, units: 'words' }),
            })),
            dataSource: Array(token() + 5).fill(1).map(x => ({
              id: String(Math.random()),
              avatar: `data:image/png;base64,${photo()}`,
              message: loremIpsum({ count: 1, units: 'sentences' }),
              title: loremIpsum({ count: 2, units: 'words' }),
              avatarFlexible: true,
              date: +new Date(),
              event: {
                title: loremIpsum({ count: 2, units: 'words' }),
                avatars: Array(token() + 2).fill(1).map(x => ({
                  src: `data:image/png;base64,${photo()}`,
                  title: "react, rce"
                })),
                avatarsLimit: 5,
              },
              record: {
                avatar: `data:image/png;base64,${photo()}`,
                title: loremIpsum({ count: 1, units: 'words' }),
                savedBy: 'Kaydeden: ' + loremIpsum({ count: 2, units: 'words' }),
                time: new Date().toLocaleString(),
              },
            })),
          }) : null,
          type: mtype,
          theme: 'white',
          view: 'list',
          title: loremIpsum({ count: 2, units: 'words' }),
          titleColor: getRandomColor(),
          text: mtype === 'spotify' ? 'spotify:track:0QjjaCaXE45mvhCnV3C0TA' : loremIpsum({ count: 1, units: 'sentences' }),
          data: {
            videoURL: token() >= 1 ? 'https://www.w3schools.com/html/mov_bbb.mp4' : 'http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4',
            audioURL: 'https://www.w3schools.com/html/horse.mp3',
            uri: `data:image/png;base64,${photo(150)}`,
            status: {
              click: true,
              loading: 0.5,
              download: mtype === 'video',
            },
            size: "100MB",
            width: 300,
            height: 300,
            latitude: '37.773972',
            longitude: '-122.431297',
            staticURL: 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-circle+FF0000(LONGITUDE,LATITUDE)/LONGITUDE,LATITUDE,ZOOM/270x200@2x?access_token=KEY',
          },
          onLoad: () => {
            console.log('Photo loaded');
          },
          status: status,
          date: +new Date(),
          onReplyMessageClick: () => {
            console.log('onReplyMessageClick');
          },
          onRemoveMessageClick: () => {
            console.log('onRemoveMessageClick');
          },
          avatar: `data:image/png;base64,${photo()}`,
        };
      case 'chat':
        return {
          id: String(Math.random()),
          avatar: `data:image/png;base64,${photo()}`,
          avatarFlexible: true,
          statusColor: 'lightgreen',
          statusColorType: parseInt(Math.random() * 100 % 2) === 1 ? 'encircle' : undefined,
          alt: loremIpsum({ count: 2, units: 'words' }),
          title: loremIpsum({ count: 2, units: 'words' }),
          date: new Date(),
          subtitle: loremIpsum({ count: 1, units: 'sentences' }),
          unread: parseInt(Math.random() * 10 % 3),
          muted: parseInt(Math.random() * 10 % 2) === 1,
          showMute: parseInt(Math.random() * 10 % 2) === 1,
          showVideoCall: parseInt(Math.random() * 10 % 2) === 1,
          dropdownMenu: (
            <Dropdown
              animationPosition="norteast"
              title='Dropdown Title'
              buttonProps={{
                type: "transparent",
                color: "#cecece",
                icon: {
                  component: <FaMenu />,
                  size: 24,
                }
              }}
              items={[
                {
                  icon: {
                    component: <FaSquare />,
                    float: 'left',
                    color: 'red',
                    size: 22,
                  },
                  text: 'Menu Item'
                },
                {
                  icon: {
                    component: <FaSquare/>,
                    float: 'left',
                    color: 'purple',
                    size: 22,
                  },
                  text: 'Menu Item'
                },
                {
                  icon: {
                    component: <FaSquare/>,
                    float: 'left',
                    color: 'yellow',
                    size: 22,
                  },
                  text: 'Menu Item'
                },
              ]} />
          ),
        };
      case 'meeting':
        return {
          id: String(Math.random()),
          lazyLoadingImage: `data:image/png;base64,${photo()}`,
          avatarFlexible: true,
          subject: loremIpsum({ count: 1, units: 'sentences' }),
          date: new Date(),
          avatars: Array(token() + 2).fill(1).map(x => ({
            src: `data:image/png;base64,${photo()}`,
          })),
          closable: true,
        };
    }
  }

  const forceUpdate = useForceUpdate();

  const addMessage = (mtype) => {
    var list = messageList;
    list.push(random('message', mtype));
    setMessageList(list);
    clearRef();
    forceUpdate();
  }

  return (
    <div className='container'>
      <div className='chat-list'>
        <SideBar
          top={
            <div>
              <Popup
                // show={show}
                header='Lorem ipsum dolor sit amet.'
                headerButtons={[{
                  type: 'transparent',
                  color: 'black',
                  onClick: () => {
                    setShow(false);
                  },
                  icon: {
                    component: <FaClose />,
                    size: 18
                  }
                }]}
                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem animi veniam voluptas eius!'
                footerButtons={[{
                  color: 'white',
                  backgroundColor: '#ff5e3e',
                  text: "Vazgeç",
                }, {
                  color: 'white',
                  backgroundColor: 'lightgreen',
                  text: "Tamam",
                }]} />

              <Button
                type='transparent'
                color='black'
                text={list === 'chat' ? 'MeetingList' : 'ChatList'}
                onClick={() => {
                  setList(list === 'chat' ? 'meeeting' : 'chat' );
                }}/>
            </div>
          }
          center={
            list === 'chat' ?
            <ChatList
              dataSource={chatSource}
              onClickMute={({...props}) => console.log(props)}
              onClickVideoCall={({...props}) => console.log(props)}
              onDragEnter={(e, id) => console.log(id, 'onDragEnter')}
              onDragLeave={(e, id) => console.log(id, 'onDragLeave')}
              onDrop={(e, id) => console.log(e, id, 'onDrop')}
              onDragComponent={(id)=> <div className="on-drag-mlist">{loremIpsum({ count: 4, units: 'words' })}</div>} />
            :
            <MeetingList
              onMeetingClick={console.log}
              onShareClick={console.log}
              dataSource={meetingSource} />
          }
          bottom={
            <span>
              <Button
                type='transparent'
                color='black'
                icon={{
                  component: <FaComments />,
                  size: 18
                }} />
              <Button
                type='transparent'
                color='black'
                icon={{
                  component: <FaSearch />,
                  size: 18
                }} />
              <Button text="Count"></Button>
            </span>
          } />
    </div>
    <div className='right-panel'>
      <MessageList
        referance={messageListReferance}
        className='message-list'
        lockable={true}
        downButtonBadge={10}
        dataSource={messageList}
        sendMessagePreview={true}
        isShowChild={isShowChild}
        customProps={{
          onDragEnter: (e) => {
            e.preventDefault()
            console.log('onDragEnter')
            setIsShowChild(true);
          }
        }} >
        {
          preview ?
              <div
              className="on-drag-mlist"
              onClick={()=> {
                setIsShowChild(false);
                setPreview(false);
              }}>preview click and finish</div>
          :
          <div
              className="on-drag-mlist"
              onDragOver={(e) => {
                e.preventDefault()
                console.log('onDragOver')
              }}
              onDragLeave={(e) => {
                e.preventDefault()
                console.log('onDragLeave')
                setIsShowChild(false);
              }}
              onDrop={(e) => {
                e.preventDefault()
                console.log(e.dataTransfer.files, 'onDrop')
                setPreview(true);
              }}>
              {loremIpsum({ count: 4, units: 'words' })}
          </div>
        }
      </MessageList>

      <Input
        placeholder="Mesajınızı buraya yazınız."
        defaultValue=""
        referance={inputReferance}
        clear={(clear) => clearRef = clear}
        // buttonsFloat='left'
        onKeyPress={(e) => {
          if (e.shiftKey && e.charCode === 13) {
            return true;
          }
          if (e.charCode === 13) {
            clearRef();
            addMessage();
          }
        }}
        rightButtons={
          <Button
            text='Gönder'
            onClick={() => addMessage()} />
        } />
      </div>
  </div>
  )
}

export default App;
