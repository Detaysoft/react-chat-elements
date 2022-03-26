
interface IMessage {
  text?: string;
  id: string | Number;
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
  cmpRef?: Function;
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
  style: Object;
  onClick: Function;
}

interface IAudioMessage extends IMessage {
  audioURL: string;
  audioType: string;
}

interface IAudioMessageProps {
  audioProps?: Object;
  customStyle?: any;
  message: IAudioMessage;
}