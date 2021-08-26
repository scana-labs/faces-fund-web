import Timeline from './Timeline';

const Roadmap = () => (
	<div id="roadmap" className="overflow-hidden">
		<div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

		<div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
			<div className="lg:col-span-1">
			<h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-3">
				Roadmap
			</h2>
			<p className="text-lg text-white">We’ll continue working on ways to bring a high level of utility to our token holders — we are excited to surprise y’all.</p>
			</div>
			<Timeline />
		</div>
		</div>
	</div>
);

export default Roadmap;