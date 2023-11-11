<script lang="ts">
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

{#if form?.status === 200}
	<p>Success!</p>
{/if}
<form method="POST">
	<label>
		Email
		<input name="email" type="email" />
	</label>
	<label>
		Name
		<input name="name" type="name" />
	</label>
	<button>Submit</button>
</form>
