import { makeStyles } from '@mui/styles'
import Sizes from './Sizes'

// *********USING JSS THAT IS WRITING CSS IN JS FILE*********
const useStyles = makeStyles({
    mainContainer: {
        
        '&:hover $deleteBtnContainer': {
            marginLeft: '20rem',
            marginTop:'-1rem',
            borderRadius: '0 .5rem .5rem 0',
            [Sizes.down('lg')]:{
                marginLeft: '14.9rem',
                marginTop:'-.7rem',
            }
        },
        '&:hover $paletteCard': {
            transform: 'scale(1.1)',
            transition: '0.2s linear',
            
        },
    },
    paletteCard: {
        backgroundColor: 'whitesmoke',
        width: '20rem',
        height: '20rem',
        borderRadius: '1.2rem',
        overflow: 'hidden',
        zIndex: '2',
        boxShadow:'1rem 1rem 1rem rgba(0,0,0,.5)',
        [Sizes.down('lg')]:{
            width: '15rem',
            height: '15rem',
        }
    },
    colorContainer: {
        width: '100%',
        height: '85%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        overflow: 'hidden',
        backgroundColor: '#8080801c',
    },
    colorBoxS: {
        width: '25%',
        height: '20%',
    },
    paletteName: {
        height: '15%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    cardName: {
        color: 'black',
        marginLeft: ' 1rem',
        fontSize: '1.2rem',
        [Sizes.down('lg')]:{
                fontSize: '1rem',
        }
    },
    span: {
        fontSize: '1.5rem',
        marginRight: '1rem',
        color: 'black'
    },

    deleteBtnContainer: {
        position: 'fixed',
        marginLeft: '15rem',
        zIndex: '-1',
        width: '4%',
        height: '7%',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '0 1rem 0 0',
        padding: '.28rem',
        cursor: 'pointer',
        transitionDuration: '.2s',
        borderWidth: '.1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:'1.8rem',
        '&:active': {
            opacity:'.7',
            fontSize: '1.2rem'
        },
        [Sizes.down('lg')]:{
            marginLeft: '8rem'
        }
    },
    deleteBtn: {
        backgroundColor: 'red',
        marginLeft: '.2rem'
    }
})

export default useStyles;