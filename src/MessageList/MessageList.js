import React, { Component } from 'react';
import './MessageList.css';

import MessageBox from '../MessageBox/MessageBox';

const classNames = require('classnames');

export class MessageList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scrollBottom: 0,
        };
    }

    componentDidUpdate() {
        var e = this.mlistRef;
        if (!e)
            return;

        var bottom = this.getBottom(e);
        if (this.props.toBottomHeight === '100%' || bottom < this.props.toBottomHeight) {
            // scroll to bottom
            e.scrollTop = e.scrollHeight;
        } else {
            if (this.props.lockable === true) {
                e.scrollTop = e.scrollHeight - e.offsetHeight - this.state.scrollBottom;
            }
        }
    }

    componentWillReceiveProps() {
        if (!this.mlistRef)
            return;
        this.setState({
            scrollBottom: this.getBottom(this.mlistRef),
        });
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

    loadRef(ref) {
        this.mlistRef = ref;
        if (this.props.cmpRef instanceof Function)
            this.props.cmpRef(ref);
    }

    render() {
        return (
            <div
                ref={this.loadRef.bind(this)}
                onScroll={this.props.onScroll}
                className={classNames(['rce-container-mlist', this.props.className])}>
                {
                    this.props.dataSource.map((x, i) => (
                        <MessageBox
                            key={i}
                            {...x}
                            onOpen={this.props.onOpen && ((e) => this.onOpen(x, i, e))}
                            onDownload={this.props.onDownload && ((e) => this.onDownload(x, i, e))}
                            onTitleClick={this.props.onDownload && ((e) => this.onTitleClick(x, i, e))}
                            onForwardClick={this.props.onForwardClick && ((e) => this.onForwardClick(x, i, e))}
                            onClick={this.props.onClick && ((e) => this.onClick(x, i, e))}/>
                    ))
                }
            </div>
        );
    }
}

MessageList.defaultProps = {
    onClick: null,
    onTitleClick: null,
    onForwardClick: null,
    onOpen: null,
    onDownload: null,
    dataSource: [],
    lockable: false,
    toBottomHeight: 300,
};

export default MessageList;
