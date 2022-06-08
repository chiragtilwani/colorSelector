import chroma from 'chroma-js'
import { makeStyles } from '@mui/styles'
import Sizes from './Sizes'

const useStyles = makeStyles({
    colorBox: {
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        "&:hover": {
            "& $copyBtn": {
                opacity: '1',
                transition: '.5s'
            }
        },
        [Sizes.down('md')]:{
            // width: '50%',
            // height: props => props.showLink ? '30%' : '50%'
        },
        [Sizes.down('xs')]:{
            // width: '100%',
            
        },
        
    },

    copyContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
    },

    copyBtn: {
        cursor: 'pointer',
        width: '8rem',
        height: '3rem',
        outline: 'none',
        background: 'rgba(255, 255, 255, 0.3)',
        border: 'none',
        opacity: '0',
        color: props => chroma(`${props.background}`).luminance() >= 0.09 ? 'black' : 'white',
        letterSpacing: '0.1rem'
    },



    nameMore: {
        position: 'absolute',
        bottom: '0rem',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        fontSize: '1.2rem',
        
    },

    more: {
        background: 'rgba(255, 255, 255, 0.3)',
        width: '6rem',
        height: '2.5rem',
        textAlign: 'center',
        lineHeight: '3rem',
        letterSpacing: '0.1rem',
        textDecoration: 'none',
        color: 'black',
        fontWeight: '40',
    },

    name: {
        padding: '0.4rem',
        textTransform: ' uppercase',
        letterSpacing: ' 0.1rem',
        fontSize: '1rem',
        paddingTop: '.8rem',
        fontWeight: '400',
        color: props => chroma(`${props.background}`).luminance() >= 0.09 ? 'black' : 'white',
        [Sizes.down('sm')]:{
            fontSize:'1rem'
        },
    },

    copyOverlay: {
        width: '100%',
        height: '100%',
        zIndex: '0',
        opacity: ' 0',
        position: 'absolute',
        transition: 'transform 0.6s ease-in-out',
        transform: 'scale(0.1)',
    },

    show: {
        opacity: '1',
        transform: 'scale(50)',
        zIndex: '10',
        position: 'absolute',
    },

    copyMsg: {
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        color: 'white',
        visibility: 'hidden',
        zIndex: '0',
        transform: 'scale(0.1)',
    },

    showMsg: {
        visibility: 'visible',
        zIndex: '25',
        opacity: '1',
        width: ' 100%',
        height: '20%',
        margin: 'auto 0',
        transform: ' scale(1)',
        textShadow: '0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.5)',
        transition: 'all 0.4s ease-in-out',
    },

    copiedH1: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        padding: '1rem 0',
        fontSize: '4rem',
        letterSpacing: '0.1rem',
        textTransform: 'uppercase',
        color: props => chroma(`${props.background}`).luminance() >= 0.09 ? 'black' : 'white',
    },

    copiedClr: {
        fontSize: '1.8rem',
        fontWeight: '600',
        letterSpacing: '0.1rem',
        color: props => chroma(`${props.background}`).luminance() >= 0.09 ? 'black' : 'white'
    }
})

export default useStyles;