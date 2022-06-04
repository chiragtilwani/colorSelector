import { makeStyles } from '@mui/styles'
import Sizes from './Sizes'

// *********USING JSS THAT IS WRITING CSS IN JS FILE*********
const useStyles = makeStyles({
    mainContainer: {

        '&:hover $deleteBtnContainer': {
            marginLeft: '20rem',
            marginTop: '-1rem',
            borderRadius: '0 .5rem .5rem 0',
            visibility: 'visible',
            [Sizes.up('lg')]: {
                width: '4%',
                marginLeft: '20.2rem'
            },
            [Sizes.down('lg')]: {
                marginLeft: '20.5rem',
                width: '5%',
                marginTop: '-.7rem',
            },
            [Sizes.down('sm')]: {
                marginLeft: '20.6rem',
                width: '6%',
            },
            [Sizes.down('xs')]: {
                width: '8%',
            },
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
        boxShadow: '1rem 1rem 1rem rgba(0,0,0,.5)',
    },
    colorContainer: {
        width: '100%',
        height: '85%',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        overflow: 'hidden',
        backgroundColor: '#8080801c',
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
    },
    span: {
        fontSize: '1.5rem',
        marginRight: '1rem',
        color: 'black'
    },

    deleteBtnContainer: {
        position: 'fixed',
        marginLeft: '10%',
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
        fontSize: '1.8rem',
        visibility: 'hidden',
        '&:active': {
            opacity: '.7',
            fontSize: '1.2rem'
        },
        [Sizes.down('lg')]: {
            marginLeft: '8rem'
        },
        [Sizes.up('lg')]: {
            width: '2%',
            marginLeft: '10rem'
        }
    },
    deleteBtn: {
        backgroundColor: 'red',
        marginLeft: '.2rem'
    }
})

export default useStyles;