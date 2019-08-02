import React from 'react';
import Carousel from './Carousel';
import Countdown from './Countdown';

const Featured = () => {
	return (
		<div style={{ position: 'relative' }}>
			<Carousel />

			<div className="artist_name">
				<div className="wrapper" style={{ color: '#eff1f4' }}>
					Rammstein
					<br />
					<span
						style={{
							fontFamily: 'Righteous',
							textTransform: 'lowercase'
						}}
					>
						aarhus
					</span>
					<br />
					04.08.20
				</div>
			</div>

			<Countdown />
		</div>
	);
};

export default Featured;
