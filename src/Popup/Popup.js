import React, { Component } from 'react';
import './Popup.css';

import Button from '../Button/Button';

const classNames = require('classnames');

export class Popup extends Component {
    render() {
        if (this.props.show === true)
        return (
            <div className={classNames('rce-popup-wrapper', this.props.type, this.props.className)}>
                <div className="rce-popup">
                    {
                        this.props.renderHeader ?
                            <div className="rce-popup-header">
                                {this.props.renderHeader()}
                            </div>
                        :
                        <div className="rce-popup-header">
                            <span>{this.props.header}</span>
                            {
                                this.props.header &&
                                this.props.headerButtons.map((x, i) => (
                                    <Button
                                        key={i}
                                        {...x}/>
                                ))
                            }
                        </div>
                    }
                    <div className="rce-popup-content" style={{color: this.props.color}}>
                        {
                            this.props.renderContent ?
                                this.props.renderContent()
                            :
                            this.props.text
                        }
                    </div>
                    <div className="rce-popup-footer">
                        {
                            this.props.renderFooter ?
                                this.props.renderFooter()
                            :
                            this.props.footerButtons.map((x, i) => (
                                <Button
                                    key={i}
                                    {...x}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
        return null;
    }
}

Popup.defaultProps = {
    show: false,
    header: null,
    text: null,
    headerButtons: [],
    footerButtons: [],
    renderHeader: null,
    renderContent: null,
    renderFooter: null,
    color: '#333',
};

export default Popup;
