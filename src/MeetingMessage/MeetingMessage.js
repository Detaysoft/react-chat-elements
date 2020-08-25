import React, { Component } from 'react';
import './MeetingMessage.css';

import FaCalendar from 'react-icons/lib/fa/calendar';
import MdMoreHoriz from 'react-icons/lib/md/more-horiz';

import {
    format,
} from'timeago.js';

export class MeetingMessage extends Component {
    constructor(props) {
        super(props);

    }

    toggleClick(id) {
        var x = document.getElementById(id);
        if (x.style.display === "none" || x.style.display === "") {
            x.style.display = "flex";
        } else {
            x.style.display = "none";
        }
    }

    render() {
        const {
            id,
            title,
            meetSubject,
            onClick,
            date,
            dataSource,
        } = this.props;

        const dateText = date && !isNaN(date) && (format(date));

        return (
            <div
                className="rce-mbox-mtmg"
                onClick={onClick}>
                <div className="rce-mtmg">
                    <div
                        className="rce-mtmg-subject">
                        {meetSubject || 'Unknown'}
                    </div>
                    <div
                        className="rce-mtmg-toogleClick"
                        onClick={() => this.toggleClick(id)}>
                        <div className="rce-mtmg-item">
                            <FaCalendar />
                            <div className="rce-mtmg-content">
                                <span className="rce-mtmg-title">
                                    {title}
                                </span>
                                <span className='rce-mtmg-date'>
                                    {dateText}
                                </span>
                            </div>
                        </div>
                        <div className="rce-mtmg-right-icon">
                            <MdMoreHoriz/>
                        </div>
                    </div>
                    <div id={id}
                        className="rce-mtmg-toogleContent"
                        style={{display: "none"}} >
                        {
                            dataSource &&
                            dataSource.map((x, i) => {
                                return (
                                    <div className="rce-mitem">
                                        <div className="rce-mitem-body">
                                            <div className="rce-mitem-body--top">
                                                <div className="rce-mitem-body--top-title">
                                                    {x.title}
                                                </div>
                                                <div className="rce-mitem-body--top-time">
                                                    {
                                                        x.date &&
                                                        !isNaN(x.date) &&
                                                        (format(x.date))
                                                    }
                                                </div>
                                            </div>
                                            <div className="rce-mitem-body--bottom">
                                                <div
                                                    className="rce-mitem-body--bottom-title" >
                                                    {x.message}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

MeetingMessage.defaultProps = {
    id: '',
    alt: '',
    title: '',
    meetSubject: '',
    message: '',
    dataSource: [],
    date: new Date(),
    onClick: () => void(0),
    onAvatarError: () => void(0),
};

export default MeetingMessage;
