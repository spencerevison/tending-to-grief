<script>
	import Logo from '$lib/assets/graphics/logo-graphic.svg?component';
	import aboutImg from '$lib/assets/img/mandala.jpg?as=run';
	import circle from '$lib/assets/img/ceremony-1.jpg?as=run';
	import ceremony from '$lib/assets/img/ceremony-6.jpg?as=run';
	import Img from '@zerodevx/svelte-img';
	import Testimonial from '$components/testimonial.svelte';
</script>

<svelte:head>
	<title>Ceremonies</title>
	<script src="//embed.typeform.com/next/embed.js"></script>
</svelte:head>
<div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-48 lg:px-8">
	<div>
		<Img
			src={aboutImg}
			class="absolute inset-0 -z-10 h-full w-full bg-chocolate-50 object-cover "
		/>
		<div
			class="absolute inset-0 -z-10 bg-gradient-to-t from-chocolate-700/80 via-chocolate-700/50"
		/>
	</div>

	<div class="mx-auto max-w-2xl text-center">
		<h1 class="font-title text-6xl font-bold sm:text-8xl">Ceremonies</h1>
	</div>
</div>

<section class="mx-auto max-w-3xl space-y-8 p-8 pb-32 text-lg lg:max-w-4xl lg:text-xl">
	<div class="mx-auto my-16 flex max-w-2xl flex-col items-center gap-8 text-center sm:gap-16">
		<div class="space-y-1 sm:space-y-3">
			<p class="font-title text-4xl sm:text-5xl lg:text-6xl">
				&quot;Grief is love with nowhere to go&quot;
			</p>
			<p class="text-xl sm:text-2xl">—Roshi Joan Halifax</p>
		</div>
		<Logo class="w-40 shrink fill-white sm:w-64" />
	</div>
	<Img src={circle} class="-z-10 mx-auto max-w-full rounded-lg" />
	<p>
		These grief ceremonies and groups offer an opportunity for deeper connection and community—a
		place to gather and tend to grief with others navigating the throes of great loss. Reflecting on
		the ways of our ancestors in the villages of past times, our modern-day patterns of grief
		isolation are a pervasive problem. When we come together, we heal together. These ceremonies,
		varying from in-person to online, sometimes are death-specific, such as parent loss or traumatic
		loss, and some are open to all. Please browse below to explore and register for one of these
		circles. Most circles last 2-3 hours and include elements of altar building, meditation,
		storytelling, and journaling.
	</p>
	<h2 class="block pt-16 text-5xl">Upcoming Events</h2>
	<div class="flex flex-col gap-16">
		<div class="space-y-6">
			<div class="max-w-lg"><Img src={ceremony} class="-z-10 mt-8 max-w-full rounded-lg" /></div>
			<h3 class="text-3xl">Grief Ceremony</h3>
			<section>
				<p>
					<strong
						>Sunday October 25th 2-5pm<br />Shiima Koh, Corralitos<br />Sliding scale $40-100,
						donation based</strong
					>
				</p>
			</section>
			<section>
				<p>
					Open to folks from all walks of life who want to honor their dead. We will gather for
					ancestral honoring, altar building, storytelling, journaling, tea and sound, and seasonal
					tending.
				</p>
			</section>
			<section class="space-y-4">
				<p>No one turned away for lack of funds.</p>
			</section>
			<div class="mt-8">
				<button
					data-tf-slider="b7ha6BQ6"
					data-tf-position="right"
					data-tf-opacity="100"
					data-tf-iframe-props="title=Grief Ceremony Registration"
					data-tf-transitive-search-params
					data-tf-medium="snippet"
					class="inline-block rounded-md bg-chocolate-500 px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm hover:bg-pumpkin-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chocolate-600"
					>Register for this ceremony</button
				>
			</div>
		</div>
	</div>
</section>
<Testimonial
	quote="“Grief ceremony of this depth is what’s missing from our culture and Tasha creates the space to normalize and process grief in a really helpful and nourishing container. She’s an excellent facilitator and talented practitioner.”"
	attribution="—Indigo"
/>
