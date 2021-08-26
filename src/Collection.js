import blueFlame from './assets/blue-flame.png';
import chefDrool from './assets/chef-drool.png';
import greenHatHeart from './assets/green-hat-heart.png';

const products = [
  {
    id: 1,
    description: 'Viking hat diamond eyes fire breathing',
    imageSrc: blueFlame,
    imageAlt: 'Blue Flame',
  },
  {
    id: 2,
    description: 'Chef hat sunglasses drool',
    imageSrc: chefDrool,
    imageAlt: 'Chef Drool',
  },
  {
    id: 3,
    description: 'Leprechaun hat green nose heart kiss',
    imageSrc: greenHatHeart,
    imageAlt: 'Green Hat Heart',
  },
];

const Collection = () => (
	<div id="collection" className="">
		<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<h1 id="products-heading" className="text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl mb-5">
				The Collection
			</h1>

			<div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
				{products.map((product, i) => (
					<div className="group" key={i}>
						<div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
						<img
							src={product.imageSrc}
							alt={product.imageAlt}
							className="w-full h-full object-center object-cover"
						/>
						</div>
					</div>
				))}
			</div>
		</div>
	</div>
);

export default Collection;