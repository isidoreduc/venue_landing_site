import React from 'react';
import Button from '@material-ui/core/Button';
import TicketIcon from '../../resources/images/ticketIcon.png';

const Buttony = props => {
	return (
		<Button
			href={props.url}
			variant="contained"
			size="small"
			style={{ background: `${props.background}`, color: `${props.color}` }}
			// target blank opens link in new tab
			target="_blank"
		>
			<img src={TicketIcon} alt="icon" className="iconImage" />
			{props.text}
		</Button>
	);
};

export default Buttony;
