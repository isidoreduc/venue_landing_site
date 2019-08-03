import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Buttony from '../reusable comps/Buttony';

const Discount = () => {
	const [discountStart, setDiscountStart] = useState(0);
	// eslint-disable-next-line
	const [discountEnd, setDiscountEnd] = useState(15);

	let showPercentage = () => {
		if (discountStart < discountEnd) setDiscountStart(discountStart + 1);
	};

	useEffect(() => {
		setTimeout(() => showPercentage(), 30);
	});

	return (
		<div className="center_wrapper">
			<div className="discount_wrapper">
				{/* only shows the percentage animation when we reveal the component */}
				<Fade onReveal={() => showPercentage()}>
					<div className="discount_porcentage">
						<span>{discountStart}%</span>
						<span>OFF</span>
					</div>
				</Fade>
				<Slide right>
					<div className="discount_description">
						<h3>Get tickets before July 1st</h3>
						<p>
							The tickets will probably sold out in a matter of hours after
							going on sale, but hey, we like discounts as any other out there,
							so discounts galore for everybody.
						</p>
						<Buttony
							url="https://www.rammstein.de/en/tickets/"
							text="Purchase Tickets"
							background="#ffa800"
							color="#ffffff"
						/>
					</div>
				</Slide>
			</div>
		</div>
	);
};

export default Discount;
