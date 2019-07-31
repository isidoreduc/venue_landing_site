import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function Header() {
    const classes = useStyles();
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDrawer = () => setIsOpen(true)
    const toggleDrawerClosed = () => setIsOpen(false)

    const sideList = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawerClosed}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );



    return (
        <div>
            <AppBar position="fixed"
                style={{
                    backgroundColor: '#2f2f2f',
                    padding: '10px 0',
                    boxShadow: 'none'
                }}>
                <Toolbar>
                    <div className='header_logo'>
                        <div className='font_righteous header_logo_venue'>
                            A+Venues
                        </div>
                        <div className='header_logo_title'>
                            Music events
                        </div>
                    </div>

                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Drawer anchor="right" open={isOpen} onClose={toggleDrawerClosed}>
                        {sideList()}
                    </Drawer>
                    {/* <SideDrawer open={open} onClose={handleDrawerClose} /> */}
                </Toolbar>
            </AppBar>
        </div >

    );
}

