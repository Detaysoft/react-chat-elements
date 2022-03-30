import React from 'react';
import './SystemMessage.css';

import classNames from "classnames";

interface ISystemMessage extends IMessage {
}

interface ISystemMessageProps {
  message?: ISystemMessage;
  className?: string;
}

const SystemMessage: React.FC<ISystemMessageProps> = (props) => {
    return (
        <div className={classNames("rce-container-smsg", props.className)}>
            <div className="rce-smsg">
                <div className="rce-smsg-text">{props.message?.text}</div>
            </div>
        </div>
    );
};

export default SystemMessage;
