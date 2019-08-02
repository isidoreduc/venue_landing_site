import React, { useState } from 'react';
import './resources/styles.css';

import Header from './components/Header';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo/VenueInfo';

const App = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [headerShow, setHeaderShow] = useState(false);

	React.useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 0 ? setHeaderShow(true) : setHeaderShow(false);
		});
	});

	const toggleDrawer = () => setIsOpen(true);
	const toggleDrawerClosed = () => setIsOpen(false);

	return (
		<div>
			<Header
				headerShow={headerShow}
				toggleDrawer={toggleDrawer}
				open={isOpen}
				toggleDrawerClosed={toggleDrawerClosed}
			/>
			<Featured />
			<VenueInfo />
		</div>
	);
};

export default App;
