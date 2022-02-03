import { makeStyles } from '@mui/styles';
import { Paper, Typography, TextField, Button } from '@mui/material'
import { display, padding } from '@mui/system';

const useStyles = makeStyles({
    root: {
        width: "100vw",
        display: "flex",
        justifyContent: "center"
    },
    paper: {
        marginTop: "100px",
        width: "300px",
        height: "200px",
        textAlign:"center",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        padding:"1rem"

    }

})

const CreateNotification = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h6" gutterBottom component="div">
                    Create New Notfication
                </Typography >
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <Button variant="contained">Message</Button>

            </Paper>
        </div>
    )
}

export default CreateNotification