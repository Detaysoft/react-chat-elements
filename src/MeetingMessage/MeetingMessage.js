import React from 'react';
import './MeetingMessage.css';

import FaCalendar from 'react-icons/lib/fa/calendar';
import MdMoreHoriz from 'react-icons/lib/md/more-horiz';
import FaCaretDown from 'react-icons/lib/fa/caret-down';
import FaCaretRight from 'react-icons/lib/fa/caret-right';
import IoVideo from 'react-icons/lib/io/ios-videocam-outline';
import IoChatboxes from 'react-icons/lib/io/ios-chatboxes-outline';

import {
    format,
} from'timeago.js';

import Avatar from '../Avatar/Avatar';
import Dropdown from '../Dropdown/Dropdown';

import classNames from 'classnames';

export class MeetingMessage extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            toogle: false,
        };
    }

    toggleClick() {
        this.setState({
            toogle: !this.state.toogle,
        })
    }

    render() {
        const {
            date,
            dateString,
            title,
            subject,
            collapseTitle,
            moreItems,
            participants,
            dataSource,

            onClick,
            onMeetingTitleClick,
            onMeetingVideoLinkClick,
            onMeetingMoreSelect,
        } = this.props;

        const PARTICIPANT_LIMIT = this.props.participantsLimit;

        const dateText = dateString ? dateString : (date && !isNaN(date) && (format(date)));

        return (
            <div className="rce-mbox-mtmg">
                <div className="rce-mtmg">
                    <div
                        className="rce-mtmg-subject">
                        {subject || 'Unknown Meeting'}
                    </div>
                    <div
                        className="rce-mtmg-body"
                        onClick={onClick}>
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

                        {
                            moreItems &&
                            moreItems.length > 0 &&
                            <div>
                                <Dropdown
                                    animationType="bottom"
                                    animationPosition="norteast"
                                    buttonProps={{
                                        className:'rce-mtmg-right-icon',
                                        icon: {
                                            component: <MdMoreHoriz/>,
                                            size: 24,
                                        },
                                    }}
                                    items={moreItems}
                                    onSelect={onMeetingMoreSelect}/>
                            </div>
                        }
                    </div>
                    <div
                        className="rce-mtmg-body-bottom"
                        onClick={() => this.toggleClick()}>
                        {
                            this.state.toogle === true ?
                            <div className="rce-mtmg-bottom--tptitle">
                                <FaCaretDown/>
                                <span>{collapseTitle}</span>
                            </div>
                            :
                            <div className="rce-mtmg-body-bottom--bttitle">
                                <FaCaretRight/>
                                <span>
                                    {
                                        participants.slice(0, PARTICIPANT_LIMIT).map(x => x.title || 'Unknow').join(', ')
                                    }
                                    {
                                        participants.length > PARTICIPANT_LIMIT &&
                                            `, +${(participants.length - PARTICIPANT_LIMIT)}`
                                    }
                                </span>
                            </div>
                        }
                    </div>
                    <div
                        className={classNames(
                            'rce-mtmg-toogleContent',
                            {'rce-mtmg-toogleContent--click': this.state.toogle === true}
                        )}>
                        {
                            dataSource &&
                            dataSource.map((x, i) => {
                                return (
                                    <div key={i}>
                                        {
                                            !x.event &&
                                            <div className="rce-mitem">
                                                <div
                                                    className={classNames(
                                                        'rce-mitem avatar',
                                                        {'rce-mitem no-avatar': !x.avatar}
                                                    )}>
                                                    {
                                                        x.avatar ?
                                                            <Avatar src={x.avatar}/>
                                                            : <IoChatboxes />
                                                    }
                                                </div>
                                                <div className="rce-mitem-body">
                                                    <div className="rce-mitem-body--top">
                                                        <div
                                                            className="rce-mitem-body--top-title"
                                                            onClick={(e) => onMeetingTitleClick(x, i, e)}>
                                                            {x.title}
                                                        </div>
                                                        <div className="rce-mitem-body--top-time">
                                                            {
                                                                x.dateString ? x.dateString : (x.date &&
                                                                !isNaN(x.date) &&
                                                                (format(x.date)))
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
                                        }

                                        {
                                            x.event &&
                                            <div className="rce-mitem-event">
                                                <div className="rce-mitem-bottom-body">
                                                    <div className="rce-mitem-body avatar">
                                                        <IoVideo />
                                                    </div>
                                                    <div className="rce-mitem-bottom-body-top">
                                                        {x.event.title}
                                                        <div className="rce-mitem-body--top-time">
                                                            {
                                                                x.dateString ? x.dateString : (x.date &&
                                                                !isNaN(x.date) &&
                                                                (format(x.date)))
                                                            }
                                                        </div>
                                                        <div className="rce-mitem-avatar-content">
                                                            {
                                                                <div className="rce-mitem-avatar">
                                                                    {
                                                                        x.event.avatars &&
                                                                        x.event.avatars.slice(0, x.event.avatarsLimit).map((x, i) => x instanceof Avatar ? x : (
                                                                            <Avatar
                                                                                key={i}
                                                                                src={x.src} />
                                                                        ))
                                                                    }
                                                                    {
                                                                        x.event.avatars && x.event.avatarsLimit &&
                                                                        x.event.avatars.length > x.event.avatarsLimit &&
                                                                        <div className='rce-mitem-length rce-mitem-tooltip' tooltip={x.event.avatars.slice(x.event.avatarsLimit, x.event.avatars.length).map(avatar => avatar.title).join(",")}>
                                                                            <span className="rce-mitem-tooltip-text" >
                                                                                {'+' + (x.event.avatars.length - x.event.avatarsLimit)}
                                                                            </span>
                                                                        </div>
                                                                    }
                                                                </div>
                                                            }
                                                        </div>
                                                        {
                                                            x.record &&
                                                            <div className="rce-mtmg-call-record">
                                                                <div className="rce-mtmg-call-body">
                                                                    <div
                                                                        onClick={(e) => onMeetingVideoLinkClick(x, i, e)}
                                                                        className="rce-mtmg-call-avatars">
                                                                        <Avatar
                                                                            className={'rce-mtmg-call-avatars'}
                                                                            src={x.record.avatar}/>
                                                                        <div className={'rce-mtmg-record-time'}>
                                                                            {x.record.time}
                                                                        </div>
                                                                    </div>
                                                                    <div className="rce-mtmg-call-body-title">
                                                                        <span>
                                                                            {x.record.title}
                                                                        </span>
                                                                        <div className="rce-mtmg-call-body-bottom">
                                                                            {x.record.savedBy}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        }
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
    date: new Date(),
    dateString: '',
    title: '',
    subject: '',
    collapseTitle: '',
    participantsLimit: 3,
    avatarFlexible: false,
    moreItems: [],
    dataSource: [],
    participants: [],
    onClick: () => void(0),
    onMeetingMoreSelect: () => void(0),
    onMeetingTitleClick: () => void(0),
    onMeetingVideoLinkClick: () => void(0),
    onAvatarError: () => void(0),
};

export default MeetingMessage;
