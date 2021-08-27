import './Timeline.css';

const items = [
	{
		title: 'Minting Closes',
		desc: 'On either sell out or 10 days after initial launch, we close minting forever for TFF.',
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
		title: 'Community Partnerships',
		desc: 'Partnerships with other artists and NFT projects to add money and potentially other tokens to the charity and community fund respectively.',
	},
	{
		title: 'Future projects',
		desc: 'Working on some future high utility NFT projects — The Faces Fund community will be pleasantly surprised and get a first row seat :)',
	},
];

const Timeline = () => (
	<div className="container">
		{items.map((i, idx) => (
			<div className="timeline-item text-lg" date-is='' key={idx}>
				<h1>{i.title}</h1>
				<p>{i.desc}</p>
			</div>
		))}
	</div>
);

export default Timeline;