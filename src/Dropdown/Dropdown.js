import React, { Component } from 'react';
import './Dropdown.css';

import Button from '../Button/Button';

const classNames = require('classnames');

export class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: undefined,
        };
    }

    onBlur(e) {
        if (this.state.show === true)
            this.setState({show: false});
    }

    render() {
        return (
            <div className={classNames('rce-dropdown-container', this.props.className)} onBlur={this.onBlur.bind(this)}>
                {
                    <Button
                        {...this.props.buttonProps}
                        onClick={() => this.setState({ show: !this.state.show })} />
                }
                <div
                    className={classNames(
                        'rce-dropdown',
                        this.props.animationType,
                        'rce-dropdown-open__' + this.props.animationPosition,
                        { 'dropdown-hide': this.state.show === false },
                        { 'dropdown-show': this.state.show === true })}>

                        <ul>
                            {
                                this.props.items.map((x, i) => (
                                    <li key={i} onMouseDown={(e) => this.props.onSelect(i)}>
                                        <a>{x}</a>
                                    </li>
                                ))
                            }
                        </ul>
                </div>
            </div>
        );
    }
}

Dropdown.defaultProps = {
    animationType: 'default',
    animationPosition: 'nortwest',
    items: [],
    onSelect: Function,
    buttonProps: null
};

export default Dropdown;
