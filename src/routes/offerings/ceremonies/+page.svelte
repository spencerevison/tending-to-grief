<script>
	import Logo from '$lib/assets/graphics/logo-graphic.svg?component';
	import aboutImg from '$lib/assets/img/mandala.jpg?as=run';
	import circle from '$lib/assets/img/ceremony-1.jpg?as=run';
	import ceremony from '$lib/assets/img/ceremony-3.jpg?as=run';
	import Img from '@zerodevx/svelte-img';
	import Testimonial from '$components/testimonial.svelte';
</script>

<svelte:head>
	<title>Ceremonies</title>
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
			<h3 class="text-3xl">6-Week Parent Loss Support Group</h3>
			<section>
				<p>
					In this closed container (meaning the same people meet each week), we will deepen our
					connection and community building as we explore the themes, challenges, and realities of
					parent loss, while remembering their legacy and love, and strengthening our bond. This
					6-week closed support group is a soulful and intimate gathering of individuals grieving
					the death of a parent or parent-like figure. Each week will start with a short meditation,
					focus on different themes, share in the circle, and journal about our losses.
				</p>
			</section>
			<section class="space-y-4">
				<h3 class="text-2xl">Themes Covered</h3>
				<ul class="list-disc pl-4">
					<li>Where we are in our grief / some grief psychoeducation.</li>
					<li>Layers of support &amp; self-care.</li>
					<li>Existing relationships with family members, friends, peers.</li>
					<li>Work and family life.</li>
					<li>Secondary losses.</li>
					<li>Exploring new ways of identity and relating.</li>
					<li>Emotional literacy, knowing ourselves in grief.</li>
					<li>Continuing bonds / ways to stay connected.</li>
					<li>Self-designed grief rituals / meditations for grief and resources.</li>
					<li>
						Art, writing, and other tools for uncovering deeper layers of processing and healing.
					</li>
					<li>Letter writing to them.</li>
					<li>
						Who were they? Storytelling and optional photo sharing about them / their lives / their
						legacy.
					</li>
					<li>Death story, storytelling, and sharing about the death and aftermath.</li>
					<li>
						Parenting without them, family traditions, passing on their wisdom to our kids
						(applicable for parents; depending on the number of parents in the group, we may explore
						some of this).
					</li>
				</ul>
			</section>
			<section class="space-y-4">
				<h3 class="text-2xl">Group Details</h3>
				<p>This group will take place on <strong>THURSDAYS</strong></p>
				<p>
					Starting Thursday, Feb 8, 15, 22, 29, March 7, 14<br />
					VIA ZOOM<br />
					6:00-7:45 PM PST<br />
					$120-275 USD (sliding scale)
				</p>
				<p>Please fill out <a href="URL_TO_FORM">this form</a> to register.</p>
			</section>
			<script src="//embed.typeform.com/next/embed.js"></script>
			<button
				data-tf-slider="xpggkbzn"
				data-tf-position="right"
				data-tf-opacity="100"
				data-tf-iframe-props="title=Grief ceremony Registration"
				data-tf-transitive-search-params
				data-tf-medium="snippet"
				class="inline-block rounded-md bg-chocolate-500 px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm hover:bg-pumpkin-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chocolate-600"
				>Register for this group</button
			>
		</div>
	</div>
</section>
<Testimonial
	quote="“Grief ceremony of this depth is what’s missing from our culture and Tasha creates the space to normalize and process grief in a really helpful and nourishing container. She’s an excellent facilitator and talented practitioner.”"
	attribution="—Indigo"
/>
