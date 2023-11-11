<script>
	import hero from '$lib/assets/img/about.avif?as=run';
	import Img from '@zerodevx/svelte-img';
</script>

<div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-white sm:py-48 lg:px-8">
	<div>
		<Img src={hero} class="absolute inset-0 -z-10 h-full w-full bg-chocolate-50 object-cover " />
		<div
			class="absolute inset-0 -z-10 bg-gradient-to-t from-chocolate-700/80 via-chocolate-700/50"
		/>
	</div>

	<div class="mx-auto max-w-2xl text-center">
		<h2 class="font-title text-6xl font-light text-white sm:text-6xl">1:1 Grief Companionship</h2>
	</div>
</div>

<section class="space-y-4 p-8 text-lg text-white"></section>
