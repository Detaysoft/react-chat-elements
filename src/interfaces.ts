export interface IMessage {
  text?: string;
  id: string | Number;
}

export interface IChat {
  id: string | Number;
  avatar: string;
  avatarFlexible: Boolean;
  alt: string;
  title: string;
  subtitle: string;
  date: Date;
  unread: number | 0;
}

export interface IChatItemProps {
  chat: IChat;
  avatar: string;
  avatarFlexible: Boolean;
  alt: string;
  title: string;
  subtitle: string;
  date: Date;
  dateString: string;
  unread: Number;
  onClick: Function;
  onContextMenu: Function;
  statusColor: string;
  statusColorType: string;
  statusText: string;
  lazyLoadingImage: string;
  muted: Boolean;
  showMute: Boolean;
  showVideoCall: Boolean;
  onClickMute: Function;
  onClickVideoCall: Function;
  onDragOver?: React.DragEventHandler;
  onDragEnter?: React.DragEventHandler;
  onDrop?: React.DragEventHandler;
  onDragLeave?: React.DragEventHandler;
}

export interface IChatListProps extends React.Component {
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
  onDragComponent?: React.Component;
  lazyLoadingImage: string;
  className?: string;
}

export type ChatListEvent = (item: IChat, index: Number, event: React.MouseEvent<HTMLElement>) => void;

export interface IDefaultProps {
  style: Object;
  onClick: Function;
}

export interface IAudioMessage extends IMessage {
  audioURL: string;
  audioType: string;
}

export interface IAudioMessageProps {
  audioProps?: Object;
  customStyle?: any;
  message: IAudioMessage;
}