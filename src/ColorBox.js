import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom'
// import chroma from 'chroma-js'
// import { makeStyles } from '@mui/styles'
import useStyles from './styles/ColorBoxStyle'



function ColorBox(props) {
    const classes = useStyles(props);
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() =>
            setCopied(false), 1500
        )
    }

    let moreBtn = "";
    if (props.showLink) {
        moreBtn = <Link to={`${window.location.pathname}/${props.id}`} className={classes.more}>
            <span>More</span>
        </Link>
    }

    return (
        <div className={classes.colorBox} style={{ backgroundColor: props.background }}>
            <div className={copied ? `${classes.copyOverlay} ${classes.show}` : `${classes.copyOverlay}`} style={{ backgroundColor: props.background }} />
            <div className={copied ? `${classes.copyMsg} ${classes.showMsg}` : `${classes.copyMsg}`}>
                <h1 className={classes.copiedH1}>Copied!</h1>
                <p className={classes.copiedClr}>{props.background}</p>
            </div>
            <div className={classes.copyContainer}>
                <CopyToClipboard onCopy={handleCopy} text={props.background}>
                    <button className={classes.copyBtn}>Copy</button>
                </CopyToClipboard>
                <div className={classes.nameMore}>
                    <span className={classes.name}>{props.name}</span>
                    {moreBtn}
                </div>
            </div>
        </div>
    )
}

export default ColorBox