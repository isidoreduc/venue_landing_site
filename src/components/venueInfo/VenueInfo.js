import React from 'react';
// import DateRange from '@material-ui/icons/DateRange';
// import LocationOn from '@material-ui/icons/LocationOn';
import calendar from '../../resources/images/calendar.png';
import location from '../../resources/images/location.png';

const VenueInfo = () => {
	return (
		<div className="bck_black">
			<div className="center_wrapper">
				<div className="vn_wrapper">
					<div className="vn_item">
						<div className="vn_outer">
							<div className="vn_inner">
								<div className="vn_icon_square bck_red" />
								<div
									className="vn_icon"
									style={{ background: `url(${calendar})` }}
								/>
								<div className="vn_title">
									<b>Event Date & Time</b>
								</div>
								<div className="vn_desc" style={{ fontSize: '24px' }}>
									4 August 2020 <br />
									@7.00 pm
								</div>
							</div>
						</div>
					</div>

					<div className="vn_item">
						<div className="vn_outer">
							<div className="vn_inner">
								<div className="vn_icon_square bck_yellow" />
								<div
									className="vn_icon"
									style={{ background: `url(${location})` }}
								/>
								<div className="vn_title">
									<b>Event Location</b>
								</div>
								<div className="vn_desc" style={{ fontSize: '24px' }}>
									Aarhus Idrætspark <br />
									8000 Aarhus, DK
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VenueInfo;
