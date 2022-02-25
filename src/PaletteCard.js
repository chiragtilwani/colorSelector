import React, { Component } from 'react';
import { makeStyles } from '@mui/styles'

// *********USING JSS THAT IS WRITING CSS IN JS FILE*********
const useStyles = makeStyles({
    paletteCard: {
        backgroundColor: 'whitesmoke',
        width: '20rem',
        height: '20rem',
        borderRadius: '1.2rem',
        overflow: 'hidden',
        '&:hover': {
            transform: 'scale(1.1)',
            transition: '0.1s linear'
        }
    },
    colorContainer: {
        margin: '0rem 0 1rem 0',
        width: '100%',
        height: '80%',
        display: 'flex',
        flexDirection: ' column',
        flexWrap: 'wrap',
        overflow: 'hidden',
    },
    colorBoxS: {
        width: '25%',
        height: '20%',
    },
    paletteName: {
        marginTop: ' 0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    cardName: {
        color: 'black',
        marginLeft: ' 1rem',
    }
})


function PaletteCard(props) {
    const classes = useStyles();
    return (
        <div className={classes.paletteCard}>
            <div className={classes.colorContainer}>
                {props.colors.map(c => <div className={classes.colorBoxS} style={{ backgroundColor: c.color }} />)}
            </div>
            <div className={classes.paletteName}>
                <h3 className={classes.cardName}>{props.name} {props.emoji}</h3>

            </div>
        </div>
    )
}

// class PaletteCard extends Component {
//     render() {
//         return (
//             <div className="palette-card">
//                 <div className="color-container">
//                     {this.props.colors.map(c => <div className="color-box-s" style={{ backgroundColor: c.color }} />)}
//                 </div>
//                 <div className="palette-name">
//                     <h3 className="card-name">{this.props.name} {this.props.emoji}</h3>

//                 </div>
//             </div>
//         )
//     }
// }

export default PaletteCard;