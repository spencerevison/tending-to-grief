<script>
	import Testimonial from '$components/testimonial.svelte';
	import Logo from '$lib/assets/graphics/logo-graphic.svg?component';
	import hero from '$lib/assets/img/plants.jpg?as=run';
	import candles from '$lib/assets/img/lookout.jpg?as=run';
	import Img from '@zerodevx/svelte-img';
</script>

<div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-48 lg:px-8">
	<div>
		<Img src={hero} class="absolute inset-0 -z-10 h-full w-full bg-chocolate-50 object-cover " />
		<div
			class="absolute inset-0 -z-10 bg-gradient-to-t from-chocolate-700/80 via-chocolate-700/50"
		/>
	</div>

	<div class="mx-auto max-w-2xl text-center">
		<h1 class="font-title text-6xl font-bold sm:text-7xl">1:1 Grief Companionship</h1>
	</div>
</div>

<section class="mx-auto max-w-3xl space-y-8 p-8 pb-24 text-lg lg:max-w-4xl lg:text-xl">
	<div class="mx-auto my-16 flex max-w-2xl flex-col items-center gap-8 text-center sm:gap-16">
		<div class="space-y-1 sm:space-y-3">
			<p class="font-title text-4xl sm:text-5xl lg:text-6xl">
				&quot;How we carry the dead matters&quot;
			</p>
			<p class="text-xl sm:text-2xl">—Stephen Jenkinson</p>
		</div>
		<Logo class="w-40 shrink fill-white sm:w-64" />
	</div>
</section>
<div class="relative bg-chocolate-800">
	<div
		class="relative h-80 overflow-hidden bg-chocolate-600 sm:h-96 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2"
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
			<h2 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Book a session</h2>
			<p class="mt-6 text-base leading-7 text-gray-300">
				Work with me in a private 1:1 container. I am currently offering these via zoom or by phone.
				These 60 minute sessions are a place for you to carve out time to be with your grief. These
				sessions are mostly guided by you and I am here to offer support, companionship and tools
				and embodiment practices for you to deepen into connection and healing with your beloved
				dead. This is done through meditation, ritual practices, writing, art, connection to land
				and earth, movement etc.
			</p>
			<p class="mt-6 text-base leading-7 text-gray-300">
				This is also a space where I can support you in a self designed grief ritual, earth/flower
				mandala making, helping you weave a meaningful end of life celebration, obituary writing
				etc. These sessions are sliding scale $25 - $100 Per hour. No one will be turned away for
				lack of funds.
			</p>
			<p class="mt-6 text-base leading-7 text-gray-300">
				*** Please note, that I am NOT a licensed mental health provider, these sessions are self
				guided companionship and are not to be replaced for professional therapy- if you need
				additional support I can help you find this.
			</p>
			<div class="mt-8">
				<script src="//embed.typeform.com/next/embed.js"></script>
				<button
					data-tf-slider="oSDCOwry"
					data-tf-position="right"
					data-tf-opacity="100"
					data-tf-iframe-props="title=1:1 Counseling"
					data-tf-transitive-search-params
					data-tf-medium="snippet"
					class="inline-block rounded-md bg-chocolate-500 px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm hover:bg-pumpkin-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chocolate-600"
					>Book a session</button
				>
			</div>
		</div>
	</div>
</div>
<Testimonial
	quote="“Tasha has played a powerful and much needed role in my grieving process. Her wise companionship through my journey after losing my beloved mom suddenly has been a nurturing hug, a pillar of strength, and a wise reflective mirror all at once. Within every session I felt so very seen, held, and given permission to let free the achiest, rawest and stickiest parts of loss. I can’t imagine having gone through this time without her support, and I am so deeply, deeply grateful. She is a true ally to anyone immersed in the lessons of grief.”"
	attribution="—Rohini"
/>
