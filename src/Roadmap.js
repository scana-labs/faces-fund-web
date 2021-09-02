import Timeline from './Timeline';

const Roadmap = () => (
	<div id="roadmap" className="overflow-hidden bg-white pt-36 pb-36">
		<div className="relative max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">

		<div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
			<div className="lg:col-span-1">
				<h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
					Roadmap
				</h1>
				<p className="text-lg">We’ll continue working on ways to bring a high level of utility to our token holders — we are excited to surprise y’all.</p>
			</div>
			<div className="lg:col-span-2">
				<Timeline />
			</div>
		</div>
		</div>
	</div>
);

export default Roadmap;