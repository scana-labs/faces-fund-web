import { GlobeIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/outline';

import './Features.css';

const features = [
  {
	name: 'Weekly Donation Cycles',
	description: 'Every week, verified members vote on charities to donate money to using rank choice voting via SnapShot. The submitter of the winning charity is awarded a monetary prize in ETH from the community fund. All voters will be eligible for a secondary monetary giveaway from the community fund.',
    icon: GlobeIcon,
  },
  {
    name: 'Replenishing Charity Fund',
    description: 'We will partner with artists and other projects to auction off artwork with proceeds that are added directly to our Charity Fund.',
    icon: SparklesIcon,
  },
  {
    name: 'Replenishing Community Fund',
    description: '2% of secondary sales from OpenSea will be allocated back into the Community Fund to continually be used in weekly giveaways.',
    icon: SparklesIcon,
  },
  {
	name: 'Every token is valued',
	description: 'Each token equates to a single vote as well as membership into our amazing philanthropic-minded community.',
    icon: UserGroupIcon,
  },
];

const Features = () => (
	<div className="py-12">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div className="lg:text-center">
			<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
			How does this project work? 
			</p>
		</div>

		<div className="mt-10">
			<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
			{features.map((feature) => (
				<div key={feature.name} className="relative">
				<dt>
					<div className="absolute flex items-center justify-center h-12 w-12 rounded-md feature-icon">
					<feature.icon className="h-6 w-6" aria-hidden="true" />
					</div>
					<p className="ml-16 text-xl leading-6 font-medium">{feature.name}</p>
				</dt>
				<dd className="mt-2 ml-16 text-lg text-base">{feature.description}</dd>
				</div>
			))}
			</dl>
		</div>
		</div>
	</div>
);

export default Features;