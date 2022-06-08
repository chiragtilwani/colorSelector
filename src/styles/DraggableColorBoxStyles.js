import { makeStyles } from '@mui/styles'
import chroma from 'chroma-js'


const useStyles = makeStyles({
    container: {
        backgroundColor: props => props.bgclr,
        height: '25%',
        minHeight:'15rem',
        display: 'flex',
        alignItems: 'flex-end',
        '&:hover svg': {
            color: 'white',
            transform: 'scale(1.5)'
        },
    },
    nameTrashBtn: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        padding: '.5rem .7rem',
        letterSpacing: '.1rem',
        color: props => chroma(props.bgclr).luminance() >= 0.09 ? 'black' : 'white',

    },
    trashBin: {
        transitionDuration: '.3s',
        fontSize:'1.2rem',
        '&:hover': {
            color: 'white',
            transform: 'scale(1.5)'
        }
    }
})

export default useStyles