import React from 'react';
import './SystemMessage.css';

const classNames = require('classnames');

export class SystemMessage extends React.PureComponent {
    render() {
        return (
            <div className={classNames("rce-container-smsg", this.props.className)}>
                <div
                    className='rce-smsg'>
                    <div className="rce-smsg-text">
                        {this.props.text}
                    </div>
                </div>
            </div>
        );
    }
}

export default SystemMessage;
