<script>
	import hero from '$lib/assets/img/hero-home.jpg?as=run';
	import Img from '@zerodevx/svelte-img';
</script>

<div class="grid grid-cols-1">
	<div class="col-start-1 row-start-1 grid-cols-1 overflow-hidden">
		<!-- ponytail: dropped FxParallax, the per-scroll JS transform was janky -->
		<Img src={hero} class="h-full w-full object-cover" />
	</div>
	<div
		class="z-10 bg-gradient-to-b from-chocolate-400/90 px-8 text-xl sm:px-20 md:col-start-1 md:row-start-1 md:from-chocolate-900/50 md:text-2xl"
	>
		<div class="my-12 grid grid-cols-1 gap-6 sm:gap-12 md:my-24">
			<h2 class="font-title text-6xl sm:text-7xl">Trauma informed grief support</h2>
			<div class="flex flex-col gap-4">
				<p>Soulful, earth-centered grief companion</p>
				<p>Supporting people to stay connected to their loved ones through ritual + community</p>
			</div>
			<!-- <h1 class="text-3xl sm:text-5xl md:mb-16">Tasha Zigerelli</h1> -->
		</div>
	</div>
</div>
