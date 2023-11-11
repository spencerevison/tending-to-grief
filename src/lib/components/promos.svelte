<script>
	import Img from '@zerodevx/svelte-img';
	import promo1 from '$lib/assets/img/compansionship-2.jpg?as=run';
	import promo2 from '$lib/assets/img/compansionship-1.jpg?as=run';
	import promo3 from '$lib/assets/img/retreat-2.jpg?as=run';
	import Logo from '$lib/assets/graphics/logo-graphic.svg?component';

	const promos = [
		{
			id: 1,
			title: '1:1 Grief Companionship',
			href: '/offerings/companionship',
			image: promo1
		},
		{
			id: 1,
			title: 'Ceremonies, Workshops & Support Groups',
			href: '/offerings/ceremonies',
			image: promo2
		},
		{
			id: 1,
			title: 'Grief Retreats',
			href: '/offerings/retreats',
			image: promo3
		}
	];
</script>

<div class="bg-gradient-to-b from-chocolate-400/90 py-24 text-white sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center sm:gap-16">
			<div class="space-y-1 sm:space-y-3">
				<p class="font-title text-5xl sm:text-6xl lg:text-7xl">
					&quot;Death is the end of a life, not the end of a relationship.&quot;
				</p>
				<p class="text-xl sm:text-2xl">—Robert Woodruff Anderson</p>
			</div>
			<Logo class="w-40 shrink fill-white sm:w-64" />
			<h2 class="leading-normalsm:text-6xl text-4xl font-bold">Ways to journey together</h2>
		</div>
		<div
			class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			{#each promos as promo}
				<a
					href={promo.href}
					class="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-chocolate-700 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
				>
					<Img
						src={promo.image}
						class="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
					/>
					<div
						class="absolute inset-0 -z-10 bg-chocolate-600/10 transition-colors duration-700 ease-out group-hover:bg-chocolate-600/30"
					/>
					<div
						class="absolute inset-0 -z-10 bg-gradient-to-t from-chocolate-700/60 via-chocolate-700/20"
					/>
					<div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-chocolate-900/10" />

					<h3 class="mt-3 text-2xl font-semibold leading-6">
						<span class="absolute inset-0" />
						{promo.title}
					</h3>
				</a>
			{/each}
		</div>
	</div>
</div>
