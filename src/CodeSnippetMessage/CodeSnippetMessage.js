import React, { Component } from 'react';
import './CodeSnippetMessage.css';
import FaCloudDownload from 'react-icons/lib/fa/cloud-download';
import FaError from 'react-icons/lib/fa/exclamation-triangle';

const ProgressBar = require('react-progress-bar.js');
const Circle = ProgressBar.Circle;
import "prismjs/themes/prism.css";
import Prism from "prismjs";
export default class CodeSnippetMessage extends Component {
    constructor(props) {
        super(props);
        this.className = `language-${this.props.data.language}`;
        this.prismNode = React.createRef();
        this.hightlight = this.hightlight.bind(this);
        require('prismjs/components/prism-' + this.props.data.language);
        require('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min');
        require('prismjs/plugins/line-numbers/prism-line-numbers.min');
        require('prismjs/plugins/line-numbers/prism-line-numbers.css');
    }

    hightlight() {
        Prism.plugins.NormalizeWhitespace.setDefaults({
            'remove-trailing': true,
            'remove-indent': true,
            'left-trim': true,
            'right-trim': true,

            /*'break-lines': 80,
            'indent': 2,
            'remove-initial-line-feed': false,
            'tabs-to-spaces': 4,
            'spaces-to-tabs': 4*/
        });
        Prism.highlightElement(this.prismNode);
    }

    componentDidMount() {
        this.hightlight();
    }

    componentDidUpdate() {
        this.hightlight();
    }

    render() {
        var progressOptions = {
            strokeWidth: 2.3,
            color: '#efe',
            trailColor: '#aaa',
            trailWidth: 1,
            step: (state, circle) => {
                circle.path.setAttribute('trail', state.color);
                circle.path.setAttribute('trailwidth-width', state.width);
                var value = Math.round(circle.value() * 100);
                if (value === 0)
                    circle.setText('');
                else
                    circle.setText(value);
            }
        };
        const error = this.props.data.status && this.props.data.status.error === true;
        return (
            <div className="rce-mbox-code">
                <div
                    className="rce-mbox-code--snap"
                    style={this.props.data.width && this.props.data.height && {
                        width: this.props.data.width,
                        height: this.props.data.height,
                    }}>
                    {
                        <React.Fragment>
                            <pre className="line-numbers" style={{minWidth: 500}}>
                                <code ref={prismNode => this.prismNode = prismNode} className={this.className}>
                                    {
                                        this.props.data.code
                                    }
                                </code>
                            </pre>
                        </React.Fragment>
                    }
                    {
                        error &&
                        <div className="rce-mbox-code--code__block">
                            <span
                                className="rce-mbox-code--code__block-item rce-mbox-code--error">
                                <FaError/>
                            </span>
                        </div>
                    }
                    {
                        !error &&
                        this.props.data.status &&
                        !this.props.data.status.download &&
                        <div className="rce-mbox-code--code__block">
                            {
                                !this.props.data.status.click &&
                                <button
                                    onClick={this.props.onDownload}
                                    className="rce-mbox-code--code__block-item rce-mbox-code--download">
                                    <FaCloudDownload/>
                                </button>
                            }
                            {
                                typeof this.props.data.status.loading === 'number' &&
                                this.props.data.status.loading !== 0 &&
                                <Circle
                                    progress={this.props.data.status.loading}
                                    options={progressOptions}
                                    initialAnimate={true}
                                    containerClassName={'rce-mbox-code--code__block-item'} />
                            }
                        </div>
                    }
                </div>
                {
                    this.props.text &&
                    <div className="rce-mbox-text">
                        {this.props.text}
                    </div>
                }
            </div>
        );
    }
}

CodeSnippetMessage.defaultProps = {
    data: {
        language: 'java',
        code: `class deneme`
    },
    onOpen: null,
    onDownload: null,
    onClick: null,
    onLoad: null,
    text: undefined,
};
