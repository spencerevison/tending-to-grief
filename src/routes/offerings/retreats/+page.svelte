<script>
	import Testimonial from '$components/testimonial.svelte';
	import Logo from '$lib/assets/graphics/logo-graphic.svg?component';
	import hero from '$lib/assets/img/yurt.jpg?as=run';
	import candles from '$lib/assets/img/retreat-3.jpg?as=run';
	import hands from '$lib/assets/img/hand-holding.jpg?as=run';
	import bowls from '$lib/assets/img/bowls.jpg?as=run';
	import mother from '$lib/assets/img/mother.jpg?as=run';
	import Img from '@zerodevx/svelte-img';
</script>

<svelte:head>
	<title>Retreats</title>
</svelte:head>
<div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-48 lg:px-8">
	<div>
		<Img src={hero} class="absolute inset-0 -z-10 h-full w-full bg-chocolate-50 object-cover " />
		<div
			class="absolute inset-0 -z-10 bg-gradient-to-t from-chocolate-700/80 via-chocolate-700/50"
		/>
	</div>

	<div class="mx-auto max-w-2xl text-center">
		<h1 class="font-title text-6xl font-bold sm:text-7xl">Grief Retreats</h1>
	</div>
</div>

<section class="mx-auto max-w-3xl space-y-8 p-8 text-lg lg:max-w-4xl lg:text-xl">
	<div class="mx-auto my-16 flex max-w-2xl flex-col items-center gap-8 text-center sm:gap-16">
		<div class="space-y-1 sm:space-y-3">
			<p class="font-title text-4xl sm:text-5xl lg:text-6xl">Grieving is a skill</p>
		</div>
		<Logo class="w-40 shrink fill-white sm:w-64" />
	</div>
</section>
<div class="relative bg-chocolate-800">
	<div
		class="relative h-[36rem] overflow-hidden bg-chocolate-600 sm:h-[42rem] md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2"
	>
		<Img src={candles} class="-z-10 h-full w-full object-cover" />
		<svg
			viewBox="0 0 926 676"
			aria-hidden="true"
			class="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
		>
			<path
				fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
				fill-opacity=".4"
				d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
			/>
			<defs>
				<linearGradient
					id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
					x1="926.392"
					x2="-109.635"
					y1=".176"
					y2="321.024"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#A7744F" />
					<stop offset="1" stop-color="#DDC6B5" />
				</linearGradient>
			</defs>
		</svg>
	</div>
	<div class="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
		<div class="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
			<h2 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
				Parentloss retreats
			</h2>
			<p class="mt-6 text-base leading-7 text-gray-300">
				Join us for 3 to 5 day grief retreats where we gather in celebration and honoring of those
				parents we have lost. These are always loss specific. These retreats are fully catered,
				private events full of connection with others, grief, psychoeducation and understanding,
				self care, movement, ritual, massage, healing modalities, tea ceremonies, sound healing,
				writing and connection. I am currently dreaming up a parent loss retreat on the big island
				in the late winter of 2024. Please inquire to stay in the know.
			</p>
			<div class="mt-8">
				<script src="//embed.typeform.com/next/embed.js"></script>
				<a
					href="/contact"
					class="inline-block rounded-md bg-chocolate-500 px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm hover:bg-pumpkin-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chocolate-600"
					>Get in touch</a
				>
			</div>
		</div>
	</div>
</div>
<Testimonial
	quote="“Attending the MotherLoss Retreat was one of the most profound capsules to process grief I have ever experienced. I have had a lot of loss in my life and after many years, to have this sacred space of being held, being, seen and being heard, was life changing. Tasha is an amazing facilitator with love and compassion in her heart that enables her to hold this space for grieving in a nurturing way.”"
	attribution="—Chris Denari"
/>
<section class="mx-auto flex max-w-3xl flex-col gap-8 p-8 py-32 text-lg lg:text-xl">
	<Img src={hands} class="-z-10 mx-auto max-w-full rounded-lg" />
	<Img src={bowls} class="-z-10 mx-auto max-w-full rounded-lg" />
	<Img src={mother} class="-z-10 mx-auto max-w-full rounded-lg" />
</section>
