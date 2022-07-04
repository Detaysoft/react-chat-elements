import { useRef, useState } from 'react'
import Button from '../../src/Button/Button'
import Input from '../../src/Input/Input'
import MessageList from '../../src/MessageList/MessageList'
import { token } from '../utils/common'
import {
  audioMessage,
  fileMessage,
  locationMessage,
  meetingLinkMessage,
  meetingMessage,
  photoMessage,
  spotifyMessage,
  systemMessage,
  textMessage,
  videoMessage,
} from '../utils/MessageTypes'

let clearRef = () => {}

function useForceUpdate() {
  const [value, setValue] = useState(0)
  return () => setValue(() => value + 1)
}

function MessageListExample() {
  const [messageListArray, setMessageListArray] = useState<any>([])
  const [status, setStatus] = useState<string>('')
  const messageListReferance = useRef()
  const inputReferance = useRef()

  const forceUpdate = useForceUpdate()

  const addMessage = (data: number) => {
    let Addmtype: string | number = data || token()
    switch (data) {
      case 0:
        Addmtype = 'photo'
        setStatus('waiting')
        break
      case 1:
        Addmtype = 'file'
        setStatus('sent')
        break
      case 2:
        Addmtype = 'system'
        break
      case 3:
        Addmtype = 'location'
        setStatus('received')
        break
      case 4:
        Addmtype = 'spotify'
        setStatus('waiting')
        break
      case 5:
        Addmtype = 'meeting'
        setStatus('sent')
        break
      case 6:
        Addmtype = 'video'
        setStatus('read')
        break
      case 7:
        Addmtype = 'audio'
        break
      case 8:
        Addmtype = 'meetingLink'
        break
      default:
        Addmtype = 'text'
        setStatus('read')
        break
    }

    setMessageListArray([...messageListArray, randomMessage(Addmtype)])
    clearRef()
    forceUpdate()
  }

  const randomMessage = (type: string) => {
    switch (type) {
      case 'photo':
        return photoMessage
      case 'file':
        return fileMessage
      case 'system':
        return systemMessage
      case 'location':
        return locationMessage
      case 'spotify':
        return spotifyMessage
      case 'meeting':
        return meetingMessage
      case 'video':
        return videoMessage
      case 'audio':
        return audioMessage
      case 'meetingLink':
        return meetingLinkMessage
      case 'text':
        return textMessage
      default:
        break
    }
  }

  return (
    <div className='right-panel rce-example-messageList'>
      <MessageList
        className='message-list'
        referance={messageListReferance}
        dataSource={messageListArray}
        lockable={true}
        downButton={false}
        downButtonBadge={10}
        sendMessagePreview={true}
      />

      <div
        style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          left: 0,
          margin: '0 auto 1rem auto',
          width: '60%',
        }}
      >
        <Input
          className='rce-example-input'
          placeholder='Write your message here.'
          defaultValue=''
          referance={inputReferance}
          clear={(clear: any) => (clearRef = clear)}
          maxHeight={50}
          onKeyPress={(e: any) => {
            if (e.shiftKey && e.charCode === 13) {
              return true
            }
            if (e.charCode === 13) {
              clearRef()
              addMessage(token())
            }
          }}
          rightButtons={<Button text='Submit' onClick={() => addMessage(token())} />}
        />
      </div>
    </div>
  )
}

export default MessageListExample
