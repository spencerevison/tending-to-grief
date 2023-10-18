<script lang="ts">
	import { Hamburger } from 'svelte-hamburgers';
	import '../app.css';
	import Logo from '$lib/assets/graphics/logo-landscape.svg?component';
	import Menu from '$components/menu.svelte';
	import Nav from '$components/nav.svelte';

	let open = false;

	let y = 0;
	const logoBaseHeight = 3.5;
	let logoHeight = logoBaseHeight;
	let headerHeight = 88;

	$: {
		logoHeight = Math.min(
			logoBaseHeight,
			Math.max(2.5, logoBaseHeight - (y / 500) * logoBaseHeight)
		);
		headerHeight = clamp(88 - (y / 500) * 88, 54, 88);
	}

	function clamp(val: number, min: number, max: number) {
		return val > max ? max : val < min ? min : val;
	}
</script>

<header
	class="sticky top-0 z-20 flex w-full items-center justify-between gap-6 overflow-visible bg-chocolate-400/90 px-2 py-6 backdrop-blur-md sm:px-10"
	style="height: {headerHeight}px;"
>
	{#if open}
		<Menu class="absolute left-0 top-0 z-10 md:hidden" />
	{/if}
	<a href="/">
		<Logo class="max-w-[18rem] shrink fill-white" style="height: {logoHeight}rem;)" />
	</a>
	<div class="z-20 md:hidden">
		<Hamburger bind:open --color="white" --layer-height="2px" --padding="0.5rem" />
	</div>
	<Nav class="hidden gap-10 md:flex" />
</header>
<svelte:window bind:scrollY={y} />
<slot />
