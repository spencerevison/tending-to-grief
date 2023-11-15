<script>
	import Logo from '$lib/assets/graphics/logo-graphic.svg?component';
	import aboutImg from '$lib/assets/img/ceremony-2.jpg?as=run';
	import circle from '$lib/assets/img/ceremony-1.jpg?as=run';
	import candles from '$lib/assets/img/promo-circles.avif?as=run';
	import Img from '@zerodevx/svelte-img';
</script>

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
		These grief ceremonies are an opportunity for deeper connection and community. A place to gather
		and grief tend with others who are navigating the throes of great loss. Like the ways of our
		ancestors in villages of pastimes, our modern day patterns of grief isolation are a pervasive
		problem. When we come together we heal together. These ceremonies vary from in person and
		online, sometimes they are death specific such as parent loss or traumatic loss and some are
		open. Please browse below to explore and register for one of these circles. Most circles are 2-
		3 hours and include elements of altar building, meditation, storytelling and journaling.
	</p>
	<p>
		Support groups: These 10 week closed groups meet the same time and day each week for 10
		consecutive weeks. I am currently planning a parent loss group and suicide survivor group for
		early 2024. Please inquire below if you are interested in attending.
	</p>
	<h2 class="block pt-16 text-5xl">Upcoming Events</h2>
	<div class="space-y-6">
		<div class="max-w-lg"><Img src={candles} class="-z-10 mt-8 max-w-full rounded-lg" /></div>
		<h3 class="text-3xl">Tending to Grief During the Holidays</h3>
		<p>Monday, 11/20/2023, from 2-4 PM HST, on Zoom</p>
		<p>$15-25 Sliding scale. No one will be turned away for lack of funds.</p>
		<p>
			Join me for a workshop on navigating the upcoming holidays while making space for your grief.
			This is an incredibly difficult time for many of us missing people and the holidays can
			amplify and heighten our need for self care, boundaries, spaciousness and tools for coping.
		</p>

		<p>
			We will explore reimagining new traditions, rituals to honor your beloved dead. We will cover
			some grief psycho education, self care strategies and work on building our toolbox when it
			comes to our personal unique grieving style and needs.
		</p>
	</div>
	<button
		data-tf-slider="xT6pTVD9"
		data-tf-position="right"
		data-tf-opacity="100"
		data-tf-iframe-props="title=Grief ceremony Registration"
		data-tf-transitive-search-params
		data-tf-medium="snippet"
		class="inline-block rounded-md bg-chocolate-500 px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm hover:bg-pumpkin-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chocolate-600"
		>Register for event</button
	>
	<script src="//embed.typeform.com/next/embed.js"></script>
</section>
