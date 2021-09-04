import { CakeIcon, GiftIcon, CalendarIcon, SparklesIcon } from '@heroicons/react/outline';

import './Features.css';

const Features = () => (
	<div className="py-12 pt-36 pb-36 bg-white">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div className="lg:text-center">
			<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">How does it all work?</p>
		</div>

		<div className="mt-10">
			<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
				<div key="Weekly Donation Cycles" className="relative">
					<dt>
						<div className="absolute flex items-center justify-center h-12 w-12 rounded-md feature-icon">
						<CalendarIcon className="h-6 w-6" aria-hidden="true" />
						</div>
						<p className="ml-16 text-xl leading-6 font-medium">Weekly Donation Cycles</p>
					</dt>
					<dd className="mt-2 ml-16 text-lg text-base">Every week, verified members vote on charities to donate money to using <a className="underline text-indigo-600" href="https://www.fairvote.org/how_rcv_works" target="_blank" rel="noreferrer">rank choice voting</a> via SnapShot. The submitter of the winning charity is awarded a monetary prize in ETH from the community fund. All voters will be eligible for a secondary monetary giveaway from the community fund.</dd>
				</div>
				<div key="Replenishing Community Fund" className="relative">
					<dt>
						<div className="absolute flex items-center justify-center h-12 w-12 rounded-md feature-icon">
						<SparklesIcon className="h-6 w-6" aria-hidden="true" />
						</div>
						<p className="ml-16 text-xl leading-6 font-medium">Replenishing Community Fund</p>
					</dt>
					<dd className="mt-2 ml-16 text-lg text-base">2% of secondary sales from OpenSea will be allocated back into the Community Fund to continually be used in weekly giveaways. This helps fund community specific events and giveaways.</dd>
				</div>
				<div key="Lifetime NFT Tools Pass" className="relative">
					<dt>
						<div className="absolute flex items-center justify-center h-12 w-12 rounded-md feature-icon">
						<CakeIcon className="h-6 w-6" aria-hidden="true" />
						</div>
						<p className="ml-16 text-xl leading-6 font-medium">Premium NFT Tools Pass</p>
					</dt>
					<dd className="mt-2 ml-16 text-lg text-base">The creators continually build invaluable NFT tools that the community gets access to for free.</dd>
				</div>
				<div key="Airdrops" className="relative">
					<dt>
						<div className="absolute flex items-center justify-center h-12 w-12 rounded-md feature-icon">
						<GiftIcon className="h-6 w-6" aria-hidden="true" />
						</div>
						<p className="ml-16 text-xl leading-6 font-medium">Airdrops</p>
					</dt>
					<dd className="mt-2 ml-16 text-lg text-base">The earlier a token is minted, the rarer the drop holders have access to. We are also working with artists to create more utility-first NFT projects which our community will be able to get access first.</dd>
				</div>
			</dl>
		</div>
		</div>
	</div>
);

export default Features;