import React, { Component, } from 'react';
import './MessageList.css';

import MessageBox from '../MessageBox/MessageBox';

import FaChevronDown from 'react-icons/lib/fa/chevron-down';

const classNames = require('classnames');

export class MessageList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scrollBottom: 0,
            downButton: false,
        };

        this.loadRef = this.loadRef.bind(this);
        this.onScroll = this.onScroll.bind(this);
    }

    checkScroll() {
        var e = this.mlistRef;
        if (!e)
            return;

        if (this.props.toBottomHeight === '100%' || this.state.scrollBottom < this.props.toBottomHeight) {
            // scroll to bottom
            e.scrollTop = e.scrollHeight;
        } else {
            if (this.props.lockable === true) {
                e.scrollTop = e.scrollHeight - e.offsetHeight - this.state.scrollBottom;
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!this.mlistRef)
            return;
        if (nextProps.dataSource.length !== this.props.dataSource.length) {
            this.setState({
                scrollBottom: this.getBottom(this.mlistRef),
            }, this.checkScroll.bind(this));
        }
    }

    getBottom(e) {
        return e.scrollHeight - e.scrollTop - e.offsetHeight;
    }

    onOpen(item, i, e) {
        if (this.props.onOpen instanceof Function)
            this.props.onOpen(item, i, e);
    }

    onDownload(item, i, e) {
        if (this.props.onDownload instanceof Function)
            this.props.onDownload(item, i, e);
    }

    onPhotoError(item, i, e) {
      if (this.props.onPhotoError instanceof Function)
        this.props.onPhotoError(item, i, e);
    }

    onClick(item, i, e) {
        if (this.props.onClick instanceof Function)
            this.props.onClick(item, i, e);
    }

    onTitleClick(item, i, e) {
        if (this.props.onTitleClick instanceof Function)
            this.props.onTitleClick(item, i, e);
    }

    onForwardClick(item, i, e) {
        if (this.props.onForwardClick instanceof Function)
            this.props.onForwardClick(item, i, e);
    }

    onReplyClick(item, i, e) {
        if (this.props.onReplyClick instanceof Function)
            this.props.onReplyClick(item, i, e);
    }

    onReplyMessageClick(item, i, e) {
        if (this.props.onReplyMessageClick instanceof Function)
            this.props.onReplyMessageClick(item, i, e);
    }

    onContextMenu(item, i, e) {
        if (this.props.onContextMenu instanceof Function)
            this.props.onContextMenu(item, i, e);
    }

    onMessageFocused(item, i, e) {
        if (this.props.onMessageFocused instanceof Function)
            this.props.onMessageFocused(item, i, e);
    }

    loadRef(ref) {
        this.mlistRef = ref;
        if (this.props.cmpRef instanceof Function)
            this.props.cmpRef(ref);
    }

    onScroll(e) {
        var bottom = this.getBottom(e.target);
        this.state.scrollBottom = bottom;
        if (this.props.toBottomHeight === '100%' || bottom > this.props.toBottomHeight) {
            if (this.state.downButton !== true) {
                this.state.downButton = true;
                this.setState({
                    downButton: true,
                    scrollBottom: bottom,
                });
            }
        } else {
            if (this.state.downButton !== false) {
                this.state.downButton = false;
                this.setState({
                    downButton: false,
                    scrollBottom: bottom,
                });
            }
        }

        if (this.props.onScroll instanceof Function) {
            this.props.onScroll(e);
        }
    }

    toBottom(e) {
        if(!this.mlistRef)
            return;
        this.mlistRef.scrollTop = this.mlistRef.scrollHeight;
        if (this.props.onDownButtonClick instanceof Function) {
            this.props.onDownButtonClick(e);
        }
    }

    render() {
        return (
            <div
                className={classNames(['rce-container-mlist', this.props.className])}>
                <div
                    ref={this.loadRef}
                    onScroll={this.onScroll}
                    className='rce-mlist'>
                    {
                        this.props.dataSource.map((x, i) => (
                            <MessageBox
                                key={i}
                                {...x}
                                onOpen={this.props.onOpen && ((e) => this.onOpen(x, i, e))}
                                onPhotoError={this.props.onPhotoError && ((e) => this.onPhotoError(x, i, e))}
                                onDownload={this.props.onDownload && ((e) => this.onDownload(x, i, e))}
                                onTitleClick={this.props.onTitleClick && ((e) => this.onTitleClick(x, i, e))}
                                onForwardClick={this.props.onForwardClick && ((e) => this.onForwardClick(x, i, e))}
                                onReplyClick={this.props.onReplyClick && ((e) => this.onReplyClick(x, i, e))}
                                onReplyMessageClick={this.props.onReplyMessageClick && ((e) => this.onReplyMessageClick(x, i, e))}
                                onClick={this.props.onClick && ((e) => this.onClick(x, i, e))}
                                onContextMenu={this.props.onContextMenu && ((e) => this.onContextMenu(x, i, e))}
                                onMessageFocused={this.props.onMessageFocused && ((e) => this.onMessageFocused(x, i, e))}
                            />
                        ))
                    }
                </div>
                {
                    this.props.downButton === true &&
                    this.state.downButton &&
                    this.props.toBottomHeight !== '100%' &&
                    <div
                        className='rce-mlist-down-button'
                        onClick={this.toBottom.bind(this)}>
                        <FaChevronDown/>
                        {
                            this.props.downButtonBadge &&
                            <span
                                className='rce-mlist-down-button--badge'>
                                {this.props.downButtonBadge}
                            </span>
                        }
                    </div>
                }
            </div>
        );
    }
}

MessageList.defaultProps = {
    onClick: null,
    onTitleClick: null,
    onForwardClick: null,
    onReplyClick: null,
    onReplyMessageClick: null,
    onDownButtonClick: null,
    onOpen: null,
    onPhotoError: null,
    onDownload: null,
    dataSource: [],
    lockable: false,
    toBottomHeight: 300,
    downButton: true,
    downButtonBadge: null,
};

export default MessageList;
