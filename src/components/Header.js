import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import SideDrawer from './SideDrawer';

export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [headerShow, setHeaderShow] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 0 ? setHeaderShow(true) : setHeaderShow(false)
        })
    })

    const toggleDrawer = () => setIsOpen(true)
    const toggleDrawerClosed = () => setIsOpen(false)

    return (
        <div>
            <AppBar position="fixed"
                style={{
                    backgroundColor: headerShow ? '#2f2f2f' : 'transparent',
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

                    <SideDrawer open={isOpen} onClose={toggleDrawerClosed} />
                </Toolbar>
            </AppBar>
        </div >

    );
}

