import Identicon from 'identicon.js'
import loremIpsum from 'lorem-ipsum'
import React, { useEffect, useState } from 'react'
import { FaSquare } from 'react-icons/fa'
import { MdOutlineMoreVert } from 'react-icons/md'
import ChatList from '../../src/ChatList/ChatList'
import Dropdown from '../../src/Dropdown/Dropdown'
import SideBar from '../../src/SideBar/SideBar'

function ChatListExample() {
  const photo = (size: number) => {
    return new Identicon(String(Math.random()) + String(Math.random()), {
      margin: 0,
      size: size || 20,
    }).toString()
  }

  const [chatListAray, setChatListAray] = useState([
    {
      id: String(Math.random()),
      avatar: `data:image/png;base64,${photo(20)}`,
      avatarFlexible: true,
      statusColor: 'lightgreen',
      statusColorType: Math.floor((Math.random() * 100) % 2) === 1 ? 'encircle' : undefined,
      alt: loremIpsum({ count: 2, units: 'words' }),
      title: loremIpsum({ count: 2, units: 'words' }),
      date: new Date(),
      subtitle: loremIpsum({ count: 1, units: 'sentences' }),
      unread: Math.floor((Math.random() * 10) % 3),
      muted: Math.floor((Math.random() * 10) % 2) === 1,
      showMute: Math.floor((Math.random() * 10) % 2) === 1,
      showVideoCall: Math.floor((Math.random() * 10) % 2) === 1,
      dropdownMenu: (
        <Dropdown
          onSelect={() => {}}
          animationPosition='norteast'
          title='Dropdown Title'
          buttonProps={{
            type: 'transparent',
            color: '#cecece',
            icon: {
              component: <MdOutlineMoreVert />,
              size: 24,
            },
          }}
          items={[
            {
              icon: {
                component: <FaSquare />,
                float: 'left',
                color: 'red',
                size: 22,
              },
              text: 'Menu Item',
            },
            {
              icon: {
                component: <FaSquare />,
                float: 'left',
                color: 'purple',
                size: 22,
              },
              text: 'Menu Item',
            },
            {
              icon: {
                component: <FaSquare />,
                float: 'left',
                color: 'yellow',
                size: 22,
              },
              text: 'Menu Item',
            },
          ]}
        />
      ),
    },
  ])

  useEffect(() => {
    if (chatListAray.length === 5) return
    setChatListAray([
      ...chatListAray,
      {
        id: String(Math.random()),
        avatar: `data:image/png;base64,${photo(20)}`,
        avatarFlexible: true,
        statusColor: 'lightgreen',
        statusColorType: Math.floor((Math.random() * 100) % 2) === 1 ? 'encircle' : undefined,
        alt: loremIpsum({ count: 2, units: 'words' }),
        title: loremIpsum({ count: 2, units: 'words' }),
        date: new Date(),
        subtitle: loremIpsum({ count: 1, units: 'sentences' }),
        unread: Math.floor((Math.random() * 10) % 3),
        muted: Math.floor((Math.random() * 10) % 2) === 1,
        showMute: Math.floor((Math.random() * 10) % 2) === 1,
        showVideoCall: Math.floor((Math.random() * 10) % 2) === 1,
        dropdownMenu: (
          <Dropdown
            onSelect={() => {}}
            animationPosition='norteast'
            title='Dropdown Title'
            buttonProps={{
              type: 'transparent',
              color: '#cecece',
              icon: {
                component: <MdOutlineMoreVert />,
                size: 24,
              },
            }}
            items={[
              {
                icon: {
                  component: <FaSquare />,
                  float: 'left',
                  color: 'red',
                  size: 22,
                },
                text: 'Menu Item',
              },
              {
                icon: {
                  component: <FaSquare />,
                  float: 'left',
                  color: 'purple',
                  size: 22,
                },
                text: 'Menu Item',
              },
              {
                icon: {
                  component: <FaSquare />,
                  float: 'left',
                  color: 'yellow',
                  size: 22,
                },
                text: 'Menu Item',
              },
            ]}
          />
        ),
      },
    ])
  }, [chatListAray])

  return (
    <div className='chat-list'>
      <SideBar
        data={{
          center: (
            <ChatList
              dataSource={chatListAray}
              onClickMute={({ ...props }) => console.log(props)}
              onClickVideoCall={({ ...props }) => console.log(props)}
              id={''}
              lazyLoadingImage={''}
              onDragEnter={(e: React.DragEventHandler, id: number) => console.log(e, id, 'onDragEnter')}
              onDragLeave={(e: React.DragEventHandler, id: number) => console.log(e, id, 'onDragLeave')}
              onDrop={(e: React.DragEventHandler, id: number) => console.log(e, id, 'onDrop')}
              onDragComponent={() => {
                ;<div className='on-drag-mlist'>{loremIpsum({ count: 4, units: 'words' })}</div>
              }}
            />
          ),
        }}
      />
    </div>
  )
}

export default ChatListExample
