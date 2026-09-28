<script>
	import hero from '$lib/assets/img/hero-home.jpg?as=run';
	import Img from '@zerodevx/svelte-img';
</script>

<div class="grid grid-cols-1">
	<div class="col-start-1 row-start-1 grid-cols-1 overflow-hidden">
		<!-- ponytail: dropped FxParallax, the per-scroll JS transform was janky -->
		<Img src={hero} class="h-full w-full object-cover" />
	</div>
	<!-- text sits left, so on md+ darken the left edge instead of the top -->
	<div
		class="z-10 bg-gradient-to-b from-chocolate-400/90 px-8 text-xl sm:px-20 md:col-start-1 md:row-start-1 md:bg-gradient-to-r md:from-chocolate-950/95 md:via-chocolate-950/75 md:via-50% md:to-chocolate-950/20 md:text-2xl"
	>
		<div
			class="my-12 grid max-w-3xl grid-cols-1 gap-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.7)] sm:gap-12 md:my-24"
		>
			<h2 class="font-serif text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
				Trauma informed grief support
			</h2>
			<div class="flex flex-col gap-4">
				<p>Soulful, earth-centered grief companion</p>
				<p>Supporting people to stay connected to their loved ones through ritual + community</p>
			</div>
			<!-- <h1 class="text-3xl sm:text-5xl md:mb-16">Tasha Zigerelli</h1> -->
		</div>
	</div>
</div>
