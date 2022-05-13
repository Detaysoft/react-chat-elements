interface IChatItemProps {
  id: string | number;
  avatar: string;
  unread?: number;
  className?: string;
  avatarFlexible?: boolean;
  alt?: string;
  title?: string;
  subtitle?: string;
  date?: Date;
  dateString?: string;
  statusColor?: string;
  statusColorType?: string;
  statusText?: string;
  lazyLoadingImage?: string;
  muted?: boolean;
  showMute?: boolean;
  showVideoCall?: boolean;
  onAvatarError?: React.MouseEventHandler;
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
  id: string | number;
  dataSource: IChatItemProps[];
  cmpRef?: React.Ref<HTMLButtonElement>;
  onAvatarError?: ChatListEvent;
  onContextMenu?: ChatListEvent;
  onClick?: ChatListEvent;
  onClickMute?: ChatListEvent;
  onClickVideoCall?: ChatListEvent;
  onDragOver?: Function;
  onDragEnter?: Function;
  onDrop?: Function;
  onDragLeave?: Function;
  onDragComponent?: Function;
  lazyLoadingImage: string;
  className?: string;
}

type ChatListEvent = (item: IChatItemProps, index: number, event: React.MouseEvent<HTMLElement>) => any;

interface IDefaultProps {
  style: {
    [key: string]: unknown;
  };
  onClick: Function;
}

interface IMessage {
  id: string | number;
  position: string;
  text: string;
  title: string;
  focus: boolean;
  date: number | Date;
  dateString?: string;
  avatar?: string;
  titleColor: string;
  forwarded: boolean;
  replyButton: boolean;
  removeButton: boolean;
  status: string;
  notch: boolean;
  copiableDate?: boolean;
  retracted: boolean;
  className?: string;
  letterItem?: ILetterItem;
  reply?: IReplyMessage;
}

interface IPhotoMessage extends Omit<IMessage, "status"> {
  type: 'photo';
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
  type: 'photo';
  message: IPhotoMessage;
  onDownload?: React.MouseEventHandler;
  onOpen?: React.MouseEventHandler;
  onLoad?: React.ReactEventHandler;
  onPhotoError?: React.ReactEventHandler;
}

interface IReplyMessage extends IMessage {
  type: 'reply';
  photoURL?: string;
  message?: string;
}

interface IReplyMessageProps {
  type: 'reply';
  message: IReplyMessage;
  onClick?: React.MouseEventHandler;
}

interface IMeetingMessage extends IMessage {
  type: 'meeting';
  message?: string;
  avatarFlexible?: boolean;
  event?: {
    title?: string;
    avatars?: IAvatarProps[];
    avatarsLimit?: any;
  };
  record?: {
    avatar: string;
    title?: string;
    savedBy?: string;
    time?: string;
  };
}

interface IMeetingMessageProps {
  type: 'meeting';
  subject?: string;
  title?: string;
  date?: Date;
  dateString?: string;
  collapseTitle?: string;
  participants?: Array<{
    id?: number | string;
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
  onClick?: React.MouseEventHandler;
  onMeetingTitleClick?: MeetingMessageEvent;
  onMeetingVideoLinkClick?: MeetingMessageEvent;
  onMeetingMoreSelect?: Function;
}

interface IVideoMessage extends Omit<IMessage, "status"> {
  type: 'video';
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

interface IVideoMessageProps {
  type: 'video';
  message: IVideoMessage;
  onDownload?: React.MouseEventHandler;
  onOpen?: React.MouseEventHandler;
  onLoad?: React.ReactEventHandler;
  onPhotoError?: React.ReactEventHandler;
}

interface ISystemMessage extends IMessage {
  type: 'system';
  text: string;
}

interface IAudioMessage extends IMessage {
  type: 'audio';
  audioURL: string;
  audioType?: string;
  controlsList?: string;
}

interface IAudioMessageProps {
  type: 'audio';
  message: IAudioMessage;
  audioProps?: {
    [key: string]: unknown;
  };
  customStyle?: any;
  onOpen?: React.MouseEventHandler;
  onDownload?: React.MouseEventHandler;
  onLoad?: React.ReactEventHandler;
}

interface IFileMessage extends Omit<IMessage, "status"> {
  type: 'file';
  status?: IFileMessageDataStatus;
  size?: string;
}

interface IFileMessageProps {
  type: 'file';
  message: IFileMessage;
  onDownload?: Function;
  onOpen?: React.MouseEventHandler;
  text?: string;
}

interface ILocationMessage extends IMessage {
  type: 'location';
  latitude: string;
  longitude: string;
  staticURL: string;
}

interface ILocationMessageProps {
  type: 'location';
  message: ILocationMessageData;
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

interface ISpotifyMessage extends IMessage {
  type: 'spotify';
  uri: string;
  theme?: string;
  view?: string;
  width?: number | string;
  height?: number | string;
  text?: string;
}

interface ISpotifyMessageProps {
  message: ISpotifyMessage;
  type: 'spotify';
}

type MessageType = ILocationMessageProps | IPhotoMessageProps | IVideoMessageProps | ISpotifyMessageProps | IAudioMessageProps | IMeetingLinkProps | IFileMessageProps | ITextMessageProps | ISystemMessageProps | IReplyMessage | IMeetingMessageProps;

interface IMessageBoxProps {
  data: MessageType;
  onMessageFocused?: any;
  onClick?: React.MouseEventHandler;
  renderAddCmp?: React.Component;
  onOpen?: React.MouseEventHandler;
  onPhotoError?: React.MouseEventHandler;
  onContextMenu?: React.MouseEventHandler;
  onForwardClick?: React.MouseEventHandler;
  onReplyClick?: React.MouseEventHandler;
  onRemoveMessageClick?: React.MouseEventHandler;
  onTitleClick?: React.MouseEventHandler;
  onReplyMessageClick?: React.MouseEventHandler;
  onMeetingMessageClick?: React.MouseEventHandler;
  onDownload?: React.MouseEventHandler;
  onMeetingMoreSelect?: React.MouseEventHandler;
  onMeetingLinkClick?: React.MouseEventHandler;
  onMeetingTitleClick?: React.MouseEventHandler;
  onMeetingVideoLinkClick?: React.MouseEventHandler;
}

interface IMessageListProps {
  className?: string;
  customProps?: {
    [key: string]: unknown;
  };
  children?: React.ReactNode;
  isShowChild?: boolean;
  referance: React.Ref;
  dataSource: IMessageBoxProps[];
  lockable: boolean;
  toBottomHeight?: String | number;
  downButton: boolean;
  downButtonBadge: number;
  sendMessagePreview: boolean
  onScroll?: React.UIEventHandler;
  onContextMenu?: MessageListEvent;
  onDownButtonClick?: React.RefObject<HTMLButtonElement>;
  onOpen?: MessageListEvent;
  onDownload?: MessageListEvent;
  onPhotoError?: MessageListEvent;
  onMeetingMoreSelect?: MessageListEvent;
  onMessageFocused?: MessageListEvent;
  onClick?: MessageListEvent;
  onForwardClick?: MessageListEvent;
  onReplyClick?: MessageListEvent;
  onReplyMessageClick?: MessageListEvent;
  onTitleClick?: MessageListEvent;
  onRemoveMessageClick?: MessageListEvent;
  onMeetingMessageClick?: MessageListEvent;
  onMeetingTitleClick?: React.MouseEventHandler;
  onMeetingVideoLinkClick?: React.MouseEventHandler;
  onMeetingLinkClick?: MessageListEvent;
}

type MessageListEvent = (item: IMessageBoxProps, index: number, event: React.MouseEvent<HTMLElement>) => any;

interface IProgressOptions {
  state: {
    color: string;
    width: string;
  };
}

interface IMeetingLinkMessage extends IMessage {
  meetingID?: string;
  title?: string;
}

interface IMeetingLinkMessageProps {
  type: 'meetingLink';
  message: IMeetingLinkMessage;
  onMeetingLinkClick?: React.MouseEventHandler;
  onMeetingMoreSelect?: React.MouseEventHandler<T, T>;
}

type MeetingMessageEvent = (item: IMeetingMessage, index: number , event: React.MouseEvent<HTMLElement>) => any;

interface ITextMessage extends IMessage {
  type?: 'text';
}

interface ITextMessageProps {
  type?: 'text';
  message: ITextMessage;
  // copyClipboard: function;
}

interface ISystemMessageProps {
  type?: 'system';
  text: string;
  className?: string;
}

interface IMeetingListProps {
  cmpRef?: React.LegacyRef;
  className?: string;
  dataSource?: IMeetingItemProps[];
  lazyLoadingImage?: string;
  onClick?: MeetingListEvent;
  onMeetingClick?: MeetingListEvent;
  onShareClick?: MeetingListEvent;
  onCloseClick?: MeetingListEvent;
  onContextMenu?: MeetingListEvent;
  onAvatarError?: MeetingListEvent;
}

type MeetingListEvent = (item: IMeetingItemProps, index: number, event: React.MouseEvent<HTMLElement>) => any;

interface IMeetingItemProps {
  id: string | number;
  closable?: boolean;
  date?: any;
  subject?: string;
  subjectLimit?: number;
  avatarFlexible?: boolean;
  alt?: string;
  title?: string;
  subtitle?: string;
  statusColorType?: string;
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
  leftButtons?: React.ReactNode;
  rightButtons?: React.ReactNode;
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
  items: IDropdownItemType[];
  onSelect: Function;
  style?: {
    color?: string;
    borderColor?: string;
  }
}
interface ICircleProps {
  animate: number;
  progressOptions?: Object;
  className?: string;
}
interface IButtonProps {
  title?: string;
  text?: string;
  buttonRef?: React.RefObject<HTMLButtonElement>;
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
  top?:  any;
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
    onClick?: React.MouseEventHandler;
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
	size?: Object;
	className?: string;
	alt?: string;
	sideElement?: React.ReactChild;
	onError?: React.ReactEventHandler;
  statusColorType?: string;
  statusColor?: string;
  statusText?: string;
}

interface INavbarProps {
  type?: string;
  className?: string;
  left?: any;
  center?: any;
  right?: any;
}