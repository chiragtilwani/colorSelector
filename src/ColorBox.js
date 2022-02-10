import React, { Component } from 'react';
import './ColorBox.css'

class ColorBox extends Component {
    render() {
        return (
            <div className="color-box" style={{backgroundColor:this.props.background.color}}>
                <span>{this.props.background.name}</span>
                <span>More!</span>
            </div>
        )
    }
}

export default ColorBox