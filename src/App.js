import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, MenuIcon, XIcon, ScaleIcon } from '@heroicons/react/outline'

import headphoneHeart from './assets/headphone-heart.png';
import pinkBeard from './assets/pink-beard.png';
import tearPizza from './assets/tear-pizza.png';

import './App.css';

const navigation = [
  { name: 'Collection', href: '#collection' },
  { name: 'Team', href: '#team' },
  { name: 'Roadmap', href: '#' },
  { name: 'FAQ', href: '#faq' },
];
const footerNav = {
  main: [
    { name: 'Collection', href: '#' },
    { name: 'Team', href: '#' },
    { name: 'Roadmap', href: '#' },
    { name: 'FAQ', href: '#' },
  ],
  social: [
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'Discord',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" role="img" viewBox="0 0 24 24" {...props}>
          <title>Discord</title>
          <path
            fillRule="evenodd"
            d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};
const products = [
  {
    id: 1,
    name: '#0001',
    href: '#',
    price: '0.08eth',
    description: 'Teardrop with pizza',
    imageSrc: tearPizza,
    imageAlt: '',
  },
  {
    id: 2,
    name: '#0002',
    href: '#',
    price: '0.08eth',
    description: 'Pink face with beard',
    imageSrc: pinkBeard,
    imageAlt: '',
  },
  {
    id: 3,
    name: '#0003',
    href: '#',
    price: '0.08eth',
    description: 'Headphones with heart',
    imageSrc: headphoneHeart,
    imageAlt: '',
  },
];
const features = [
  {
    name: 'Community Driven Philanthropy',
    description: 'We are the first DAO Generative Art NFT project focused solely on philanthropy.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description: '100% of the initial sales* are added to a fund that will only be donated to certified 501(c)(3) organizations.',
    icon: ScaleIcon,
  },
  {
    name: 'Voting',
    description: 'Every two weeks, token holders will submit and vote on which charities to donate to',
    icon: LightningBoltIcon,
  },
  {
    name: 'Charity Network',
    description: 'The fund will grow through partnerships with other NFT projects.',
    icon: AnnotationIcon,
  },
]
const people = [
  {
    name: 'Albert',
    role: 'Artist and community manager',
    imageUrl: 'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Stanford Computer Science Bachelors and Masters. Silicon Valley Product Manager. Avid NFT collector who enjoys supporting projects with positive impact in the larger community.',
    community: 'Started a previous education nonprofit FairEd which partnered with Teach for America',
    charity: 'Sjogrens Foundation',
    twitterUrl: 'https://twitter.com/azfnft',
  },
  {
    name: 'Shivaal',
    role: 'Developer and community manager',
    imageUrl: 'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Software engineer at a stealth startup. Previously engineering and machine learning at Google and Scale AI. Bachelor’s and Master’s in Computer Science from Stanford. Developer and community manager for The Faces Fund.',
    community: 'Founded Stanford’s annual health hackathon to bridge the gap between medicine and technological innovations, a recurring event now in its sixth year, engaging 300 students annually.',
    charity: 'GiveWell’s Maximum Impact Fund',
    twitterUrl: 'https://twitter.com/shivaalroy',
  },
  {
    name: 'Andrew',
    role: 'Developer',
    imageUrl: 'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Greatest baller to ever live. Once crossed Allen Iverson so hard AI retired.',
    charity: 'Sesame Street',
    twitterUrl: 'https://twitter.com/azfnft',
  },
  {
    name: 'Caleb',
    role: 'Developer',
    imageUrl: 'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Cal Poly SLO Computer Science. Full stack web developer with a passion for community and education.',
    community: 'Developed and taught computer science curriculum at a prison. Taught inner-city youth programming and entrepreneurship. Helped local farms source and receive government grants and improve operation.',
    charity: 'TBD',
    twitterUrl: 'https://twitter.com/azfnft',
  },
];
const faqs = [
  {
    question: 'How will this project continue to add in funds?',
    answer: 'Beyond the initial fund enabled by the sales, we will be partnering with new #NFT projects to have a % of their sales donated to our fund. We aim to be the pre-eminent Philanthropy-driven NFT project in this space so other projects will want to partner with us.',
  },
  {
    question: 'Are you a 501(c)(3)?',
    answer: 'Unfortunately we are not, so your purchase of the token is not tax-deductible. We are exploring things on the legal side though.',
  },
  {
    question: 'Is the donation written in the smart contract?',
    answer: 'We decided not to write the donation in the smart contract because it allows a bit more flexibility for how much we allocate to charity each week and which charities we can donate too. Every two weeks, we will post on Twitter and Discord the donation transaction etherscan links to prove each donation. Finally, we’re very transparent about who we are on all social media platforms.',
  },
  {
    question: 'Why 3K tokens at 0.08ETH?',
    answer: 'We believe this is the right balance of having a tight knit community while still being able to make a massive contribution to society. We’ve seen how powerful a tight knit NFT community can be and hope to create one through scarcity and by bringing together like minded individuals.',
  },
  {
    question: 'What about royalties for the project?',
    answer: '5% of all secondary sales will be given back to the team to support underlying infrastructure, add in necessary community mods and more. This aligns our incentives with our token holders to continue bringing value to the community.',
  }
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      <Popover as="header" className="relative">
        <div className="pt-6">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#icon">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt=""
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-8 md:flex md:ml-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-white hover:text-gray-300"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <main>
        <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <h1 className="header mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="header-inner block">The Faces Fund</span>
                  </h1>
                  <div className="sub-header">
                    <p className="sub-header-inner mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      Communitry driven philanthropy
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="collection" className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 id="products-heading" className="sr=only">
              The Collection
            </h2>

            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                  </div>
                  <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                A new way to donate and fund projects 
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
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
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div id="team" className="bg-white">
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
              <div className="space-y-5 sm:space-y-4">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Team</h2>
                <p className="text-xl text-gray-500">
                  We are close friends with industry experience from working at top tiered tech companies (Google, Microsoft, Amazon, etc) and recently graduated from Stanford, Berkeley and Cal Poly. Through creating high-utility NFT projects, we hope to make a lasting impact in the communities around us.
                </p>
              </div>
              <div className="lg:col-span-2">
                <ul
                  className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
                >
                  {people.map((person) => (
                    <li key={person.name}>
                      <div className="space-y-4">
                        <div className="aspect-w-3 aspect-h-2">
                          <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                        </div>
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3>{person.name}</h3>
                          <p className="text-indigo-600">{person.role}</p>
                        </div>
                        <div className="text-lg">
                          <p className="text-gray-500">{person.bio}</p>
                        </div>
                        <div className="text-lg">
                          <p className="text-gray-500">{person.charity}</p>
                        </div>

                        <ul className="flex space-x-5">
                          <li>
                            <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">Twitter</span>
                              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="faq" className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-white">Frequently asked questions</h2>
              <p className="mt-4 text-lg text-gray-500">
                Can’t find the answer you’re looking for? Reach out to our{' '}
                <a href="#team" className="font-medium text-indigo-600 hover:text-indigo-500">
                  team
                </a>{' '}
                .
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="space-y-12">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-lg leading-6 font-medium text-white">{faq.question}</dt>
                    <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <footer className="bg-gray-900">
          <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
            <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
              {footerNav.main.map((item) => (
                <div key={item.name} className="px-5 py-2">
                  <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                    {item.name}
                  </a>
                </div>
              ))}
            </nav>
            <div className="mt-8 flex justify-center space-x-6">
              {footerNav.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-center text-base text-gray-400">&copy; 2021 Scana Labs All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;