<script>
	import Img from '@zerodevx/svelte-img';
	import promo1 from '$lib/assets/img/promo-companionship.avif?as=run&tint=a7775311';
	import promo2 from '$lib/assets/img/promo-circles.avif?as=run&tint=a77753';
	import promo3 from '$lib/assets/img/promo-retreats.avif?as=run&tint=a77753ff';
	const posts = [
		{
			id: 1,
			title: 'Grief Companionship',
			href: '#',
			image: promo1
		},
		{
			id: 1,
			title: 'Circles, Ceremonies, Support Groups',
			href: '#',
			image: promo2
		},
		{
			id: 1,
			title: 'Grief Retreats',
			href: '#',
			image: promo3
		}
	];
</script>

<div class="bg-white/90 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold leading-normal text-chocolate-700 sm:text-5xl">
				Ways to journey together
			</h2>
			<!-- <p class="mt-2 text-lg leading-8 text-gray-600">
				Learn how to grow your business with our expert advice.
			</p> -->
		</div>
		<div
			class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			{#each posts as post}
				<article
					class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-chocolate-700 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
				>
					<Img src={post.image} class="absolute inset-0 -z-10 h-full w-full object-cover" />
					<div
						class="absolute inset-0 -z-10 bg-gradient-to-t from-chocolate-700 via-chocolate-700/40"
					/>
					<div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-chocolate-900/10" />

					<h3 class="mt-3 text-2xl font-semibold leading-6 text-white">
						<a href={post.href}>
							<span class="absolute inset-0" />
							{post.title}
						</a>
					</h3>
				</article>
			{/each}
		</div>
	</div>
</div>
