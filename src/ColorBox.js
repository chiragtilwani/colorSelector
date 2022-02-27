import React, { Component } from 'react';
import './ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link} from 'react-router-dom'


class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false
        }
        this.handleCopy = this.handleCopy.bind(this)
    }

    handleCopy() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500)
        })
    }


    render() {
        let moreBtn="";
        if(this.props.showLink){
            moreBtn=<Link to={`${window.location.pathname}/${this.props.id}`} className="more">
            <span>More</span>
        </Link>
        }
        return (
            <div className={this.props.showLink?"color-box":'singleColorPaletteBox'} style={{ backgroundColor: this.props.background }}>
                <div className={this.state.copied ? "copy-overlay show" : "copy-overlay"} style={{ backgroundColor: this.props.background }} />
                <div className={this.state.copied ? "copy-msg show" : "copy-msg"}>
                    <h1 className="copied-h1">Copied!</h1>
                    <p className="copied-clr">{this.props.background}</p>
                </div>
                <div className="copy-container">
                    <CopyToClipboard onCopy={this.handleCopy} text={this.props.background}>
                        <button className="copy-btn">Copy</button>
                    </CopyToClipboard>
                    <div className="name-more">
                        <span className="name">{this.props.name}</span>
                        {moreBtn}
                    </div>
                </div>
            </div>
        )
    }
}

export default ColorBox