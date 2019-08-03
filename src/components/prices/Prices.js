import React, { useState } from 'react';
import Buttony from '../reusable comps/Buttony';
import Zoom from 'react-reveal/Zoom';

const Prices = () => {
	// eslint-disable-next-line no-unused-vars
	const [tickets, setTickets] = useState({
		price: ['750', '1000', '1500'],
		position: ['Bleechers', 'On Court', 'VIP'],
		description: [
			'Come and have a blast enjoying the advantage of altitude while taking in the disadvantage of distance like a champ',
			'On grass experience where the wild pogo experience will take you adrenaline to record levels',
			'VIP is VIP. You get to show off in style, get some cool memorabilia and exclusive acces to backstage'
		],
		delay: [500, 0, 500]
	});

	const showPrices = () =>
		// can use any of the arrays inside the tickets object to map
		tickets.position.map((box, i) => (
			<Zoom key={tickets.price[i] * Math.random()} delay={tickets.delay[i]}>
				<div className="pricing_item">
					<div className="pricing_inner_wrapper">
						<div className="pricing_title">
							<span>kr. {tickets.price[i]}</span>
							<span>{tickets.position[i]}</span>
						</div>
						<div className="pricing_description">{tickets.description[i]}</div>
						<div className="pricing_buttons">
							<Buttony
								url="https://www.rammstein.de/en/tickets/"
								text="Purchase Tickets"
								background="#ffa800"
								color="#ffffff"
							/>
						</div>
					</div>
				</div>
			</Zoom>
		));
	//#region alternative method
	// const [tickets, setTickets] = useState([
	// 	{
	// 		price: '750',
	// 		position: 'Bleechers',
	// 		description:
	// 			'Come and have a blast enjoying the advantage of altitude while taking in the disadvantage of distance like a champ'
	// 	},
	// 	{
	// 		price: '1000',
	// 		position: 'On Court',
	// 		description:
	// 			'On grass experience where the wild pogo experience will take you adrenaline to record levels'
	// 	},
	// 	{
	// 		price: '1500',
	// 		position: 'VIP',
	// 		description:
	// 			'VIP is VIP. You get to show off in style, get some cool memorabilia and exclusive acces to backstage'
	// 	}
	// ]);

	// const showPrices = () =>
	// 	tickets.map(t => (
	// 		<Zoom key={t.price * Math.random()}>
	// 			<div className="pricing_item">
	// 				<div className="pricing_inner_wrapper">
	// 					<div className="pricing_title">
	// 						<span>kr. {t.price}</span>
	// 						<span>{t.position}</span>
	// 					</div>
	// 					<div className="pricing_description">{t.description}</div>
	// 					<div className="pricing_buttons">
	// 						<Buttony
	// 							url="https://www.rammstein.de/en/tickets/"
	// 							text="Purchase Tickets"
	// 							background="#ffa800"
	// 							color="#ffffff"
	// 						/>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</Zoom>
	// 	));
	//#endregion

	return (
		<div className="bck_black">
			<div className="center_wrapper pricing_section">
				<h2>Pricing</h2>
			</div>
			<div className="pricing_wrapper">{showPrices()}</div>
		</div>
	);
};

export default Prices;
