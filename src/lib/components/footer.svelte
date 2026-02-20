<script lang="ts">
	import InstagramIcon from '~icons/bi/instagram';
	const navigation = [
		{
			name: 'Instagram',
			href: 'https://www.instagram.com/tendingtogrief/',
			icon: InstagramIcon
		}
	];
</script>

<footer class="bg-chocolate-500">
	<div
		class="mx-auto max-w-7xl gap-16 px-6 py-12 md:flex md:items-center md:justify-between lg:px-8"
	>
		<div class="flex justify-center space-x-6 md:order-2">
			{#each navigation as item}
				<a href={item.href} class="" target="_blank">
					<span class="sr-only">{item.name}</span>
					<svelte:component this={item.icon} class="h-6 w-6" aria-hidden="true" />
				</a>
			{/each}
		</div>
		<div class="mt-8 space-y-6 md:order-1 md:mt-0">
			<p class=" leading-5">&copy; 2026 Tending to Grief.</p>
			<p class=" leading-5">
				I respectfully acknowledge that I reside on the unceded ancestral lands of the Kanaka Maoli.
				I honor their enduring connection to this place and express gratitude for the opportunity to
				live, work, and create on this sacred land.
			</p>
			<p class="pt-8 text-xs leading-5">Site by Peebler Inc.</p>
		</div>
	</div>
</footer>
