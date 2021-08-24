import './Timeline.css';

const Timeline = () => (
	<div className="container">
	
		<div className="timeline-item" date-is=''>
			<h1>Featured Top Wallet Sales:</h1>
			<p>
				The top 5 highest secondary sales wallets will be featured in our Top Donors Section of our website, in our discord and in a pinned tweet on our Twitter Profile.
			</p>
		</div>
		
		<div className="timeline-item" date-is=''>
			<h1>Featured Charity Recommenders:</h1>
			<p>
				The token holders that submitted a charity recommendation that was in the top 3 that cycle will be featured on the website, Twitter and Discord.
			</p>
		</div>
		
		<div className="timeline-item" date-is=''>
			<h1>Partnerships with future NFT projects:</h1>
			<p>
				We will work with other projects to have either a % of sales donated to the fund and/or tokens set aside for TFF token holders.
			</p>
		</div>
		
		<div className="timeline-item" date-is=''>
			<h1>First dibs on future NFT projects and drops:</h1>
			<p>
				That’s all we’ll say for now
			</p>
		</div>
	</div>
);

export default Timeline;