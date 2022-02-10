import React, { Component } from 'react';
import './ColorBox.css'

class ColorBox extends Component {
    render() {
        return (
            <div className="color-box" style={{ backgroundColor: this.props.background.color }}>
                <div className="copy-container">
                    <button className="copy-btn">Copy</button>
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