/**
 * IChatItemProps Interface
 * @prop id The Chat Item's id and required.
 * @prop avatar The Chat Item's avatar and required.
 * @prop unread The Chat Item's message unread and optional.
 * @prop className The Chat Item's component className and optional.
 * @prop avatarFlexible The Chat Item's avatar avatarFlexible and optional.
 * @prop alt The Chat Item's avatar alt and optional.
 * @prop title The Chat Item's title and optional.
 * @prop subtitle The Chat Item's subtitle and optional.
 * @prop date The Chat Item's message date and optional.
 * @prop dateString The Chat Item's message dateString and optional.
 * @prop statusColor The Chat Item's statusColor and optional.
 * @prop statusText The Chat Item's statusText and optional.
 * @prop lazyLoadingImage The Chat Item's lazyLoadingImage and optional.
 * @prop muted The Chat Item's muted and optional.
 * @prop showMute The Chat Item's showMute icon and optional.
 * @prop showVideoCall The Chat Item's showVideoCall icon and optional.
 * @prop onAvatarError The Chat Item's avatar function onAvatarError(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onContextMenu The Chat Item's function onContextMenu(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onClick The Chat Item's function onClick(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onClickMute The Chat Item's mute icon function onClickMute(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onClickVideoCall The Chat Item's videoCall icon function onClickVideoCall(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onDragOver The Chat Item's drag over function and optional.
 * @prop onDragEnter The Chat Item's drag enter function and optional.
 * @prop onDrop The Chat Item's drop function and optional.
 * @prop onDragLeave The Chat Item's drop leave function and optional.
 * @prop onDragComponent The Chat Item's drag component and optional.
 * @prop letterItem The Chat Item's avatar letterItem and optional.
 */
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

/**
 * ILetterItem Interface
 * @prop id The LetterItem's id and required.
 * @prop letter The Letter Item's letter is a component and optional.
 */
interface ILetterItem {
	id: string;
	letter?: React.ReactChild;
}

/**
 * IChatListProps Interface
 * @prop id The ChatList's id and required.
 * @prop className The Chat List's component className and optional.
 * @prop lazyLoadingImage The Chat List's lazyLoadingImage and optional.
 * @prop datasource The Chat List's dataSource is a IChatItemProps array and required.
 * @prop cmpRef The Chat List's cmpRef and optional.
 * @prop onAvatarError The Chat Item's function onAvatarError(item: IChatItemProps, index: number, event: React.MouseEvent<HTMLElement, MouseEvent>) and optional.
 * @prop onContextMenu The Chat Item's function onContextMenu(item: IChatItemProps, index: number, event: React.MouseEvent<HTMLElement, MouseEvent>) and optional.
 * @prop onClick The Chat Item's function onClick(item: IChatItemProps, index: number, event: React.MouseEvent<HTMLElement, MouseEvent>) and optional.
 * @prop onClickMute The Chat Item's function onClickMute(item: IChatItemProps, index: number, event: React.MouseEvent<HTMLElement, MouseEvent>) and optional.
 * @prop onClickVideoCall The Chat Item's function onClickVideoCall(item: IChatItemProps, index: number, event: React.MouseEvent<HTMLElement, MouseEvent>) and optional.
 * @prop onDragOver The Chat Item's drag over function and optional.
 * @prop onDragEnter The Chat Item's drag enter function and optional.
 * @prop onDrop The Chat Item's drop function and optional.
 * @prop onDragLeave The Chat Item's drop leave function and optional.
 * @prop onDragComponent The Chat Item's drag component and optional.
 */
interface IChatListProps {
  id: string | number;
  className?: string;
  lazyLoadingImage: string;
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
}

/**
 * ChatListEvent Type
 * @param item The ChatListEvent's item is a IChatItemProps.
 * @param index The Chat List's index.
 * @param event The Chat List's event.
 */
type ChatListEvent = (item: IChatItemProps, index: number, event: React.MouseEvent<HTMLElement>) => any;

/**
 *
 */
interface IDefaultProps {
  style: {
    [key: string]: unknown;
  };
  onClick: Function;
}

/**
 * IMessage Interface
 * @prop id The Message's id and requried.
 * @prop position The Message's position and requried.
 * @prop text The Message's text and requried.
 * @prop title The Message's title and requried.
 * @prop focus The Message's focus and requried.
 * @prop date The Message's date and requried.
 * @prop dateString The Message's dateString and optional.
 * @prop avatar The Message's avatar image and optional.
 * @prop titleColor The Message's titleColor and required.
 * @prop forwarded The Message's forwarded and required.
 * @prop replyButton The Message's replyButton icon and required.
 * @prop removeButton The Message's removeButton icon and required.
 * @prop status The Message's status icon and required.
 * @prop notch The Message's notch and required.
 * @prop copiableDate The Message's copiableDate and optional.
 * @prop retracted The Message's retracted and required.
 * @prop className The Message's className and optional.
 * @prop letterItem The Message's letterItem is a ILetterItem and optional.
 * @prop reply The Message's reply and optional.
 */
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
  reply?: IReplyMessage | any;
  type: string;
}

/**
 * IPhotoMessage Interface extends Omit<IMessage, "status">
 * @prop type The Photo Message's type is "photo" and required.
 * @prop status The Photo Message's status and optional.
 * @prop width The Photo Message's width and optional.
 * @prop height The Photo Message's height and optional.
 * @prop uri The Photo Message's uri and required.
 * @prop alt The Photo Message's alt and optional.
 */
interface IPhotoMessage extends Omit<IMessage, "status"> {
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

/**
 * IPhotoMessageProps Interface
 * @prop type The Photo Message's type is "photo" and required.
 * @prop message The Photo Message's message is a IPhotoMessage and required.
 * @prop onDownload The Photo Message's function onDownload(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onOpen The Photo Message's function onOpen(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onLoad The Photo Message's function onLoad(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onError The Photo Message's function onError(event: React.MouseEvent<T, MouseEvent>) and optional.
 */
interface IPhotoMessageProps {
  message: IPhotoMessage;
  onDownload?: React.MouseEventHandler;
  onOpen?: React.MouseEventHandler;
  onLoad?: React.ReactEventHandler;
  onPhotoError?: React.ReactEventHandler;
}

/**
 * IReplyMessage Interface extends IMessage
 * @prop type The Reply Message's type is "reply" and required.
 * @prop photoURL The Reply Message's photoURL and optional.
 * @prop message The Reply Message's message and optional.
 */
interface IReplyMessage extends IMessage {
  photoURL?: string;
  message?: string;
}

/**
 * IReplyMessageProps Interface
 * @prop type The Reply Message's type is "reply" and required.
 * @prop message The Reply Message's message is a IReplyMessage and required.
 * @prop onClick The Reply Message's function onClick(event: React.MouseEvent<T, MouseEvent>) and optional.
 */
interface IReplyMessageProps {
  message: IReplyMessage;
  onClick?: React.MouseEventHandler;
}

/**
 * IMeetingMessage Interface extens IMessage
 * @prop type The Meeting Message's type is "meeting" and required.
 * @prop message The Meeting Message's message and optional.
 * @prop avatarFlexible The Meeting Message's avatarFlexible and optional.
 * @prop event The Meeting Message's event and optional.
 * @prop record The Meeting Message's record and optional.
 */
interface IMeetingMessage extends IMessage {
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

/**
 * IMeetingMessageProps Interface
 * @prop type The Meeting Message's type is "meeting" and required.
 * @prop subject The Meeting Message's subject and optional.
 * @prop title The Meeting Message's title and optional.
 * @prop date The Meeting Message's date and optional.
 * @prop dateString The Meeting Message's dateString and optional.
 * @prop collapseTitle The Meeting Message's collapseTitle and optional.
 * @prop participants The Meeting Message's participants and optional.
 * @prop more The Meeting Message's more and optional.
 * @prop message The Meeting Message's message is a IMeetingMessage and required.
 * @prop dataSource The Meeting Message's dataSource is a IMeetingMessage array and optional.
 * @prop participantsLimit The Meeting Message's participantsLimit and optional.
 * @prop onclick The Meeting Message's function onclick(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onMeetingTitleClick The Meeting Message's function onMeetingTitleClick(item: IMeetingMessage, index: number, event: React.MouseEvent<HTMLElement, MouseEvent>) and optional.
 * @prop onMeetingVideoLinkClick The Meeting Message's function onMeetingVideoLinkClick(item: IMeetingMessage, index: number, event: React.MouseEvent<HTMLElement, MouseEvent>) and optional.
 * @prop onMeetingMoreSelect The Meeting Message's function onMeetingMoreSelect  and optional.
 */
interface IMeetingMessageProps {
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
  message: IMeetingMessage;
  dataSource?: IMeetingMessage[];
  participantsLimit?: number;
  onClick?: React.MouseEventHandler;
  onMeetingTitleClick?: MeetingMessageEvent;
  onMeetingVideoLinkClick?: MeetingMessageEvent;
  onMeetingMoreSelect?: Function;
}

/**
 * IVideoMessage Interface extends Omit<IMessage, "status">
 * @prop type The Video Message's type is "video" and required.
 * @prop videoURL The Video Message's videoURL and required.
 * @prop uri The Video Message's uri and required.
 * @prop width The Video Message's width and optional.
 * @prop height The Video Message's height and optional.
 * @prop alt The Video Message's alt and optional.
 * @prop status The Video Message's status and optional.
 */
interface IVideoMessage extends Omit<IMessage, "status"> {
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

/**
 * IVideoMessageProps Interface
 * @prop type The Video Message's type is "video" and required.
 * @prop message The Video Message's message is a IVideoMessage and required.
 * @prop onDownload The Video Message's function onDownload(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onOpen The Video Message's function onOpen(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onLoad The Video Message's function onLoad(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onPhotoError The Video Message's function onPhotoError(event: React.SyntheticEvent<T, Event>) and optional.
*/
interface IVideoMessageProps {
  message: IVideoMessage;
  onDownload?: React.MouseEventHandler;
  onOpen?: React.MouseEventHandler;
  onLoad?: React.ReactEventHandler;
  onPhotoError?: React.ReactEventHandler;
}

/**
 * ISystemMessage Interface extends IMessage
 * @prop type The System Message's type is "system" and required.
 * @prop text The System Message's text and requried.
 */
interface ISystemMessage extends IMessage {
  text: string;
}

/**
 * ISystemMessageProps Interface
 * @prop type The System Message's type is "system" and required.
 * @prop message The System Message's message is ISystemMessage and required.
 * @prop className The System Message's className and optional.
 */
interface ISystemMessageProps {
  message: ISystemMessage;
  className?: string;
}

/**
 * IAudioMessage Interface extends IMessage
 * @prop type The Audio Message's type is "audio" and required.
 * @prop audioURL The Audio Message's audio url and required.
 * @prop audioType The Audio Message's audio type and optional.
 * @prop controlsList The Audio Message's controls list and optional.
 */
interface IAudioMessage extends IMessage {
  audioURL: string;
  audioType?: string;
  controlsList?: string;
}

/**
 * IAudioMessageProps Interface
 * @prop type The Audio Message's type is "audio" and required.
 * @prop message The Audio Message's message is a IAudioMessage and required.
 * @prop audioProps The Audio Message's audioProps and optional.
 * @prop customStyle The Audio Message's customStyle and optional.
 * @prop onOpen The Audio Message's function onOpen(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onDownload The Audio Message's function onDownload(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onLoad The Audio Message's function onLoad(event: React.SyntheticEvent<T, Event>) and optional.
 */
interface IAudioMessageProps {
  message: IAudioMessage;
  audioProps?: {
    [key: string]: unknown;
  };
  customStyle?: any;
  onOpen?: React.MouseEventHandler;
  onDownload?: React.MouseEventHandler;
  onLoad?: React.ReactEventHandler;
}

/**
 * IFileMessage Interface extends Omit<IMessage, "status">
 * @prop type The File Message's type is "file" and required.
 * @prop status The File Message's status is a IFileMessageDataStatus and optional.
 * @prop size The File Message's size and optional.
 */
interface IFileMessage extends Omit<IMessage, "status"> {
  status?: IFileMessageDataStatus;
  size?: string;
}

/**
 * IFileMessageProps Interface
 * @prop type The File Message's type is "file" and required.
 * @prop message The File Message's message is a IFileMessage and required.
 * @prop text The File Message's text and optional.
 * @prop onDownload The File Message's function onDownload and optional.
 * @prop onOpen The File Message's function onOpen(event: React.MouseEvent<Element, MouseEvent>) and optional.
 */
interface IFileMessageProps {
  message: IFileMessage;
  text?: string;
  onDownload?: Function;
  onOpen?: React.MouseEventHandler;
}

/**
 * ILocationMessage Interface extends IMessage
 * @prop type The Location Message's type is "location" and required.
 * @prop latitude The Location Message's latitude and required.
 * @prop longitude The Location Message's longitude and required.
 * @prop staticURL The Location Message's static url and required.
 * @prop mapURL The Location Message's map url and optional.
 */
interface ILocationMessage extends IMessage {
  latitude: string;
  longitude: string;
  staticURL: string;
  mapURL?: string;
}

/**
 * ILocationMessageProps Interface
 * @prop type The Location Message's type is "location" and required.
 * @prop message The Location Message's message is a ILocationMessage and required.
 * @prop marker The Location Message's marker and required.
 * @prop zoom The Location Message's zoom and required.
 * @prop apiKey The Location Message's api key and required.
 * @prop className The Location Message's className and optional.
 * @prop text The Location Message's text and optional.
 * @prop src The Location Message's source and optional.
 * @prop target The Location Message's target and optional.
 * @prop href The Location Message's href and optional.
 * @prop onOpen The Location Message's function onOpen(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onError The Location Message's function onError(event: React.SyntheticEvent<T, Event>) and optional.
 */
interface ILocationMessageProps {
  message: ILocationMessage;
  markerColor: string;
  zoom: string;
  apiKey: string;
  className?: string;
  text?: string;
  src?: string;
  target?: string;
  href?: string;
  onOpen?: React.MouseEventHandler;
  onError?: React.ReactEventHandler;
}

/**
 * ISpotifyMessage Interface extends IMessage
 * @prop type The Spotify Message's type is "spotify" and required.
 * @prop uri The Spotify Message's uri and required.
 * @prop theme The Spotify Message's theme and optional.
 * @prop view  The Spotify Message's view and optional.
 * @prop width The Spotify Message's width and optional.
 * @prop height The Spotify Message's height and optional.
 * @prop text The Spotify Message's text and optional.
 */
interface ISpotifyMessage extends Omit<IMessage, "text"> {
  uri: string;
  theme?: string;
  view?: string;
  width?: number | string;
  height?: number | string;
  text?: string;
}

/**
 * ISpotifyMessageProps Interface
 * @prop type The Spotify Message's type is "spotify" and required.
 * @prop message The Spotify Message's message is a ISpotifyMessage and required.
 */
interface ISpotifyMessageProps {
  message: ISpotifyMessage;
}

/**
 * IMessageBoxProps Interface
 * @prop data The Message Box'es data is a MessageType and required.
 * @prop onMessageFocused The Message Box'es onMessageFocused and optional.
 * @prop renderAddCmp The Message Box'es renderAddCmp is a component and optional.
 * @prop onClick The Message Box'es function onClick(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onOpen The Message Box'es function onOpen(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onPhotoError The Message Box'es function onPhotoError(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onContextMenu The Message Box'es function onContextMenu(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onForwardClick The Message Box'es function onForwardClick(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onReplyClick The Message Box'es function onReplyClick(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onRemoveMessageClick The Message Box'es function onRemoveMessageClick(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onTitleClick The Message Box'es function onTitleClick(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onMeetingMessageClick The Message Box'es function onMeetingMessageClick(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onDownload The Message Box'es function onDownload(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onMeetingMoreSelect The Message Box'es function onMeetingMoreSelect(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onMeetingLinkClick The Message Box'es function onMeetingLinkClick(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onMeetingTitleClick The Message Box'es function onMeetingTitleClick(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onMeetingVideoLinkClick The Message Box'es function onMeetingVideoLinkClick(event: React.MouseEvent<T, MouseEvent>) and optional.
 */
interface IMessageBoxProps {
  data: MessageType;
  onMessageFocused?: any;
  renderAddCmp?: React.Component;
  onClick?: React.MouseEventHandler;
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

/**
 * IMessageListProps Interface
 * @prop className The Message List's className and optional.
 * @prop customProps The Message List's customProps and optional.
 * @prop children The Message List's children and optional.
 * @prop referance The Message List's referance is a ref and required.
 * @prop datasource The Message List's datasource is IMessageBoxProps and required.
 * @prop lockable The Message List's lockable and required.
 * @prop toBottomHeight The Message List's to bottom height and optional.
 * @prop down button The Message List's down button and required.
 * @prop downButtonBadge The Message List's down button badge and required.
 * @prop sendMessagePreview The Message List's send message preview and required.
 * @prop onScroll The Message List's function onScroll(event: React.UIEvent<T, UIEvent>) and optional.
 * @prop onContextMenu The Message List's function onContextMenu(item: IMessageBoxProps, index: number, event: React.MouseEvent<HTMLElement, MouseEvent>) and optional.
 * @prop onDownButtonClick The Message List's onDownButtonClick is a ref and optional.
 * @prop onOpen The Message List's function onOpen(item: IMessageBoxProps, index: number, event: React.MouseEvent<HTMLElement, MouseEvent>) and optional.
 * @prop onDownload The Message List's function onDownload(item: IMessageBoxProps, index: number, event: React.MouseEvent<HTMLElement, MouseEvent>) and optional.
 * @prop onPhotoError The Message List's function onPhotoError(item: IMessageBoxProps, index: number, event: React.MouseEvent<HTMLElement, MouseEvent>) and optional.
 * @prop onMeetingMoreSelect The Message List's function onMeetingMoreSelect(item: IMessageBoxProps, index: number, event: React.MouseEvent<HTMLElement, MouseEvent>) and optional.
 * @prop onMessageFocused The Message List's function onMessageFocused(item: IMessageBoxProps, index: number, event: React.MouseEvent<HTMLElement, MouseEvent>) and optional.
 * @prop onClick The Message List's function onClick(item: IMessageBoxProps, index: number, event: React.MouseEvent<HTMLElement, MouseEvent>) and optional.
 * @prop onForwardClick The Message List's function onForwardClick(item: IMessageBoxProps, index: number, event: React.MouseEvent<HTMLElement, MouseEvent>) and optional.
 * @prop onReplyClick The Message List's function onReplyClick(item: IMessageBoxProps, index: number, event: React.MouseEvent<HTMLElement, MouseEvent>) and optional.
 * @prop onReplyMessageClick The Message List's function onReplyMessageClick(item: IMessageBoxProps, index: number, event: React.MouseEvent<HTMLElement, MouseEvent>) and optional.
 * @prop onTitleClick The Message List's function onTitleClick(item: IMessageBoxProps, index: number, event: React.MouseEvent<HTMLElement, MouseEvent>) and optional.
 * @prop onRemoveMessageClick The Message List's function onRemoveMessageClick(item: IMessageBoxProps, index: number, event: React.MouseEvent<HTMLElement, MouseEvent>) and optional.
 * @prop onMeetingMessageClick The Message List's function onMeetingMessageClick(item: IMessageBoxProps, index: number, event: React.MouseEvent<HTMLElement, MouseEvent>) and optional.
 * @prop onMeetingTitleClick The MessageList's function onMeetingTitleClick(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onMeetingVideoLinkClick The MessageList's function onMeetingVideoLinkClick(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onMeetingLinkClick The Message List's function onMeetingLinkClick(item: IMessageBoxProps, index: number, event: React.MouseEvent<HTMLElement, MouseEvent>) and optional.
*/
interface IMessageListProps {
  className?: string;
  customProps?: {
    [key: string]: unknown;
  };
  children?: React.ReactNode;
  isShowChild?: boolean;
  referance: any;
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

/**
 * MessageListEvent Type
 * @param item The MessageListEvent's item is a IMessageBoxProps.
 * @param index The MessageListEvent's index.
 * @param event The MessageListEvent's event.
 */
type MessageListEvent = (item: IMessageBoxProps, index: number, event: React.MouseEvent<HTMLElement>) => any;

/**
 * IProgressOptions Interface
 * @prop state The Progress Options's state is a object.
 */
interface IProgressOptions {
  state: {
    color: string;
    width: string;
  };
}

/**
 * IMeetingLinkMessage Interface extends IMessage
 * @prop meetingID The Meeting Link Message's meeting id and optional.
 * @prop title The Meeting Link Message's title and optional.
 */
interface IMeetingLinkMessage extends Omit<IMessage, "title"> {
  meetingID?: string;
  title?: string;
}

/**
 * IMeetingLinkMessageProps Interface
 * @prop type The Meeting Link Message's type is "meetingLink" and required.
 * @prop message The Meeting Link Message's message is a IMeetingLinkMessage and required.
 * @prop onMeetingLinkClick The Meeting Link Message's function onMeetingLinkClick(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onMeetingMoreSelect The Meeting More Select Message's function onMeetingMoreSelect(event: React.MouseEvent<T, MouseEvent>) and optional.
 */
interface IMeetingLinkMessageProps {
  message: IMeetingLinkMessage;
  onMeetingLinkClick?: (id: string) => void;
  onMeetingMoreSelect?: (id: string) => void;
}

/**
 * MeetingMessageEvent Type
 * @param item The MessageListEvent's item is a IMeetingMessage.
 * @param index The MessageListEvent's index.
 * @param event The MessageListEvent's event.
 */
type MeetingMessageEvent = (item: IMeetingMessage, index: number , event: React.MouseEvent<HTMLElement>) => any;

/**
 * ITextMessage Interface extends IMessage
 * @prop type The Text Message's type is "text" and required.
 */
interface ITextMessage extends IMessage { }

/**
 * ITextMessageProps Interface
 * @prop type The Text Message's type is "text" and required.
 * @prop message The Text Message's message is a ITextMessage and required.
 */
interface ITextMessageProps {
  type?: 'text';
  message: ITextMessage;
  // copyClipboard: function;
}

interface IMeetingListProps {
  cmpRef?: any;
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

/**
 * MeetingListEvent Type
 * @param item The MessageListEvent's item is a IMeetingItemProps.
 * @param index The MessageListEvent's index.
 * @param event The MessageListEvent's event.
 */
type MeetingListEvent = (item: IMeetingItemProps, index: number, event: React.MouseEvent<HTMLElement>) => any;

/**
 * IMeetingItemProps Interface
 * @prop id The Meeting Item's id and required.
 * @prop closable The Meeting Item's closable and optional.
 * @prop date The Meeting Item's date and optional.
 * @prop subject The Meeting Item's subject and optional.
 * @prop subjectLimit The Meeting Item's subject limit and optional.
 * @prop avatarFlexible The Meeting Item's avatar flexible and optional.
 * @prop alt The Meeting Item's alt and optional.
 * @prop title The Meeting Item's title and optional.
 * @prop subtitle The Meeting Item's subtitle and optional.
 * @prop statusColorType The Meeting Item's status color type and optional.
 * @prop classname The Meeting Item's classname and optional.
 * @prop dateString The Meeting Item's date string and optional.
 * @prop lazyLoadingImage The Meeting Item's lazyLoadingImage and optional.
 * @prop avatarLimit The Meeting Item's avatar limit and optional.
 * @prop avatars The Meeting Item's avatars array and optional.
 * @prop audioMuted The Meeting Item's audio muted and optional.
 * @prop audioSource The Meeting Item's audio source and optional.
 * @prop onClick The Meeting Item's function onClick(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onAvatarError The Meeting Item's function onAvatarError(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onMeetingClick The Meeting Item's function onMeetingClick(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onShareClick The Meeting Item's function onShareClick(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onContextMenu The Meeting Item's function onContextMenu(event: React.MouseEvent<T, MouseEvent>) and optional.
 * @prop onCloseClick The Meeting Item's function onCloseClick(event: React.MouseEvent<T, MouseEvent>) and optional.
*/
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

/**
 * IInputProps Interface
 * @prop autofocus The Input's autofocus and optional.
 * @prop referance The Input's referance is a ref and optional.
 * @prop clear The Input's clear and optional.
 * @prop maxlength The Input's maxlength and optional.
 * @prop maxHeight The Input's maxheight and optional.
 * @prop onMaxLengthExceed The Input's onMaxLengthExceed function and optional.
 * @prop onChange The Input's onChange function and optional.
 * @prop multiline The Input's multiline and optional.
 * @prop autoHeight The Input's autoHeight and optional.
 * @prop minHeight The Input's minheight and optional.
 * @prop className The Input's classname and optional.
 * @prop leftButtons The Input's leftbuttons is a component and optional.
 * @prop rightButtons The Input's rightbuttons is a component and optional.
 * @prop type The Input's type and optional.
 * @prop placeholder The Input's placeholder and optional.
 * @prop defaultValue The Input's default value and optional.
 * @prop inputStyle The Input's input style and optional.
 * @prop onCopy The Input's function onCopy(event: React.ClipboardEvent<T>) and optional.
 * @prop onCut The Input's function onCut(event: React.ClipboardEvent<T>) and optional.
 * @prop onPaste The Input's function onPaste(event: React.ClipboardEvent<T>) and optional.
 * @prop onBlur The Input's function onBlur(event: React.FocusEvent<T, Element>) and optional.
 * @prop onFocus The Input's function onFocus(event: React.FocusEvent<T, Element>) and optional.
 * @prop onSelect The Input's function onSelect(event: React.SyntheticEvent<T, Event>) and optional.
 * @prop onSubmit The Input's function onSubmit(event: React.FormEvent<T>) and optional.
 * @prop onReset The Input's function onReset(event: React.FormEvent<T>) and optional.
 * @prop onKeyDown The Input's function onKeyDown(event: React.KeyboardEvent<T>) and optional.
 * @prop onKeyPress The Input's function onKeyPress(event: React.KeyboardEvent<T>) and optional.
 * @prop onKeyUp The Input's function onKeyUp(event: React.KeyboardEvent<T>) and optional.
 */
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

/**
 * IFileMessageDataStatus Interface
 * @prop error The File Message Data Status's error and optional.
 * @prop download The File Message Data Status's download function and optional.
 * @prop click The File Message Data Status's click function and optional.
 * @prop loading The File Message Data Status's loading and optional.
 */
interface IFileMessageDataStatus {
  error?: boolean;
  download?: Function;
  click?: Function;
  loading?: number;
}

/**
 * IDropdownProps Interface
 * @prop className The Dropdown's className and optional.
 * @prop buttonProps The Dropdown's button props and optional.
 * @prop animationType The Dropdown's animation type and optional.
 * @prop animationPosition The Dropdown's animation position and optional.
 * @prop title The Dropdown's title and optional.
 * @prop items The Dropdown's items is a IDropdownItemType array and required.
 * @prop onSelect The Dropdown's onSelect function and optional.
 * @prop style The Dropdown's style is an object containing color, borderColor and optional.
 */
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

/**
 * ICircleProps Interface
 * @prop animate The Circle's animation and required.
 * @prop progressOptions The Circle's progress options and optional.
 * @prop className The Circle's className and optional.
 */
interface ICircleProps {
  animate: number;
  progressOptions?: Object;
  className?: string;
}

/**
 * IButtonProps Interface
 * @prop title The Button's title and optional.
 * @prop text The Button's text and optional.
 * @prop buttonRef The Button's ref and optional.
 * @prop type The Button's type and optional.
 * @prop className The Button's className and optional.
 * @prop backgroundColor The Button's background color and optional.
 * @prop color The Button's color and optional.
 * @prop disabled The Button's disabled and optional.
 * @prop onClick The Button's onClick function and optional.
 * @prop icon The Button's icon is a IButtonIcon and optional.
 */
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

/**
 * IButtonIcon Interface
 * @prop float The Button Icon's float and optional.
 * @prop size The Button Icon's size and optional.
 * @prop components The Button Icon's components and optional.
 */
interface IButtonIcon {
  float?: any;
  size?: number;
  component?: React.ReactChild;
}

/**
 * IDropDownItemType Type
 * @type IDropdown
 * @type string
 */
type IDropdownItemType = IDropdownItem | string;

/**
 * IDropdownItem Interface
 * @prop icon The Dropdown Item's icon and optional.
 * @prop text The Dropdown Item's text and optional.
 */
interface IDropdownItem {
  icon?: IDropdownItemIcon;
  text?: string;
}

/**
 * IDropdownItemIcon Interface
 * @prop float The Dropdown Item Icon's float and optional.
 * @prop color The Dropdown Item Icon's color and optional.
 * @prop size The Dropdown Item Icon's size and optional.
 * @prop className The Dropdown Item Icon's className and optional.
 * @prop component The Dropdown Item Icon's component and optional.
 */
interface IDropdownItemIcon {
  float?: any;
  color?: string;
  size?: number;
  className?: string;
  component?: React.ReactChild;
}

/**
 * ISideBarProps Interface
 * @type type The Side Bar's type and optional.
 * @type data The Side Bar's data is ISideBar and optional.
 */
interface ISideBarProps {
  type?: string;
  data: ISideBar;
}

/**
 * ISideBar Interface
 * @prop top The Side Bar's top is a component and optional.
 * @prop center The Side Bar's center is a component and optional.
 * @prop bottom The Side Bar's bottom is a component and optional.
 * @prop className The Side Bar's className and optional.
 */
interface ISideBar {
  top?:  any;
  center?: any;
  bottom?: any
  className?: string;
}

/**
 * IPopup Interface
 * @prop show The Popup's show and optional.
 * @prop header The Popup's header and optional.
 * @prop text The Popup's text and optional.
 * @prop footerButtons The Popup's footer buttons array and optional.
 * @prop headerButtons The Popup's header buttons array and optional.
 * @prop renderHeader The Popup's renderHeader function and optional.
 * @prop renderContent The Popup's renderContent function and optional.
 * @prop renderFooter The Popup's renderFooter function and optional.
 * @prop color The Popup's color and optional.
 */
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

/**
 * IPopupProps Interface
 * @prop popup The Popup's popup is a IPopup and required.
 * @prop type The Popup's type and optional.
 * @prop className The Popup's className and optional.
 */
interface IPopupProps {
  popup: IPopup;
  type?: string;
  className?: string;
}

/**
 * IAvatarProps Interface
 * @prop src The Avatar's src is an image source and required.
 * @prop title The Avatar's title and optional.
 * @prop lazyLoadingImage The Avatar's lazyLoadingImage and optional.
 * @prop letterItem The Avatar's letterItem is a ILetterItem and optional.
 * @prop type The Avatar's type and optional.
 * @prop size The Avatar's size and optional.
 * @prop className The Avatar's className and optional.
 * @prop alt The Avatar's alt and optional.
 * @prop sideElement The Avatar's sideElement is a component and optional.
 * @prop onError The Avatar's function onError(event: React.SyntheticEvent<T, Event>) and optional.
 * @prop statusColorType The Avatar's status color type and optional.
 * @prop statusColor The Avatar's status color and optional.
 * @prop statusText The Avatar's status text and optional.
 */
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

/**
 * INavbarProps Interface
 * @prop type The Navbar's type and optional.
 * @prop className The Navbar's className and optional.
 * @prop top The Side Bar's top is a component and optional.
 * @prop center The Side Bar's center is a component and optional.
 * @prop bottom The Side Bar's bottom is a component and optional.
 */
interface INavbarProps {
  type?: string;
  className?: string;
  left?: any;
  center?: any;
  right?: any;
}


/**
 * MessageType Type
 * @type ILocationMessageProps
 * @type IPhotoMessageProps
 * @type IVideoMessageProps
 * @type ISpotifyMessageProps
 * @type IAudioMessageProps
 * @type IMeetingLinkMessageProps
 * @type IFileMessageProps
 * @type ITextMessageProps
 * @type ISystemMessageProps
 * @type IReplyMessageProps
 * @type IMeetingMessageProps
 */
type MessageType = |
{ type: 'location' } & ILocationMessageProps |
{ type: 'photo' } & IPhotoMessageProps |
{ type: 'video' } & IVideoMessageProps |
{ type: 'spotify' } & ISpotifyMessageProps |
{ type: 'audio' } & IAudioMessageProps |
{ type: 'meetingLink' } & IMeetingLinkMessageProps |
{ type: 'file' } & IFileMessageProps |
{ type: 'text' } & ITextMessageProps |
{ type: 'system' } & ISystemMessageProps |
{ type: 'reply' } & IReplyMessageProps |
{ type: 'meeting' } & IMeetingMessageProps;

/**
 * MessageType Type
 * @type ILocationMessageProps
 * @type IPhotoMessageProps
 * @type IVideoMessageProps
 * @type ISpotifyMessageProps
 * @type IAudioMessageProps
 * @type IMeetingLinkMessageProps
 * @type IFileMessageProps
 * @type ITextMessageProps
 * @type ISystemMessageProps
 * @type IReplyMessageProps
 * @type IMeetingMessageProps
 */
 type MessageTypeOld = ILocationMessageProps | IPhotoMessageProps | IVideoMessageProps | ISpotifyMessageProps | IAudioMessageProps | IMeetingLinkMessageProps | IFileMessageProps | ITextMessageProps | ISystemMessageProps | IReplyMessageProps | IMeetingMessageProps;
