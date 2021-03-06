import * as React from "react";
import { useState } from 'react'
import "./styles/NewPaletteForm.css";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './styles/SavePaletteForm.css'
import Picker from 'emoji-picker-react';

function SavePaletteForm(props) {
    const { savePalette, navigate, paletteName, handlePaletteNameChange, colorArray } = props
    const [open, setOpen] = React.useState(false);
    const [showEmojiModal, setShowEmojiModal] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onEmojiClick = (event, emojiObject) => {
        setShowEmojiModal(false);
        props.SetEmojiFunc(emojiObject.emoji)
        savePalette();
    };

    const handleShowEmojiClick = () => {
        setShowEmojiModal(true);
        setOpen(false);
    }
    function closeEmojiModal() {
        setShowEmojiModal(false);
    }
    return (
        <div >
            {showEmojiModal ? <Dialog open={showEmojiModal} onClose={closeEmojiModal}>
                <DialogTitle className='emoji-dialog-title'>Choose A Palette Emoji</DialogTitle>

                <Picker onEmojiClick={onEmojiClick} />
            </Dialog> : null}

            <Dialog open={open} onClose={handleClose} className='dialog'>
                <DialogTitle className='dialog-title'>Choose A Palette Name</DialogTitle>
                <DialogContent className='dialog-content'>
                    <DialogContentText className='dialog-content-text'>
                        Please choose the name for your palette. Make sure it's unique !
                    </DialogContentText>

                </DialogContent>
                <ValidatorForm onSubmit={handleShowEmojiClick} instantValidate={false}>
                    <TextValidator
                        label="Palette Name"
                        value={paletteName}
                        onChange={handlePaletteNameChange}
                        validators={["required", "isPaletteNameUnique"]}
                        errorMessages={[
                            "this field is required",
                            "palette name must be unique",
                        ]}
                        autoFocus
                        margin="dense"
                        id="name"
                        variant="standard"
                        style={{ margin: '0 1rem 0 2.7rem', width: '85%' }}
                    />
                    <DialogActions>
                        <Button onClick={handleClose} className="dialog-btn">Cancel</Button>
                        <Button type="submit" className="dialog-btn">Choose Emoji</Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>

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

                <button
                    className={colorArray.length === 0 ? 'disableBtn' : "custom-btn save-palette-btn"}
                    style={{ textDecoration: "none", fontWeight: "bold" }}
                    onClick={handleClickOpen}
                    disabled={colorArray.length === 0 ? true : false}
                >
                    Save Palette
                </button>

            </div>
        </div >
    )
}

export default SavePaletteForm;