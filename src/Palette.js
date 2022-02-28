import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css'
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import NavBar from './NavBar';
import { Link } from 'react-router-dom'


class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500, format: "hex", open: false }
        this.handleChange = this.handleChange.bind(this)
        this.handleFormatChange = this.handleFormatChange.bind(this)
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleChange(newLevel) {
        this.setState({ level: newLevel })
    }

    handleFormatChange(evt) {
        this.setState({ format: evt.target.value, open: true })
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
        
        return (
            <div className="palette">
                <NavBar level={this.state.level} handleChange={this.handleChange} handleFormatChange={this.handleFormatChange} format={this.state.format} showSlider={true} />

                <div className="palette-colors">
                    {this.props.palette.colors[this.state.level].map(c => <ColorBox background={c[this.state.format]} name={c.name} key={c.name} id={c.id} showLink={true} />)}
                </div>

                <Snackbar
                    open={this.state.open}
                    autoHideDuration={3000}
                    onClose={this.handleClose}
                    message={<span className="span-msg">Formate Changed to '{this.state.format.toUpperCase()}'</span>}
                    action={action}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                />

                <footer className="footer">
                    <Link to="/" className="back-btn">Back</Link>
                    <p className="footer-p">{this.props.palette.paletteName} {this.props.palette.emoji}</p>
                </footer>
            </div>
        )
    }
}

export default Palette;