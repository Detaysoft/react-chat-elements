interface IMessage {
  id: string | Number;
  position: string;
  text: string;
  title: string;
  titleColor?: string;
  data?: {
    videoURL: string;
    audioURL: string;
    uri: string;
    status: {
      click: Boolean;
      loading: Number;
      download: Boolean;
    };
    size: string;
    width: Number;
    height: Number;
    latitude: string;
    longitude: string;
    staticURL: string;
  };
  date: Date;
  dateString: string;
  forwarded?: Boolean;
  replyButton?: Boolean;
  removeButton?: Boolean;
  status?: string;
  notch?: Boolean;
  avatar: string;
  renderAddCmp?: Function;
  copiableDate?: Boolean | false;
  focus: boolean | false;
  reply?: IReply;
  retracted?: Boolean | false;
  className?: string;
  letterItem?: string;
}

interface IChat {
  id: string | Number;
  avatar: string;
  avatarFlexible: Boolean;
  alt: string;
  title: string;
  subtitle: string;
  date: Date;
  unread: number | 0;
}

interface IChatItemProps {
  chat: IChat;
  avatar?: string;
  className?: string;
  avatarFlexible?: Boolean;
  alt?: string;
  title?: string;
  subtitle?: string;
  date?: Date;
  dateString?: string;
  statusColor?: string;
  statusColorType?: string;
  statusText?: string;
  lazyLoadingImage?: string;
  muted?: Boolean;
  showMute?: Boolean;
  showVideoCall?: Boolean;
  onAvatarError?: Function;
  onContextMenu?: React.MouseEventHandler;
  onClick?: React.MouseEventHandler;
  onClickMute?: React.MouseEventHandler;
  onClickVideoCall?: React.MouseEventHandler;
  onDragOver?: Function;
  onDragEnter?: Function;
  onDrop?: Function;
  onDragLeave?: Function;
  onDragComponent?: any;
  letterItem?: string;
}

interface IChatListProps {
  id: string | Number;
  dataSource: IChat[];
  cmpRef?: Ref<HTMLButtonElement>;
  onAvatarError?: ChatListEvent;
  onContextMenu?: ChatListEvent;
  onClick?: ChatListEvent;
  onClickMute?: ChatListEvent;
  onClickVideoCall?: ChatListEvent;
  onDragOver?: React.DragEventHandler;
  onDragEnter?: React.DragEventHandler;
  onDrop?: React.DragEventHandler;
  onDragLeave?: React.DragEventHandler;
  onDragComponent?: React.ReactChild;
  lazyLoadingImage: string;
  className?: string;
}

type ChatListEvent = (item: IChat, index: Number, event: React.MouseEvent<HTMLElement>) => any;

interface IDefaultProps {
  style: {
    [key: string]: unknown;
  };
  onClick: Function;
}

interface IAudioMessage extends IMessage {
  audioURL: string;
  audioType: string;
}

interface IAudioMessageProps {
  message: IAudioMessage;
  audioProps?: {
    [key: string]: unknown;
  };
  customStyle?: any;
  type?: 'audio';
  onOpen?: Function;
  onDownload?: Function;
  onLoad?: Function;
}

interface IMessageItemProps {
  message: IMessage;
  messageItem?: MessageItem;
  onOpen?: Function;
  onDownload?: Function;
  onLoad?: Function;
  onPhotoError?: Function;
  toBottomHeight?: Number | String;
  onClick?: React.MouseEventHandler;
  onTitleClick?: React.MouseEventHandler;
  onForwardClick?: React.MouseEventHandler;
  onReplyClick?: React.MouseEventHandler;
  onMeetingMessageClick?: React.MouseEventHandler;
  onMeetingTitleClick?: Function;
  onMeetingVideoLinkClick?: Function;
  onReplyMessageClick?: React.MouseEventHandler;
  onRemoveMessageClick?: React.MouseEventHandler;
  onMeetingLinkClick?: React.MouseEventHandler;
  onMeetingMoreSelect?: Function;
  onContextMenu?: React.MouseEventHandler;
  renderAddCmp?: Function;
  onMessageFocused: any;
}

interface IMessageListProps {
  dataSource: IMessage[];
  referance: RefObject<HTMLElement>;
  className?: string;
  lockable: Boolean;
  toBottomHeight?: String | Number;
  downButton: Boolean;
  downButtonBadge: Boolean;
  customProps?: {
    [key: string]: unknown;
  };
  isShowChild?: Boolean;
  onContextMenu?: MessageListEvent;
  onDownButtonClick?: RefObject<HTMLButtonElement>;
  onOpen?: Function;
  onDownload?: Function;
  onScroll?: Function;
  onPhotoError?: Function;
  onMeetingMoreSelect?: Function;
  onMessageFocused?: Function;
  onClick?: MessageListEvent;
  onForwardClick?: MessageListEvent;
  onReplyClick?: MessageListEvent;
  onReplyMessageClick?: MessageListEvent;
  onTitleClick?: MessageListEvent;
  onRemoveMessageClick?: MessageListEvent;
  onMeetingMessageClick?: MessageListEvent;
  onMeetingTitleClick?: MessageListEvent;
  onMeetingVideoLinkClick?: MessageListEvent;
  onMeetingLinkClick?: MessageListEvent;
}

type MessageListEvent = (item: IMessage, index: Number, event: React.MouseEvent<HTMLElement>) => any;
type MessageItem = ILocationMessageProps | IPhotoMessageProps | IVideoMessageProps | ISpotifyMessageProps | IMeetingMessageProps | IAudioMessageProps | IMeetingLinkProps | IFileMessageProps | ITextMessageProps | ISystemMessageProps;

interface IReply extends IMessage {
  photoURL?: string;
  title?: string;
  titleColor?: string;
  message?: string;
}

interface ILocationMessageProps extends IMessage {
  target?: string;
  href?: string;
  apiKey?: string;
  src?: string;
  zoom?: string;
  markerColor?: string;
  text?: string;
  type?: 'location';
}

interface IPhotoMessageProps extends IMessage {
  width?: string;
  height?: string;
  text?: string;
  type?: 'photo';
}

interface IVideoMessageProps extends IMessage {
  width?: string;
  height?: string;
  text?: string;
  type?: 'video';
}

interface ISpotifyMessageProps extends IMessage {
  width?: string;
  height?: string;
  theme?: string;
  view?: string;
  data?: string;
  uri?: string;
  type?: 'spotify';
}

interface IMeetingLinkProps {
  meetingID?: Messagestring;
  title?: string;
  type?: 'meetingLink';
  onMeetingLinkClick?: Function;
  onMeetingMoreSelect?: Function;
}

interface IMeetingMessage extends IMessage {
  id?: string;
  avatar?: string;
  message?: string;
  title?: string;
  avatarFlexible?: Boolean;
  date?: Date;
  event?: {
    title?: string;
    avatars?: Array<{
      src?: string;
      title?: string;
    }>;
    avatarsLimit?: any;
  };
  record?: {
    avatar?: string;
    title?: string;
    savedBy?: string;
    time?: Date;
  };
}

interface IMeetingMessageProps{
  subject?: string;
  title?: string;
  date?: Date;
  dateString?: string;
  collapseTitle?: string;
  participants?: Array<{
    id?: Number | string;
    title?: string;
  }>;
  moreItems?: Array<{
    text: string,
    icon: {
      component?: any;
      float: string;
      color: string;
      size: Number;
    }
  }>;
  dataSource?: IMeetingMessage[];
  participantsLimit?: number;
  onClick?: Function;
  onMeetingTitleClick?: MeetingMessageEvent;
  onMeetingVideoLinkClick?: MeetingMessageEvent;
  onMeetingMoreSelect?: Function;
  type?: 'meeting';
}

type MeetingMessageEvent = (item: IMeetingMessage, index: Number , event: React.MouseEvent<HTMLElement>) => any;

interface IFileMessageProps {
  type?: 'file';
}

interface ITextMessageProps {
  type?: 'text';
}

interface ISystemMessageProps {
  type?: 'system';
}

interface IMeeting {
  id: string | Number;
  avatarFlexible?: Boolean;
  avatars?: Array<{
    src?: string;
  }>
  closable?: Boolean;
  date?: Date;
  lazyLoadingImage?: string;
  subject?: string;
}

interface IMeetingListProps {
  cmpRef?: RefObject<HTMLElement>;
  className?: string;
  dataSource?: IMeeting[];
  lazyLoadingImage?: string;
  onClick?: MeetingListEvent;
  onMeetingClick?: MeetingListEvent;
  onShareClick?: MeetingListEvent;
  onCloseClick?: MeetingListEvent;
  onContextMenu?: MeetingListEvent;
  onAvatarError?: MeetingListEvent;
}

type MeetingListEvent = (item: IMeeting, index: number, event: React.MouseEvent<HTMLElement>) => any;

interface IMeetingItemProps {
  meet?: IMeeting;
  subject?: string;
  subjectLimit?: number;
  avatarFlexible?: Boolean;
  alt?: string;
  title?: string;
  subtitle?: string;
  statusColorType?: string;
  date?: Date;
  className?: string;
  dateString?: string;
  lazyLoadingImage?: string;
  avatarLimit?: number;
  avatars?: Array<{
    src?: string;
    alt?: string;
    statusColorType?: string;
    statusColor?: string;
    letterItem?: string;
    statusText?: string;
  }>;
  audioMuted?: boolean;
  audioSource?: string;
  onClick?: React.MouseEventHandler;
  onAvatarError?: React.MouseEventHandler;
  onMeetingClick?: React.MouseEventHandler;
  onShareClick?: React.MouseEventHandler;
  onContextMenu?: React.MouseEventHandler;
  onCloseClick?: React.MouseEventHandler;
}

interface ISideBarProps {
  type?: string;
  className?: string;
  top?: any;
  center?: any;
  bottom?: any;
}