<script>
	import TestimonialCarousel from '$components/testimonial-carousel.svelte';
	import Logo from '$lib/assets/graphics/logo-graphic.svg?component';
	import hero from '$lib/assets/img/flowers.jpg?as=run';
	import side from '$lib/assets/img/womb.jpg?as=run';
	import Img from '@zerodevx/svelte-img';

	const testimonials = [
		{
			quote:
				'I saw Tasha after my abortion and felt deeply held, loved and supported in letting go of the soul who I could not mother this time and helping clear my body. She is a true healer with a deep capacity to hold pain and trauma and transmute it into wisdom and power.',
			name: 'Layla'
		},
		{
			quote:
				'I am so grateful for Tasha\u2019s womb healing session, she has an amazing ability to attune as conduit for exactly what I was needing to heal. The phrases and prayers she brought forth were exactly what I needed to hear, it stirred an emotional release, that pulled me out of the mundane everyday grind, pausing the analytic mind and reminding me of how I am a powerful creator of my life\u2019s story. I highly recommend a session.',
			name: 'Jamie'
		},
		{
			quote:
				'I am so grateful for my session with Tasha. I lost my mother who was my best friend a few months ago, and I am the mother to a one year-old so I haven\u2019t really had much space to process and grieve this massive loss. Having the opportunity to talk about it and have a ceremony held by someone who was not only very understanding, but very skilled in supporting someone going through those kinds of major life losses was really healing. I strongly recommend this work as a tool on the journey of integration.',
			name: 'Kate'
		},
		{
			quote:
				'I received a postpartum mothering ceremony. Tasha\u2019s instinctual weaving of song, plants, drumming, and touch indelibly imprinted on my psyche and soul as a true marking and claiming of myself as Mother. To feel seen, held, and nurtured in this way was both breathtakingly tender, and fiercely powerful, much like Tasha herself.',
			name: 'Angela'
		},
		{
			quote:
				'My missed miscarriage changed me. Tasha helped me be with that change and allow my womb to truly grieve the loss. She was instrumental in my process and in my experience of now becoming the mother with the baby I was truly meant to have.',
			name: 'Sienna'
		}
	];
</script>

<svelte:head>
	<title>Womb Work</title>
</svelte:head>

<div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-48 lg:px-8">
	<div>
		<Img src={hero} class="absolute inset-0 -z-10 h-full w-full bg-chocolate-50 object-cover " />
		<div
			class="absolute inset-0 -z-10 bg-gradient-to-t from-chocolate-700/80 via-chocolate-700/50"
		/>
	</div>

	<div class="mx-auto max-w-2xl text-center">
		<h1 class="font-title text-6xl font-bold sm:text-8xl">Womb Work</h1>
	</div>
</div>

<section class="mx-auto max-w-3xl space-y-8 p-8 pb-24 text-lg lg:max-w-4xl lg:text-xl">
	<div class="mx-auto my-16 flex max-w-2xl flex-col items-center gap-8 text-center sm:gap-16">
		<div class="space-y-1 sm:space-y-3">
			<p class="font-title text-4xl sm:text-5xl lg:text-6xl">
				&quot;Grief is love with nowhere to go&quot;
			</p>
			<p class="text-xl sm:text-2xl">—Roshi Joan Halifax</p>
		</div>
		<Logo class="w-40 shrink fill-white sm:w-64" />
	</div>
</section>

<div class="relative bg-chocolate-800">
	<div
		class="relative overflow-hidden bg-chocolate-600 sm:h-[54rem] md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2"
	>
		<Img src={side} class="-z-10 h-full w-full object-cover" />
	</div>
	<div class="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
		<div class="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
			<h2 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Womb Work</h2>
			<p class="mt-6 text-base leading-7 text-gray-300">
				We carry so much grief in the belly, the womb, and the places where life asks us to soften,
				surrender, and feel.
			</p>
			<p class="mt-6 text-base leading-7 text-gray-300">
				This space is a warm and inclusive container for all bodies, genders, and lived experiences.
				I welcome mothers, future mothers, and those moving through the tender thresholds of birth,
				becoming, loss, death, grief and transformation.
			</p>
			<p class="mt-6 text-base leading-7 text-gray-300">
				For those who feel called to deepen into themselves, reconnect with the wisdom held within,
				or gently tend to the grief they carry, this is a space to be witnessed, held, and met with
				care.
			</p>
			<p class="mt-6 text-base leading-7 text-gray-300">
				You do not need to arrive knowing exactly what you need. You are welcome as you are and we
				will unfurl together.
			</p>
			<p class="mt-6 text-base leading-7 text-gray-300">
				These sessions are a sacred time and place to drop out of the mind and into the body and
				heart, make space for what needs to be felt and release what no longer serves.
			</p>
			<p class="mt-6 text-base leading-7 text-gray-300">
				This tailored body work is informed by Tuli&rsquo;x indigenous arts (formerly Arvigo&trade;)
				as well as a culmination of 13 years as an herbalist, grief and birth worker and ceremonial
				practitioner.
			</p>
			<p class="mt-6 text-base leading-7 text-gray-300">
				These intuitive sessions may include grief processing and counseling (in the beginning),
				pelvic steaming, body wrapping, singing, channeling, sound healing, spoken prayer, direct
				work with plant spirits and ancestors, body work on belly and womb, heart centered massage
				and meditation and more.
			</p>
			<h3 class="mt-10 text-xl font-semibold text-white">These sessions are for:</h3>
			<p class="mt-2 text-base leading-7 text-gray-300">Maidens ~ mothers ~ crones</p>
			<p class="text-base leading-7 text-gray-300">And everyone in between</p>
			<ul class="mt-4 space-y-2 text-base leading-7 text-gray-300">
				<li>+ Traumatic birth, C sections, complex postpartum experiences</li>
				<li>+ Postpartum mothers, seasoned mothers needing deeper support</li>
				<li>+ Mothers of miscarriage, abortion, still birth, infant loss</li>
				<li>+ Anyone who has experienced the death of a loved one ~ parent, friend, sibling etc</li>
				<li>+ Women wanting and trying to conceive</li>
				<li>+ Mothers with complex fertility journeys</li>
				<li>+ Maidens and crones</li>
				<li>+ Anyone wanting to honor life transitions</li>
			</ul>
			<p class="mt-8 text-base leading-7 text-gray-300">
				Please book through my Calendly. All sessions are sliding scale $65&ndash;180 USD for the 90
				minutes.
			</p>
			<div class="mt-8">
				<a
					href="https://calendly.com/aroseteas/30min"
					target="_blank"
					rel="noopener"
					class="inline-block rounded-md bg-chocolate-500 px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm hover:bg-pumpkin-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chocolate-600"
					>Book a session</a
				>
			</div>
		</div>
	</div>
</div>
<TestimonialCarousel items={testimonials} />
