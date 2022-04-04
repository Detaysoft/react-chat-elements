interface IMessage {
  id: string | Number;
  position: string;
  text: string;
  title: string;
  titleColor?: string;
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
  retracted?: Boolean | false;
  className?: string;
  letterItem?: ILetterItem;
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
  avatar: string;
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
  onAvatarError?: React.EventHandler;
  onContextMenu?: React.MouseEventHandler;
  onClick?: React.MouseEventHandler;
  onClickMute?: React.MouseEventHandler;
  onClickVideoCall?: React.MouseEventHandler;
  onDragOver?: Function;
  onDragEnter?: Function;
  onDrop?: Function;
  onDragLeave?: Function;
  onDragComponent?: any;
  letterItem?: ILetterItem;
}
interface ILetterItem {
	id: string;
	letter?: React.ReactChild;
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
  reply?: IReplyMessageProps;
  messageItem?: MessageItem;
  onOpen?: React.MouseEventHandler;
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
  onMeetingMoreSelect?: React.ReactEventHandler;
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
type MessageItem = ILocationMessageProps | IPhotoMessageProps | IVideoMessageProps | ISpotifyMessageProps | IMeetingMessageProps | IAudioMessageProps | IMeetingLinkProps | IFileMessageProps | ITextMessageProps | ISystemMessageProps | IReplyMessageProps;

interface IProgressOptions {
  state: {
    color: string;
    width: string;
  };
  circle: {
    path:{
      setAttribute: (arg0: string, arg1: string | undefined) => void;
    };
    value: () => number; setText: (arg0: string | number) => void;
  };
}

interface IPhotoMessage extends IMessage {
  status?: {
    error?: boolean;
    loading?: number;
    download?: boolean;
    click?: boolean;
  };
  width?: number;
  height?: number;
  uri: string;
  alt?: string;
}

interface IPhotoMessageProps {
  data: IPhotoMessage;
  onDownload?: Function;
  onOpen?: Function;
  onLoad?: Function;
  onPhotoError?: Function;
  type?: 'photo';
}

interface IVideoMessageProps {
  type?: 'video';
  data: IVideoMessage;
  onDownload?: Function;
  onOpen?: Function;
  onLoad?: Function;
  onPhotoError?: Function;
}

interface IVideoMessage extends IMessage {
  videoURL: string;
  uri: string;
  width?: number | 0;
  height?: number | 0;
  alt?: string;
  status: {
    error?: boolean;
    download?: boolean;
    click?: boolean;
    loading?: number;
  };
}

interface ISpotifyMessageProps {
  data: ISpotifyMessage;
  uri: string;
  type?: 'spotify';
}

interface ISpotifyMessage extends IMessage {
  theme?: string;
  view?: string;
  uri: string;
  width?: number | string;
  height?: number | string;
}

interface IReplyMessage extends IMessage {
  photoURL?: string;
  title?: string;
  titleColor?: string;
  message?: string;
}

interface IReplyMessageProps {
  data: IReplyMessage;
  onClick?: React.MouseEventHandler;
  type?: 'reply';
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
    avatars?: IAvatarProps[];
    avatarsLimit?: any;
  };
  record?: {
    avatar: IAvatarProps;
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
    text?: string,
    icon?: {
      component?: any;
      float?: string;
      color?: string;
      size?: number;
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
  text: string;
  className?: string;
}

interface IMeeting {
  id: string | Number;
  avatarFlexible?: Boolean;
  avatars?: IAvatarProps[];
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
  avatars?: IAvatarProps[];
  audioMuted?: boolean;
  audioSource?: string;
  onClick?: React.MouseEventHandler;
  onAvatarError?: React.MouseEventHandler;
  onMeetingClick?: React.MouseEventHandler;
  onShareClick?: React.MouseEventHandler;
  onContextMenu?: React.MouseEventHandler;
  onCloseClick?: React.MouseEventHandler;
}

interface ILocationMessageProps {
  type?: 'location';
  data: ILocationMessageData;
  markerColor: string;
  zoom: string;
  apiKey: string;
  className?: string;
  text?: string;
  src?: string;
  onOpen?: React.MouseEventHandler;
  target?: string;
  href?: string;
  onError?: React.ReactEventHandler;
}

interface ILocationMessageData extends IMessage {
  latitude: string;
  longitude: string;
  staticURL?: string;
  mapURL?: string
}

interface IInputProps {
  autofocus?: boolean;
  referance?: any; // sor ve 46.satır
  clear?: Function;
  maxlength?: number;
  maxHeight: number;
  onMaxLengthExceed?: Function;
  onChange?: Function;
  multiline?: boolean;
  autoHeight?: boolean;
  minHeight?: number;
  className?: string;
  leftButtons?: Object;
  rightButtons?: Object;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  defaultValue?: string
  inputStyle?: Object;
  onCopy?: React.ClipboardEventHandler;
  onCut?: React.ClipboardEventHandler;
  onPaste?: React.ClipboardEventHandler;
  onBlur?: React.FocusEventHandler;
  onFocus?: React.FocusEventHandler;
  onSelect?: React.ReactEventHandler;
  onSubmit?: React.FormEventHandler;
  onReset?: React.FormEventHandler;
  onKeyDown?: React.KeyboardEventHandler;
  onKeyPress?: React.KeyboardEventHandler;
  onKeyUp?: React.KeyboardEventHandler;
}

interface IFileMessageProps {
  onDownload?: Function;
  onOpen?: Function;
  text?: string;
  data?: IFileMessageData;
}

interface IFileMessageData extends IMessage {
  status?: IFileMessageDataStatus;
  size?: string;
}

interface IFileMessageDataStatus {
  error?: boolean;
  download?: Function;
  click?: Function;
  loading?: number;
}

interface IDropdownProps {
  className?: string;
  buttonProps?: Object;
  animationType?: string;
  animationPosition?: string;
  title?: string;
  items?: IDropdownItemType[];
  onSelect: Function;
}
interface ICircleProps {
  animate: number;
  progressOptions?: Object;
  className?: string;
}
interface IButtonProps {
  title?: string;
  text?: string;
  buttonRef?: RefObject<HTMLButtonElement>;
  type?: string;
  className?: string;
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  icon?: IButtonIcon;
}

interface IButtonIcon {
  float?: any;
  size?: number;
  component?: React.ReactChild;
}

type IDropdownItemType = IDropdownItem | string;

interface IDropdownItem {
  icon?: IDropdownItemIcon;
  text?: string;
}

interface IDropdownItemIcon {
  float?: any;
  color?: string;
  size?: number;
  className?: string;
  component?: React.ReactChild;
}

interface ISideBarProps {
  type?: string;
  data: ISideBar;
}

interface ISideBar {
  top?: any;
  center?: any;
  bottom?: any
  className?: string;
}

interface IPopup {
  show?: boolean;
  header?: string;
  text?: string;
  footerButtons?: Array<{
    color?: string;
    backgroundColor?: string;
    text?: string;
  }>
  headerButtons?: Array<{
    type?: string;
    color?: string;
    icon?: {
      component?: React.ReactChild;
      size?: number;
    };
    onClick?: React.MouseEventHandler;
  }>;
  renderHeader?: Function;
  renderContent?: Function;
  renderFooter?: Function;
  color?: string;
}

interface IPopupProps {
  popup: IPopup;
  type?: string;
  className?: string;
}
interface IAvatarProps {
	src: string;
  title?: string;
	lazyLoadingImage?: string;
	letterItem?: ILetterItem;
	type?: string;
	size?: string;
	className?: string;
	alt?: string;
	sideElement?: React.ReactChild;
	onError?: React.ReactEventHandler;
  statusColorType?: string;
  statusColor?: string;
  statusText?: string;
}

interface ILetterItem {
	id: string;
	letter?: React.ReactChild;
}