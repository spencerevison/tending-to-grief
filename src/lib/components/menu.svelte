<script>
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Nav from '$lib/components/nav.svelte';
</script>

<div
	transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'y' }}
	class={`${$$props.class} absolute w-full`}
>
	<Nav class="sticky top-0 flex w-full flex-col items-start gap-4 bg-chocolate-200 p-6 sm:top-0">
		<slot />
	</Nav>
</div>
