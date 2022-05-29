import * as React from "react";
import { Link} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import "./styles/NewPaletteForm.css";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { BiAddToQueue } from 'react-icons/bi';

function NewPaletteNav(props) {
    const {open,AppBar,handleDrawerOpen,navigate,savePalette,paletteName,handlePaletteNameChange,colorArray}=props
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
                <div className="btn-container">
                    <button
                        onClick={() => { navigate('/') }}
                        className="custom-btn go-back-btn"
                        style={{
                            textDecoration: "none",
                            fontWeight: "bold",
                            paddingTop: "1rem",
                        }}
                    >
                        Go Back
                    </button>
                    <ValidatorForm onSubmit={savePalette}>
                        <TextValidator
                            label="Palette Name"
                            value={paletteName}
                            onChange={handlePaletteNameChange}
                            validators={["required", "isPaletteNameUnique"]}
                            errorMessages={[
                                "this field is required",
                                "palette name must be unique",
                            ]}
                        />
                        <button
                            className={colorArray.length === 0 ? 'disableBtn' : "custom-btn save-palette-btn"}
                            style={{ textDecoration: "none", fontWeight: "bold" }}
                            type="submit"
                            disabled={colorArray.length === 0 ? true : false}
                        >
                            Save Palette
                        </button>
                    </ValidatorForm>
                </div>
            </Toolbar>
        </AppBar>

    </div>)
}

export default NewPaletteNav;