<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { Hamburger } from 'svelte-hamburgers';
	import '../app.css';
	import Logo from '$lib/assets/graphics/logo-landscape.svg?component';
	import Menu from '$components/menu.svelte';
	import Nav from '$components/nav.svelte';
	import Footer from '$components/footer.svelte';

	let open = false;
	beforeNavigate(() => (open = false));

	let y = 0;
	const logoBaseHeight = 4;
	let logoHeight = logoBaseHeight;
	let headerHeight = 98;

	$: {
		logoHeight = Math.min(
			logoBaseHeight,
			Math.max(2.5, logoBaseHeight - (y / 500) * logoBaseHeight)
		);
		headerHeight = clamp(98 - (y / 500) * 98, 56, 98);
	}

	function clamp(val: number, min: number, max: number) {
		return val > max ? max : val < min ? min : val;
	}
</script>

<header
	class="sticky top-0 z-20 flex w-full items-center justify-between gap-6 overflow-visible bg-chocolate-400 px-2 py-6 backdrop-blur-md sm:px-10"
	style="height: {headerHeight}px;"
>
	{#if open}
		<Menu class="absolute left-0 top-0 z-10 lg:hidden" />
	{/if}
	<a href="/">
		<Logo class="w-full shrink fill-white" style="height: {logoHeight}rem;" />
	</a>
	<div class="z-20 lg:hidden">
		<Hamburger bind:open --color="white" --layer-height="2px" --padding="0.5rem" />
	</div>
	<Nav class="ml-10 hidden items-center gap-10 lg:flex" />
</header>
<svelte:window bind:scrollY={y} />
<main class="min-h-screen">
	<slot />
</main>
<Footer />
