import React, { Component } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import './singleColorPalette.css'
import { Link } from 'react-router-dom'
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: "hex",
            open:false
        }
        this._shades = this.gatherShades(this.props.palette, this.props.colorID)//we can use state here but as shades is not changing therefore we are not using state
        this.handleFormatChange = this.handleFormatChange.bind(this)
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
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
        this.setState({ format: evt.target.value,open:true })
    };

    handleClick = () => {
        this.setState({ open: true });
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };
    render() {
        const action = (
            <React.Fragment>
                <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={this.handleClose}
                >
                    <CloseIcon fontSize="medium" />
                </IconButton>
            </React.Fragment>
        );
        
        const colorBoxes = this._shades.map(shade => {
            const shadeObj = shade[0]
            let newFormat = this.state.format
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
                <Snackbar
                    open={this.state.open}
                    autoHideDuration={3000}
                    onClose={this.handleClose}
                    message={<span className="span-msg">Formate Changed to '{this.state.format.toUpperCase()}'</span>}
                    action={action}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                />
                <div className="singleColorPalette-footer">
                    <Link to={window.location.pathname.replace(`/${this.props.colorID}`, ``)}className="singleColorPalette-backBtn">Back</Link>
                    <div className="colorID">{this.props.colorID}</div>
                </div>
            </div >
        )
    }
}

export default SingleColorPalette;