<script>
	/** @type {{ quote: string, name: string }[]} */
	export let items = [];

	/** @type {HTMLDivElement} */
	let track;

	// ponytail: native scroll-snap does the sliding, buttons just nudge by one slide
	/** @param {number} dir */
	function go(dir) {
		track.scrollBy({ left: dir * track.clientWidth, behavior: 'smooth' });
	}
</script>

<section class="isolate overflow-hidden bg-chocolate-500 px-6 lg:px-8">
	<div class="relative mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-4xl">
		<div
			class="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.chocolate.400),white)] opacity-80"
		/>
		<div
			class="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-chocolate-400/50 shadow-xl shadow-chocolate-600/10 sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center"
		/>

		<div
			bind:this={track}
			class="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
		>
			{#each items as t}
				<figure class="w-full shrink-0 snap-center px-2">
					<blockquote class="text-lg font-semibold leading-8 sm:text-xl sm:leading-9">
						<p>&ldquo;{t.quote}&rdquo;</p>
					</blockquote>
					<figcaption class="mt-6 text-lg font-semibold">&mdash;{t.name}</figcaption>
				</figure>
			{/each}
		</div>

		<div class="mt-10 flex justify-center gap-4">
			<button
				type="button"
				aria-label="Previous testimonial"
				on:click={() => go(-1)}
				class="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
			>
				&larr;
			</button>
			<button
				type="button"
				aria-label="Next testimonial"
				on:click={() => go(1)}
				class="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
			>
				&rarr;
			</button>
		</div>
	</div>
</section>
