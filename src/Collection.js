import collage from './assets/collage16x9.jpg';

import './Collection.css';

const Collection = () => (
	<div id="collection" className="pt-36 pb-36">
		<div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
			<h1 id="products-heading" className="text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl mb-4">
				The Collection
			</h1>
			<div className="space-y-6">
				<div className="text-xl">
					144 of 3,000 randomly generated tokens on display for your viewing pleasure.
				</div>

				<div className="grid grid-cols-1 place-items-center gap-x-6 xl:gap-x-8">
					<img id="token-collage" src={collage} alt="Token Collection Collage"/>
				</div>
			</div>
		</div>
	</div>
);

export default Collection;