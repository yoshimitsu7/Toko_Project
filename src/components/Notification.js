import React from 'react'
import { Snackbar, makeStyles, Typography, Button} from '@material-ui/core';
import { Alert} from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
    root: {
        top: theme.spacing(9)
    }
}))


export default function Notification(props) {
    const { notify, setNotify} = props;
    const classes = useStyles()
    const handleClose = ( event, reason) =>{
    setNotify({...notify, isOpen:false})
    }


    return (
        <Snackbar
            className={classes.root}
            open={notify.isOpen}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{vertical:'top', horizontal: 'right'}}
            >
            <Alert onClose={handleClose} severity={notify.type}>
            {notify.message}
            </Alert>
        </Snackbar>
    )
}
