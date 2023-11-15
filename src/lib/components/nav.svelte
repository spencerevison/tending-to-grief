<script>
	import { Button, Dropdown, DropdownItem } from 'flowbite-svelte';
	import ChevronDownSolid from '~icons/bi/chevron-down';
</script>

<nav class={`${$$props.class} text-sm uppercase tracking-widest text-white`}>
	<a href="/">Home</a>
	<p class="lg:hidden">Offerings</p>
	<div class="ml-4 flex flex-col gap-4 lg:hidden">
		<a href="/offerings/companionship">1:1 Grief Companionship</a>
		<a href="/offerings/ceremonies">Ceremonies & Workshops</a>
		<a href="/offerings/retreats">Grief Retreats</a>
	</div>
	<Button
		class="-mr-2 hidden items-center gap-2 bg-transparent text-sm uppercase tracking-widest text-white hover:bg-transparent dark:bg-transparent lg:flex"
		><span>Offerings</span><ChevronDownSolid
			class="ml-2 h-3 w-3 text-white dark:text-white"
		/></Button
	>
	<Dropdown
		class="ml-[110px] hidden flex-col items-start gap-4 rounded-b-lg bg-chocolate-400 p-2 lg:flex"
		containerClass="bg-transparent dark:bg-transparent dark:shadow-none shadow-none"
	>
		<DropdownItem class="text-sm uppercase tracking-widest text-white hover:bg-transparent"
			><a href="/offerings/companionship">1:1 Grief Companionship</a></DropdownItem
		>
		<DropdownItem class="text-sm uppercase tracking-widest text-white hover:bg-transparent"
			><a href="/offerings/ceremonies">Ceremonies & Workshops</a></DropdownItem
		>
		<DropdownItem class="text-sm uppercase tracking-widest text-white hover:bg-transparent"
			><a href="/offerings/retreats">Grief Retreats</a></DropdownItem
		>
	</Dropdown>
	<a href="/about">About</a>
	<a href="/contact">Contact</a>
</nav>
-->
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
