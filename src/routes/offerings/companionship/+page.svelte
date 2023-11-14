<script>
	import Logo from '$lib/assets/graphics/logo-graphic.svg?component';
	import aboutImg from '$lib/assets/img/mandala.jpg?as=run';
	import candles from '$lib/assets/img/ceremony-1.jpg?as=run';
	import Img from '@zerodevx/svelte-img';
</script>

<div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-48 lg:px-8">
	<div>
		<Img
			src={aboutImg}
			class="absolute inset-0 -z-10 h-full w-full bg-chocolate-50 object-cover "
		/>
		<div
			class="absolute inset-0 -z-10 bg-gradient-to-t from-chocolate-700/80 via-chocolate-700/50"
		/>
	</div>

	<div class="mx-auto max-w-2xl text-center">
		<h1 class="font-title text-6xl font-bold sm:text-7xl">1:1 Grief Companionship</h1>
	</div>
</div>

<section class="mx-auto max-w-3xl space-y-8 p-8 text-lg lg:max-w-4xl lg:text-xl">
	<div class="mx-auto my-16 flex max-w-2xl flex-col items-center gap-8 text-center sm:gap-16">
		<div class="space-y-1 sm:space-y-3">
			<p class="font-title text-4xl sm:text-5xl lg:text-6xl">
				&quot;How we carry the dead matters&quot;
			</p>
			<p class="text-xl sm:text-2xl">—Stephen Jenkinson</p>
		</div>
		<Logo class="w-40 shrink fill-white sm:w-64" />
	</div>
	<Img src={candles} class="-z-10  w-full rounded-lg" />
	<p>
		Work with me in a private 1:1 container. I am currently offering these via zoom or by phone.
		These 60 minute sessions are a sacred time and place for you to carve out time to be with your
		grief. These sessions are mostly guided by you and I am here to offer support, companionship and
		tools and embodiment practices for you to deeper into connection and healing with your beloved
		dead. This is done through meditation, somatic practices, writing, art, connection to land and
		earth, movement etc.
	</p>
	<p>
		This is also a space where I can support you in a self designed grief ritual, earth/ flower
		mandala making, helping you weave a meaningful end of life celebration, obituary writing etc.
		These sessions are sliding scale $25 - $100 Per hour. *NO ONE WILL BE TURNED AWAY FOR LACK OF
		FUNDS
	</p>
</section>
