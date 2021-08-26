const faqs = [
{
	question: 'How will token holders vote?',
	answer: 'Every two weeks, we will hold a two step process. First, token holders will submit charities via Discord to be voted on by the rest of the community. We will vet the submitted charities, and then hold a vote using rank choice voting on Snapshot among token holders to decide on which charities receive donations from our fund.'
},
{
	question: 'Why don’t I just donate to my favorite cause directly?',
	answer: 'You absolutely should! This project aims to be an additional avenue for individuals already committed to philanthropy to pool together resources previously not possible with just individual donations as well as give token holders value beyond the initial mint cost of the project. We’ve seen the tremendous philanthropic impact other projects like BAYC and CyberKongz have had on the community and we’re here for it.',
},
{
	question: 'How will this project continue to replenish the Charity Fund?',
	answer: 'Beyond the initial Charity fund enabled by the initial sale, we will be partnering with new NFT projects and artists to auction off artwork where the proceeds will be added to the Charity Fund. We aim to be the pre-eminent Philanthropy-driven NFT project in this space so other projects will want to partner with us.',
},
{
	question: 'How will this project continue to replenish the Community Fund?',
	answer: 'Beyond the initial Community fund enabled by the initial sale, 3% of all secondary sales will be added directly to the community fund.',
},
{
	question: 'Any other royalties?',
	answer: 'The creators will receive 3% of all secondary sales. This helps with managing and growing The Faces Fund as a philanthropic brand in the NFT space, which ultimately will provide value to token holders and more charities around the world.',
},
{
	question: 'How many tokens and at what cost?',
	answer: 'There will be 3,000 total tokens available. Mint price is at 0.05ETH each. From the 3,000 total tokens, we have pre allocated 196 random tokens to the community fund for giveaways. The 4 creators have each chosen their desired face token. All tokens except for the creator tokens are randomly generated.',
},
];

const FAQ = () => (
	<div id="faq" className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
		<div className="lg:grid lg:grid-cols-3 lg:gap-8">
		<div>
			<h2 className="text-3xl font-extrabold text-white">Frequently asked questions</h2>
			<p className="mt-4 text-lg text-white">
			Can’t find the answer you’re looking for? Reach out to our{' '}
			<a href="#team" className="font-medium text-indigo-600 hover:text-indigo-500">
				team
			</a>{' '}
			on Discord.
			</p>
		</div>
		<div className="mt-12 lg:mt-0 lg:col-span-2">
			<dl className="space-y-12">
			{faqs.map((faq) => (
				<div key={faq.question}>
				<dt className="text-xl leading-6 font-bold text-white">{faq.question}</dt>
				<dd className="text-lg mt-2 text-base text-white">{faq.answer}</dd>
				</div>
			))}
			</dl>
		</div>
		</div>
	</div>
);

export default FAQ;