import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Info from '@material-ui/icons/Info';
import Highlight from '@material-ui/icons/Highlight';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Place from '@material-ui/icons/Place';
import Timelapse from '@material-ui/icons/Timelapse';
import React from 'react';


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function SideDrawer({ open, onClose }) {
    const classes = useStyles();
    return (
        <Drawer
            open={open}
            anchor="right"
            onClick={onClose}
        >
            <div className={classes.list}
                role="presentation">
                <List>
                    <ListItem button onClick={() => null}>
                        <ListItemIcon><Timelapse /></ListItemIcon>
                        <ListItemText primary='Are we there yet?' />
                    </ListItem>
                    <ListItem button onClick={() => null}>
                        <ListItemIcon><Info /></ListItemIcon>
                        <ListItemText primary='Venue info' />
                    </ListItem>
                    <ListItem button onClick={() => null}>
                        <ListItemIcon><Highlight /></ListItemIcon>
                        <ListItemText primary='Highlights' />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button onClick={() => null}>
                        <ListItemIcon><ShoppingCart /></ListItemIcon>
                        <ListItemText primary='Pricing' />
                    </ListItem>
                    <ListItem button onClick={() => null}>
                        <ListItemIcon><Place /></ListItemIcon>
                        <ListItemText primary='Location' />
                    </ListItem>
                </List>
            </div>

        </Drawer >
    )
}
