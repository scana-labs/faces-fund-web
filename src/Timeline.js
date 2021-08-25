import './Timeline.css';

const items = [
	{
		title: 'Featured Top Wallet Sales',
		desc: 'The top 5 highest secondary sales wallets will be featured in our Top Donors Section of our website, in our discord and in a pinned tweet on our Twitter Profile.',
	},
	{
		title: 'Featured Charity Recommenders',
		desc: 'The token holders that submitted a charity recommendation that was in the top 3 that cycle will be featured on the website, Twitter and Discord.',
	},
	{
		title: 'Partnerships with future NFT projects',
		desc: 'We will work with other projects to have either a % of sales donated to the fund and/or tokens set aside for TFF token holders.',
	},
	{
		title: 'First dibs on future NFT projects and drops',
		desc: 'That’s all we’ll say for now',
	},
];

const Timeline = () => (
	<div className="container">
		{items.map((i, idx) => (
			<div className="timeline-item text-lg" date-is='' key={idx}>
				<h1>{i.title}:</h1>
				<p>
					{i.desc}
				</p>
			</div>
		))}
	</div>
);

export default Timeline;