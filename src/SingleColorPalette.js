import React, { Component } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import './singleColorPalette.css'
import { Link } from 'react-router-dom'


class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: "hex"
        }
        this._shades = this.gatherShades(this.props.palette, this.props.colorID)
        console.log(this._shades)//we can use state here but as shades is not changing therefore we are not using state
        this.handleFormatChange = this.handleFormatChange.bind(this)
    }

    gatherShades(palette, colorID) {
        let shades = [];
        const allColors = palette.colors;
        for (let key in allColors) {
            shades.push(allColors[key].filter(c => c.id === colorID))
        }
        return shades.slice(1);//this will give shades array from 1 index leaving index 0 which is key 50 bcz it is white color it was required for creating shades by tool we used we don't want to display it 
    }

    handleFormatChange(evt) {
        this.setState({ format: evt.target.value })
    };
    render() {
        const colorBoxes = this._shades.map(shade => {
            const shadeObj = shade[0]
            console.log(shadeObj)
            let newFormat = this.state.format
            console.log(newFormat)
            return (
                <ColorBox key={shadeObj.hex} name={shadeObj.name} background={shadeObj[newFormat]} showLink={false} />
            )
        }

        )

        return (
            <div className="singleColorPalette">
                <NavBar showSlider={false} handleFormatChange={this.handleFormatChange} />
                <div className="singleColorPalette-colorContainer">
                    {colorBoxes}
                </div>
                <div className="singleColorPalette-footer">
                    {console.log(`${window.location.pathname}`)}
                    <Link to={window.location.pathname.replace(`/${this.props.colorID}`, ``)}className="singleColorPalette-backBtn">Back</Link>
                    <div className="colorID">{this.props.colorID}</div>
                </div>
            </div >
        )
    }
}

export default SingleColorPalette;