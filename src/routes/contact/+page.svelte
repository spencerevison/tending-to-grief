<script lang="ts">
	import { page } from '$app/stores';
	const url = $page.url;
	const success = url.searchParams.get('success') === 'true';
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>
<div class="isolate px-6 py-24 sm:py-32 sm:pt-24 lg:px-8">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-3xl sm:text-5xl">Get in touch</h2>
	</div>
	<form
		action="https://api.web3forms.com/submit"
		method="POST"
		class="mx-auto mt-16 max-w-xl sm:mt-20"
	>
		<input type="hidden" name="access_key" value="d0bd7d82-2e75-4558-8c78-2a81788cd3bc" />
		<input type="hidden" name="redirect" value="http://tendingtogrief.com/contact?success=true" />
		<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
			<div>
				<label for="first-name" class="block text-sm font-semibold leading-6">First name</label>
				<div class="mt-2.5">
					<input
						required
						type="text"
						name="first-name"
						id="first-name"
						autocomplete="given-name"
						class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chocolate-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
			<div>
				<label for="last-name" class="block text-sm font-semibold leading-6">Last name</label>
				<div class="mt-2.5">
					<input
						type="text"
						name="last-name"
						id="last-name"
						autocomplete="family-name"
						class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chocolate-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
			<div class="sm:col-span-2">
				<label for="email" class="block text-sm font-semibold leading-6">Email</label>
				<div class="mt-2.5">
					<input
						required
						type="email"
						name="email"
						id="email"
						autocomplete="email"
						class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chocolate-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
			<div class="sm:col-span-2">
				<label for="phone-number" class="block text-sm font-semibold leading-6">Phone number</label>
				<div class="relative mt-2.5">
					<input
						type="tel"
						name="phone-number"
						id="phone-number"
						autocomplete="tel"
						class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chocolate-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
			<div class="sm:col-span-2">
				<label for="message" class="block text-sm font-semibold leading-6">Message</label>
				<div class="mt-2.5">
					<textarea
						name="message"
						id="message"
						rows="4"
						class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chocolate-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
		</div>
		<div class="mt-10">
			<button
				type="submit"
				class="block w-full rounded-md bg-chocolate-500 px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm hover:bg-pumpkin-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chocolate-600"
				>Let's talk</button
			>
		</div>
	</form>
	<p class="mx-auto mt-8 max-w-4xl text-center text-xl {success ? 'block' : 'hidden'}">
		Thank you! We will get back to you as soon as possible.
	</p>
</div>
