import { GlobeIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Weekly Donation Cycles',
    description: 'Every week, verified members will be able to submit and vote upon charities to donate money to. Using rank choice voting via SnapShot, a single charity will be chosen each week. In addition to donating money from the Charity Fund, the submitter of that charity will also receive a monetary prize in ETH from the community fund. Those who participated in the voting will be eligible for a monetary giveaway from the community fund.',
    icon: GlobeIcon,
  },
  {
    name: 'Continually replenishing Charity Fund',
    description: 'We will partner with artists and other projects to auction off artwork with proceeds that are added directly to our Charity Fund.',
    icon: SparklesIcon,
  },
  {
    name: 'Continually replenishing Community Fund',
    description: '3% of secondary sales from OpenSea will be allocated back into the Community Fund to continually be used in weekly giveaways.',
    icon: SparklesIcon,
  },
  {
    name: 'Every token is valued',
    description: 'Although there will be some traits rarer than others, each token equates to a single vote as well as membership into this amazing philanthropic-minded community. On a weekly basis, we will increase the giveaway opportunities for certain traits and will let the community know beforehand.',
    icon: UserGroupIcon,
  },
];

const Features = () => (
	<div className="py-12">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div className="lg:text-center">
			<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
			How does this project work? 
			</p>
		</div>

		<div className="mt-10">
			<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
			{features.map((feature) => (
				<div key={feature.name} className="relative">
				<dt>
					<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
					<feature.icon className="h-6 w-6" aria-hidden="true" />
					</div>
					<p className="ml-16 text-xl leading-6 font-medium text-white">{feature.name}</p>
				</dt>
				<dd className="mt-2 ml-16 text-lg text-base text-gray-200">{feature.description}</dd>
				</div>
			))}
			</dl>
		</div>
		</div>
	</div>
);

export default Features;