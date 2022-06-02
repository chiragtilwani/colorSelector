import React from 'react';
import useStyles from './styles/PaletteCardStyles'
import { FaTrash } from "react-icons/fa";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




function PaletteCard(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    function handleDelete(evt) {
        evt.stopPropagation();
        props.deletePalette(props.id)
        handleClose(evt);
    }

    const handleClickOpen = (evt) => {
        evt.stopPropagation()

        setOpen(true);
    };

    const handleClose = (evt) => {
        evt.stopPropagation()
        setOpen(false);
    };
    return (
        <div className={classes.mainContainer}>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete Palette"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this palette from palette list ? Deleted palette cannot be recovered.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleDelete} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
            <div className={classes.deleteBtnContainer} onClick={handleClickOpen}><FaTrash className={classes.deleteBtn} /></div>
            <div className={classes.paletteCard}>
                <div className={classes.colorContainer}>
                    {props.colors.map(c => <div className={classes.colorBoxS} style={{ backgroundColor: c.color }} key={c.name} />)}
                </div>
                <div className={classes.paletteName}>
                    <h3 className={classes.cardName}>{props.name} </h3>
                    <span className={classes.span}>{props.emoji}</span>
                </div>
            </div>
        </div>

    )
}



export default PaletteCard;