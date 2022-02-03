import * as React from 'react';
import { IconButton, Badge, AppBar, Box, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import NotificationsIcon from '@mui/icons-material/Notifications'
import {useSelector} from 'react-redux'

const useStyles = makeStyles({
    links: {
        display: "flex",
        justifyContent: "space-between",
        width: "30%"
    },
    link: {
        color: 'white',
        textDecoration: "none",
        fontSize: 18,
        margin: "auto"
    }
})

const Navbar = () => {

    const classes = useStyles();

    const notifications = useSelector(state => state.navbar.notifications)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Notifications System
                    </Typography>
                    <div className={classes.links}>
                        <Link
                            className={classes.link}
                            to="/home">
                            Home
                        </Link>
                        <Link
                            className={classes.link}
                            to="/createnotification">
                            Create
                        </Link>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={notifications.length} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar