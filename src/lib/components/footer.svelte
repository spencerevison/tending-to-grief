<script lang="ts">
	import InstagramIcon from '~icons/bi/instagram';
	const navigation = [
		{
			name: 'Instagram',
			href: '#',
			icon: InstagramIcon
		}
	];
</script>

<footer>
	<div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
		<div class="flex justify-center space-x-6 md:order-2">
			{#each navigation as item}
				<a href={item.href} class="">
					<span class="sr-only">{item.name}</span>
					<svelte:component this={item.icon} class="h-6 w-6" aria-hidden="true" />
				</a>
			{/each}
		</div>
		<div class="mt-8 space-y-2 md:order-1 md:mt-0">
			<p class="text-sm leading-5">&copy; 2023 Tending to Grief.</p>
			<p class="text-xs leading-5">Site by Peebler Inc.</p>
		</div>
	</div>
</footer>
