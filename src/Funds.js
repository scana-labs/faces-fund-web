import { GlobeIcon, LightningBoltIcon, UserGroupIcon } from '@heroicons/react/outline';

import './Pillars.css';

const features = [
  {
	name: 'Philanthropy',
	desc: 'Focused on giving back to the community, token holders vote on a set of charities to donate to each week with the fund.',
	donate: '34% of sales goes to the philanthropy fund.',
    icon: GlobeIcon,
  },
  {
	name: 'Community',
	desc: 'Focused on our token holders, holders have access to exclusive events and are eligible to win ETH each week.',
	donate: '33% of sales goes to the community fund.',
    icon: UserGroupIcon,
  },
  {
	name: 'Utility',
	desc: 'Focused on building tools for the NFT community, token holders have unlimited access to premium NFT tools.',
	donate: '33% of sales goes to the utility fund.',
    icon: LightningBoltIcon,
  },
]

const Funds = () => {
  return (
    <div className="py-12 pt-36 pb-36 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
		<div className="lg:text-center mb-10">
			<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">Our Funds</p>
		</div>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md pillar-icon">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-2xl leading-6 font-medium text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 text-lg text-gray-500">{feature.desc}</dd>
			  <br />
              <dd className="mt-2 text-lg text-gray-500">{feature.donate}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
};

export default Funds;