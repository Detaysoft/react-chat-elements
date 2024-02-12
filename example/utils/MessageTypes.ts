import loremIpsum from 'lorem-ipsum'
import { MessageType } from '../../src/type'
import { getRandomColor, photo, token } from './common'
import { MdOutlineVideoCall } from 'react-icons/md'

export const photoMessage: MessageType = {
  type: 'photo',
  id: String(Math.random()),
  position: token() >= 1 ? 'right' : 'left',
  title: loremIpsum({ count: 2, units: 'words' }),
  focus: true,
  date: +new Date(),
  forwarded: true,
  replyButton: true,
  removeButton: true,
  notch: true,
  retracted: false,
  text: loremIpsum({ count: 1, units: 'sentences' }),
  titleColor: getRandomColor(),
  status: 'waiting',
  statusTitle: token() >= 5 ? 'Desktop' : 'Mobile',
  data: {
    uri: `data:image/png;base64,${photo(150)}`,
    status: {
      click: true,
      loading: 0.5,
      download: false, //type === "video",
      error: false,
    },
    width: 300,
    height: 300,
  },
}

export const locationMessage: MessageType = {
  type: 'location',
  markerColor: '',
  zoom: '',
  apiKey: '',
  status: 'received',
  statusTitle: token() >= 5 ? 'Desktop' : 'Mobile',
  id: String(Math.random()),
  position: token() >= 1 ? 'right' : 'left',
  text: loremIpsum({ count: 1, units: 'sentences' }),
  title: loremIpsum({ count: 2, units: 'words' }),
  focus: true,
  date: +new Date(),
  dateString: 'now',
  avatar: `data:image/png;base64,${photo(20)}`,
  titleColor: getRandomColor(),
  forwarded: true,
  replyButton: true,
  removeButton: true,
  notch: true,
  copiableDate: true,
  retracted: false,
  forwardedMessageText: 'Forwarded',
  className: '',
  data: {
    latitude: '37.773972',
    longitude: '-122.431297',
    staticURL:
      'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-circle+FF0000(LONGITUDE,LATITUDE)/LONGITUDE,LATITUDE,ZOOM/270x200@2x?access_token=KEY',
  },
  reply:
    token() >= 1
      ? {
          photoURL: token() >= 1 ? `data:image/png;base64,${photo(150)}` : null,
          title: loremIpsum({ count: 2, units: 'words' }),
          titleColor: getRandomColor(),
          message: loremIpsum({ count: 1, units: 'sentences' }),
        }
      : undefined,
}

export const fileMessage: MessageType = {
  type: 'file',
  data: {
    status: {
      click: () => {},
      loading: 0.5,
      download: () => {}, //item === "video",
      error: false,
    },
    size: '100MB',
  },
  status: 'sent',
  statusTitle: token() >= 5 ? 'Desktop' : 'Mobile',
  id: String(Math.random()),
  position: token() >= 1 ? 'right' : 'left',
  text: loremIpsum({ count: 1, units: 'sentences' }),
  title: loremIpsum({ count: 2, units: 'words' }),
  focus: false,
  date: +new Date(),
  dateString: 'now',
  avatar: `data:image/png;base64,${photo(20)}`,
  titleColor: getRandomColor(),
  forwarded: true,
  replyButton: true,
  removeButton: true,
  notch: true,
  copiableDate: true,
  retracted: false,
  forwardedMessageText: 'Forwarded',
  className: '',
  reply:
    token() >= 1
      ? {
          photoURL: token() >= 1 ? `data:image/png;base64,${photo(150)}` : null,
          title: loremIpsum({ count: 2, units: 'words' }),
          titleColor: getRandomColor(),
          message: loremIpsum({ count: 1, units: 'sentences' }),
        }
      : undefined,
}

export const systemMessage: MessageType = {
  type: 'system',
  id: String(Math.random()),
  position: token() >= 1 ? 'right' : 'left',
  text: loremIpsum({ count: 2, units: 'words' }),
  title: loremIpsum({ count: 2, units: 'words' }),
  focus: true,
  date: +new Date(),
  dateString: 'now',
  avatar: `data:image/png;base64,${photo(20)}`,
  titleColor: getRandomColor(),
  forwarded: true,
  replyButton: true,
  removeButton: true,
  status: 'received',
  statusTitle: token() >= 5 ? 'Desktop' : 'Mobile',
  notch: true,
  copiableDate: true,
  retracted: false,
  className: '',
}

export const spotifyMessage: MessageType = {
  type: 'spotify',
  id: String(Math.random()),
  position: token() >= 1 ? 'right' : 'left',
  text: loremIpsum({ count: 1, units: 'sentences' }),
  title: loremIpsum({ count: 2, units: 'words' }),
  focus: true,
  date: +new Date(),
  dateString: 'now',
  avatar: `data:image/png;base64,${photo(20)}`,
  titleColor: getRandomColor(),
  forwarded: true,
  replyButton: true,
  removeButton: true,
  notch: true,
  copiableDate: true,
  retracted: false,
  className: '',
  status: 'read',
  statusTitle: token() >= 5 ? 'Desktop' : 'Mobile',
  theme: 'white',
  view: 'list',
  width: 300,
  height: 300,
  uri: 'spotify:track:0QjjaCaXE45mvhCnV3C0TA',
  reply:
    token() >= 1
      ? {
          photoURL: token() >= 1 ? `data:image/png;base64,${photo(150)}` : null,
          title: loremIpsum({ count: 2, units: 'words' }),
          titleColor: getRandomColor(),
          message: loremIpsum({ count: 1, units: 'sentences' }),
        }
      : undefined,
}

export const videoMessage: MessageType = {
  type: 'video',
  id: String(Math.random()),
  position: token() >= 1 ? 'right' : 'left',
  text: loremIpsum({ count: 1, units: 'sentences' }),
  title: loremIpsum({ count: 2, units: 'words' }),
  focus: true,
  date: +new Date(),
  dateString: 'now',
  avatar: `data:image/png;base64,${photo(20)}`,
  titleColor: getRandomColor(),
  forwarded: true,
  replyButton: true,
  removeButton: true,
  controlsList: '',
  status: 'read',
  forwardedMessageText: 'Forwarded',
  statusTitle: token() >= 5 ? 'Desktop' : 'Mobile',
  data: {
    uri: `data:image/png;base64,${photo(150)}`,
    videoURL: token() >= 1 ? 'https://www.w3schools.com/html/mov_bbb.mp4' : 'http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4',
    status: {
      click: true,
      loading: 0.5,
      download: true, //item === "video",
      error: false,
    },
    width: 300,
    height: 200,
  },
  notch: true,
  copiableDate: true,
  retracted: false,
  className: '',
  reply:
    token() >= 1
      ? {
          photoURL: token() >= 1 ? `data:image/png;base64,${photo(150)}` : null,
          title: loremIpsum({ count: 2, units: 'words' }),
          titleColor: getRandomColor(),
          message: loremIpsum({ count: 1, units: 'sentences' }),
        }
      : undefined,
}

export const audioMessage: MessageType = {
  type: 'audio',
  id: String(Math.random()),
  position: token() >= 1 ? 'right' : 'left',
  text: loremIpsum({ count: 1, units: 'sentences' }),
  title: loremIpsum({ count: 2, units: 'words' }),
  focus: true,
  date: +new Date(),
  dateString: 'now',
  avatar: `data:image/png;base64,${photo(20)}`,
  titleColor: getRandomColor(),
  forwarded: true,
  replyButton: true,
  removeButton: true,
  status: 'received',
  statusTitle: token() >= 5 ? 'Desktop' : 'Mobile',
  notch: true,
  copiableDate: true,
  retracted: false,
  className: '',
  data: {
    audioURL: 'https://www.w3schools.com/html/horse.mp3',
    audioType: 'audio/mp3',
    controlsList: 'nodownload',
  },
  reply:
    token() >= 1
      ? {
          photoURL: token() >= 1 ? `data:image/png;base64,${photo(150)}` : null,
          title: loremIpsum({ count: 2, units: 'words' }),
          titleColor: getRandomColor(),
          message: loremIpsum({ count: 1, units: 'sentences' }),
        }
      : undefined,
}

export const meetingMessage: MessageType = {
  type: 'meeting',
  message: 'asd',
  id: String(Math.random()),
  position: token() >= 1 ? 'right' : 'left',
  text: 'spotify:track:0QjjaCaXE45mvhCnV3C0TA',
  title: loremIpsum({ count: 2, units: 'words' }),
  focus: true,
  date: +new Date(),
  dateString: 'now',
  avatar: `data:image/png;base64,${photo(20)}`,
  titleColor: getRandomColor(),
  forwarded: true,
  replyButton: true,
  removeButton: true,
  status: 'received',
  statusTitle: token() >= 5 ? 'Desktop' : 'Mobile',
  notch: true,
  copiableDate: true,
  retracted: false,
  className: '',
  forwardedMessageText: 'Forwarded',
  reply:
    token() >= 1
      ? {
          photoURL: token() >= 1 ? `data:image/png;base64,${photo(150)}` : null,
          title: loremIpsum({ count: 2, units: 'words' }),
          titleColor: getRandomColor(),
          message: loremIpsum({ count: 1, units: 'sentences' }),
        }
      : undefined,
  subject: loremIpsum({ count: 2, units: 'words' }),
  collapseTitle: loremIpsum({ count: 2, units: 'words' }),
  participants: Array(token() + 6)
    .fill(1)
    .map(x => ({
      id: Math.floor((Math.random() * 10) % 7),
      title: loremIpsum({ count: 1, units: 'words' }),
    })),
  dataSource: Array(token() + 5)
    .fill(1)
    .map(x => ({
      type: 'meeting',
      position: token() > 1 ? 'right' : 'left',
      text: loremIpsum({ count: 1, units: 'sentences' }),
      focus: false,
      titleColor: getRandomColor(),
      forwarded: true,
      replyButton: true,
      removeButton: true,
      status: 'received',
      notch: true,
      retracted: false,
      id: String(Math.random()),
      avatar: `data:image/png;base64,${photo(20)}`,
      message: loremIpsum({ count: 1, units: 'sentences' }),
      title: loremIpsum({ count: 2, units: 'words' }),
      avatarFlexible: true,
      date: +new Date(),
      event: {
        title: loremIpsum({ count: 2, units: 'words' }),
        avatars: Array(token() + 2)
          .fill(1)
          .map(x => ({
            src: `data:image/png;base64,${photo(20)}`,
            title: 'react, rce',
          })),
        avatarsLimit: 5,
      },
      record: {
        avatar: `data:image/png;base64,${photo(20)}`,
        title: loremIpsum({ count: 1, units: 'words' }),
        savedBy: 'Kaydeden: ' + loremIpsum({ count: 2, units: 'words' }),
        time: new Date().toLocaleString(),
      },
    })),
}

export const meetingLinkMessage: MessageType = {
  type: 'meetingLink',
  actionButtons: [
    {
      onClickButton(id) {
        console.log(id)
      },
      Component: () => MdOutlineVideoCall({ size: '25px' }),
    },
    {
      onClickButton(id) {
        console.log(id)
      },
      Component: () => MdOutlineVideoCall({ size: '25px' }),
    },
  ],
  meetingID: String(Math.random()),
  id: String(Math.random()),
  position: token() >= 1 ? 'right' : 'left',
  text: loremIpsum({ count: 1, units: 'sentences' }),
  title: loremIpsum({ count: 2, units: 'words' }),
  focus: true,
  date: +new Date(),
  dateString: 'now',
  avatar: `data:image/png;base64,${photo(20)}`,
  titleColor: getRandomColor(),
  forwarded: true,
  replyButton: true,
  removeButton: true,
  status: 'received',
  statusTitle: token() >= 5 ? 'Desktop' : 'Mobile',
  notch: true,
  copiableDate: true,
  retracted: false,
  className: '',
  reply:
    token() >= 1
      ? {
          photoURL: token() >= 1 ? `data:image/png;base64,${photo(150)}` : null,
          title: loremIpsum({ count: 2, units: 'words' }),
          titleColor: getRandomColor(),
          message: loremIpsum({ count: 1, units: 'sentences' }),
        }
      : undefined,
}

export const textMessage: MessageType = {
  type: 'text',
  id: String(Math.random()),
  position: token() >= 1 ? 'right' : 'left',
  text: loremIpsum({ count: 1, units: 'sentences' }),
  title: loremIpsum({ count: 2, units: 'words' }),
  focus: true,
  date: +new Date(),
  dateString: 'now',
  avatar: `data:image/png;base64,${photo(20)}`,
  titleColor: getRandomColor(),
  forwarded: true,
  replyButton: true,
  removeButton: true,
  status: 'received',
  statusTitle: token() >= 5 ? 'Desktop' : 'Mobile',
  notch: true,
  copiableDate: true,
  retracted: false,
  forwardedMessageText: 'Forwarded',
  className: '',
  reply:
    token() >= 1
      ? {
          photoURL: token() >= 1 ? `data:image/png;base64,${photo(150)}` : null,
          title: loremIpsum({ count: 2, units: 'words' }),
          titleColor: getRandomColor(),
          message: loremIpsum({ count: 1, units: 'sentences' }),
        }
      : undefined,
}
