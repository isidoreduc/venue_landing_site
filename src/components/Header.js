import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import SideDrawer from './SideDrawer';

export default function Header(props) {
	return (
		<div>
			<AppBar
				position="fixed"
				style={{
					backgroundColor: props.headerShow ? '#2f2f2f' : 'transparent',
					padding: '10px 0',
					boxShadow: 'none'
				}}
			>
				<Toolbar>
					<div className="header_logo">
						<div className="font_righteous header_logo_venue">a+venues</div>
						<div className="header_logo_title">Music events</div>
					</div>

					<IconButton
						color="inherit"
						aria-label="menu"
						onClick={props.toggleDrawer}
					>
						<MenuIcon />
					</IconButton>
					<SideDrawer open={props.open} onClose={props.toggleDrawerClosed} />
				</Toolbar>
			</AppBar>
		</div>
	);
}
