<script lang="ts">
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem
	} from 'flowbite-svelte';
	import Logo from '$lib/assets/graphics/logo-landscape.svg?component';
	import { page } from '$app/stores';
	import ChevronDown from '~icons/bi/chevron-down';

	$: activeUrl = $page.url.pathname;
</script>

<!-- <nav class={`${$$props.class} text-sm uppercase tracking-widest `}>
	<a href="/">Home</a>
	<p>Offerings</p>
	<div class="ml-4 flex flex-col gap-4 md:hidden">
		<a href="/offerings/companionship">Grief Companionship</a>
		<a href="/offerings/ceremonies">Ceremonies & Workshops</a>
		<a href="/offerings/retreats">Grief Retreats</a>
	</div>
	<a href="/about">About</a>
	<a href="/contact">Contact</a>
</nav> -->
<Navbar class={`${$$props.class} bg-transparent text-sm uppercase tracking-widest !text-white`}>
	<NavBrand href="/">
		<Logo class="w-full shrink fill-white" style="height: {$$props.logoHeight}rem;" />
	</NavBrand>
	<NavHamburger />
	<NavUl {activeUrl}>
		<NavLi href="/" class="text-white">Home</NavLi>
		<NavLi class="cursor-pointer text-white">
			Offerings<ChevronDown class="ml-2 inline h-3 w-3 " />
		</NavLi>
		<Dropdown class="z-20 w-44">
			<DropdownItem href="/offerings/companionship">Grief Companionship</DropdownItem>
			<DropdownItem href="/offerings/ceremonies">Ceremonies & Workshops</DropdownItem>
			<DropdownItem href="/offerings/retreats">Grief Retreats</DropdownItem>
		</Dropdown>
		<NavLi class="text-white" href="/about">About</NavLi>
		<NavLi class="text-white" href="/contact">Contact</NavLi>
	</NavUl>
</Navbar>
