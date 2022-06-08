import * as React from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import "./styles/NewPaletteForm.css";
import { BiAddToQueue } from 'react-icons/bi';
import SavePaletteForm from './SavePaletteForm'

function NewPaletteNav(props) {
    const { open, AppBar, handleDrawerOpen, navigate, savePalette, paletteName, handlePaletteNameChange, colorArray } = props


    function SetEmojiFunc(Emoji) {
        props.addEmoji(Emoji)
    }


    return (<div>
        <CssBaseline />
        <AppBar position="fixed" open={open} color="default">
            <Toolbar
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <div className="logo-icon-container">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 1, ...(open && { display: "none" }), padding: "15px" }}
                    >
                        <BiAddToQueue style={{ fontSize: '1.8rem' }} />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        <Link
                            to="/"
                            className="logo"
                            style={{ backgroundColor: "transparent", color: "black" }}
                        >
                            Color<span className="selector">Selector</span>
                        </Link>
                    </Typography>
                </div>
                <SavePaletteForm savePalette={savePalette} navigate={navigate} paletteName={paletteName} handlePaletteNameChange={handlePaletteNameChange} colorArray={colorArray} SetEmojiFunc={SetEmojiFunc} />
            </Toolbar>
        </AppBar>

    </div>)
}

export default NewPaletteNav;