import './Timeline.css';

const items = [
	{
		title: 'Minting Opens',
		desc: 'Tokens are released in batches meaning only a set number of tokens can be minted each day. For a given day, if the maximum number of tokens are not minted then the remaining tokens are burned. Once all tokens have been minted or burned, minting closes.',
	},
	{
		title: 'Exclusive Discord is created for token holders',
		desc: 'Upon Verification, our members will get the alpha before anyone else.',
	},
	{
		title: 'Weekly Donations Begin',
		desc: 'The first weekly donation voting cycle begins — we’ll make this one huge with many charity winners and many community winners.',
	},
	{
		title: 'Featured Charities and Submitters',
		desc: 'New sections on our website and Twitter that feature charities that we donate to and the wallets who submitted them.',
	},
	{
		title: 'Rarity Platform is launched',
		desc: 'Token holders will have access to premium features. Non-token holders can pay a subscription fee to access.',
	},
	{
		title: 'Community Events and Giveaways',
		desc: 'We’ll keep this under wraps for now… :)',
	},
	{
		title: 'Future projects',
		desc: 'Working on some future high utility NFT projects — The Faces Fund community will be pleasantly surprised and get a first row seat :)',
	},
];

const Timeline = () => (
	<div className="container">
		{items.map((i, idx) => (
			<div className="timeline-item" date-is='' key={idx}>
				<p className="text-2xl">{i.title}</p>
				<p className="text-lg">{i.desc}</p>
			</div>
		))}
	</div>
);

export default Timeline;