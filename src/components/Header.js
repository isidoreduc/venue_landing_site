import React, { useEffect, useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'


const Header = () => {
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
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
