import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import mixpanel from 'mixpanel-browser';

const faqs = [
	{
		question: 'How are the initial sales allocated?',
		answer: '34% of initial sales are added to the Charity Fund. 33% of initial sales are added to the Community Fund. 33% is used for marketing, giveaways and building premium NFT tools.',
		tag: 'initial sale allocation',
	},
	{
		question: 'How will token holders vote?',
		answer: 'Every two weeks, we will hold a two step process. First, token holders will submit charities via Discord to be voted on by the rest of the community. We will vet the submitted charities, and then hold a vote using rank choice voting on Snapshot among token holders to decide on which charities receive donations from our fund.',
		tag: 'token voting',
	},
	{
		question: 'Why don’t I just donate to my favorite cause directly?',
		answer: 'You absolutely should! This project aims to be an additional avenue for individuals already committed to philanthropy to pool together resources previously not possible with just individual donations as well as give token holders value beyond the initial mint cost of the project. We’ve seen the tremendous philanthropic impact other projects like BAYC and CyberKongz have had on the community and we’re here for it.',
		tag: 'donate directly',
	},
	{
		question: 'How will this project continue to replenish the Charity Fund?',
		answer: 'Beyond the initial Charity fund enabled by the initial sale, we will be partnering with new NFT projects and artists to auction off artwork where the proceeds will be added to the Charity Fund. We aim to be the pre-eminent Philanthropy-driven NFT project in this space so other projects will want to partner with us.',
		tag: 'replenish charity fund',
	},
	{
		question: 'How will this project continue to replenish the Community Fund?',
		answer: 'Beyond the initial Community fund enabled by the initial sale, 2% of all secondary sales will be added directly to the community fund.',
		tag: 'replenish community fund',
	},
	{
		question: 'Any other royalties?',
		answer: 'The creators will receive 3% of all secondary sales. This helps with managing and growing The Faces Fund as a philanthropic brand in the NFT space, which ultimately will provide value to token holders and more charities around the world.',
		tag: 'royalties',
	},
	{
		question: 'How many tokens and at what cost?',
		answer: 'There will be 3,000 total tokens available. Mint price is at 0.05ETH each. From the 3,000 total tokens, we have pre allocated 256 random tokens to the community fund for giveaways. The 4 creators have each chosen their desired face token. All tokens except for the creator tokens are randomly generated.',
		tag: 'tokens and cost',
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const FAQ = () => (
	<div id="faq" className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 pt-36 pb-36">
		<div className="lg:grid lg:grid-cols-3 lg:gap-8">
			<div>
				<h1 className="text-3xl font-extrabold mb-4">Frequently asked questions</h1>
				<p className="text-lg">
				Can’t find the answer you’re looking for? Reach out to our team on Discord.
				</p>
			</div>
			<div className="lg:mt-0 lg:col-span-2">
				<dl className="space-y-6 divide-y divide-black">
				{faqs.map((faq) => (
				<Disclosure as="div" key={faq.question} className="pt-6">
					{({ open }) => (
					<>
						<dt className="text-lg">
						<Disclosure.Button className="text-left w-full flex justify-between items-start" onClick={() => (mixpanel.track('FAQ', { tag: faq.tag }))}>
							<span className="font-medium">{faq.question}</span>
							<span className="ml-6 h-7 flex items-center">
								<ChevronDownIcon
									className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
									aria-hidden="true"
								/>
							</span>
						</Disclosure.Button>
						</dt>
						<Disclosure.Panel as="dd" className="mt-2 pr-12">
						<p className="text-base">{faq.answer}</p>
						</Disclosure.Panel>
					</>
					)}
				</Disclosure>
				))}
			</dl>
			</div>
		</div>
	</div>
);

export default FAQ;