import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import NotificationsIcon from '@mui/icons-material/Notifications'
import { useSelector } from 'react-redux';
import { removeNotificationById } from '../app/navbarSlice';
import { useDispatch } from 'react-redux';
const Home = () => {
    const notifications = useSelector(state => state.navbar.notifications)
    const dispatch = useDispatch()
    return (
        <List dense={false}>
            {notifications.map(element => {
                return <ListItem
                    key={`notification-item-list-${element.id}`}
                    secondaryAction={
                        <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => {
                                dispatch(removeNotificationById({ id: element.id }))
                            }}>
                            <DeleteIcon />
                        </IconButton>
                    }
                >
                    <ListItemAvatar>
                        <Avatar>
                            <NotificationsIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={element.msg}
                    />
                </ListItem>
            })
            }
        </List>
    )
}



export default Home