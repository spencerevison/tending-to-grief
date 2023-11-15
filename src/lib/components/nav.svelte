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
	<a href="/testimonials">Testimonials</a>
	<a href="/about">About</a>
	<a href="/contact">Contact</a>
</nav>
