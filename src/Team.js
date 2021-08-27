import albertToken from './assets/albert.jpg';
import andrewToken from './assets/andrew.jpg';
import calebToken from './assets/caleb.jpg';
import shivaalToken from './assets/shivaal.jpg';

const people = [
  {
    name: 'Albert',
    role: 'Artist and community manager',
    imageUrl: albertToken,
    bio: 'Stanford CS BS, MS. Silicon Valley Product Manager. Avid NFT collector who enjoys supporting projects with positive impact in the larger community.',
    community: 'Started a previous education nonprofit FairEd which partnered with Teach for America.',
    charity: 'Sjogrens Foundation',
    twitterUrl: 'https://twitter.com/azfnft',
  },
  {
    name: 'Shivaal',
    role: 'Developer and community manager',
    imageUrl: shivaalToken,
    bio: 'Software engineer at a stealth startup. Previously engineering and machine learning at Google and Scale AI. Stanford CS BS, MS.',
	community: 'Founded Stanford’s health hackathon to bridge gaps between medicine and technology, engaging 2,000 students over the last six years.',
    charity: 'GiveWell’s Maximum Impact Fund',
    twitterUrl: 'https://twitter.com/shivaalroy',
  },
  {
    name: 'Andrew',
    role: 'Developer',
    imageUrl: andrewToken,
	bio: 'Software Engineer at Amazon. Cal-Berkeley CS BS.',
	community: 'Recurring donor to Seattle food banks.',
    charity: 'American Red Cross',
  },
  {
    name: 'Caleb',
    role: 'Developer',
    imageUrl: calebToken,
    bio: 'Cal Poly SLO CS. Full stack web developer with a passion for community and education.',
    community: 'Developed and taught computer science curriculum at a prison. Taught inner-city youth programming and entrepreneurship. Helped local farms source and receive government grants and improve operation.',
    charity: 'Save the Children',
  },
];

const Team = () => (
	<div id="team">
		<div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
			<div className="space-y-12">
				<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Team</h2>
				<p className="text-xl">
					We are a group of close friends creating high-utility NFT projects in order to make a lasting impact in the communities around us.
				</p>

				<ul
					className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
				>
					{people.map((person) => (
					<li key={person.name}>
						<div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
						<div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
							<img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
						</div>
						<div className="sm:col-span-2">
							<div className="space-y-4">
								<div className="text-lg leading-6 font-medium space-y-1">
									<div className="flex items-center">
										<h3>{person.name}</h3>
										{person.twitterUrl && <a href={person.twitterUrl} className="hover:text-gray-600 ml-3" target="_blank" rel="noreferrer">
											<span className="sr-only">Twitter</span>
											<svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
											<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
											</svg>
										</a>}
									</div>
									<p className="text-indigo-600">{person.role}</p>
								</div>
								<div className="text-lg">
									<p>{person.bio}</p>
								</div>
								<div className="text-lg">
									<p>Community Involvement: {person.community}</p>
								</div>
								<div className="text-lg">
									<p>Charity of choice: {person.charity}</p>
								</div>
							</div>
						</div>
						</div>
					</li>
					))}
				</ul>
			</div>
    	</div>
	</div>
);

export default Team;