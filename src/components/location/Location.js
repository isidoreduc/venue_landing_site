import React from 'react';

const Location = () => {
	return (
		// to center a div - style={{ textAlign: 'center' }}
		<div className="location_wrapper">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2223.4532319120744!2d10.191480215592629!3d56.13197457015166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c4073cf08ba5f%3A0x852c05147d4eb1fe!2sAtletion!5e0!3m2!1sen!2sdk!4v1564840204127!5m2!1sen!2sdk"
				width="100%"
				height="450px"
				frameBorder="0"
				allowFullScreen
				title="google maps"
			/>
			<div className="location_tag">
				<div>Location</div>
			</div>
		</div>
	);
};

export default Location;
