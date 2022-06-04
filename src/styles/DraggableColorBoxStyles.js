import { makeStyles } from '@mui/styles'

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
        letterSpacing: '.1rem'
    },
    trashBin: {
        transitionDuration: '.3s',
        '&:hover': {
            color: 'white',
            transform: 'scale(1.5)'
        }
    }
})

export default useStyles