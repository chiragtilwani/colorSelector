import React, { Component } from 'react';
import './ColorBox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';
class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied:""
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({copied:this.props.background.color})
    }
    render() {
        return (
            <div className="color-box" style={{ backgroundColor: this.props.background.color }}>
                <div className="copy-container">
                    <CopyToClipboard text={this.state.copied}>
                    <button className="copy-btn" onClick={this.handleClick}>Copy</button>
                    </CopyToClipboard>
                    <div className="name-more">
                        <span className="name">{this.props.background.name}</span>
                        <span className="more">MORE</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ColorBox