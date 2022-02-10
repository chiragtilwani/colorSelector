import React, { Component } from 'react';
import './ColorBox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';
class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied:false
        }
        this.handleCopy=this.handleCopy.bind(this)
    }

    handleCopy(){
        this.setState({copied:true},()=>{
            setTimeout(()=>this.setState({copied:false}),1500)
        })
    }
    
    render() {
        return (
            <div className="color-box" style={{ backgroundColor: this.props.background.color }}>
                <div className={this.state.copied?"copy-overlay show" : "copy-overlay"} style={{ backgroundColor: this.props.background.color }}/>
                <div className={this.state.copied?"copy-msg show":"copy-msg"}>
                    <h1 className="copied-h1">Copied!</h1>
                    <p className="copied-clr">{this.props.background.color}</p>
                </div>
                <div className="copy-container">
                    <CopyToClipboard onCopy={this.handleCopy} text={this.props.background.color}>
                    <button className="copy-btn">Copy</button>
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