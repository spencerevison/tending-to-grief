<script>
	import aboutImg from '$lib/assets/img/promo-retreats.avif?as=run';
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
		<h1 class="font-title text-6xl font-bold sm:text-8xl">Testimonials</h1>
	</div>
</div>

<section class="mx-auto mt-16 max-w-3xl space-y-16 p-8 pb-32 text-lg lg:max-w-4xl lg:text-xl">
	<div class="space-y-4">
		<p>
			“Tasha has a very wonderful, humble, safe energy. She creates a space (both aesthetically and
			spiritually) that makes you feel welcomed and held.”
		</p>
		<p>—Danielle</p>
	</div>
	<hr />
	<div class="space-y-4">
		<p>
			“Our sessions were a pillar of strength and light in a really dark time. Tasha made me feel so
			seen, so held and so safe to just be with my grief”
		</p>
		<p>—Anne</p>
	</div>
	<hr />
	<div class="space-y-4">
		<p>
			“Tasha has played a powerful and much needed role in my grieving process. Her wise
			companionship through my journey after losing my beloved mom suddenly has been a nurturing
			hug, a pillar of strength, and a wise reflective mirror all at once. Within every session I
			felt so very seen, held, and given permission to let free the achiest, rawest and stickiest
			parts of loss. I can’t imagine having gone through this time without her support, and I am so
			deeply, deeply grateful. She is a true ally to anyone immersed in the lessons of grief.”
		</p>
		<p>—Rohini</p>
	</div>
	<hr />
	<div class="space-y-4">
		<p>
			“Grief ceremonies of this depth is what’s missing from our culture and Tasha creates the space
			to normalize and process grief in a really helpful and nourishing container. I hope to attend
			more of her workshops and help spread the word to normalize the deep need for this work! She’s
			an excellent facilitator and talented practitioner.”
		</p>
		<p>—Indigo</p>
	</div>
	<hr />
	<div class="space-y-4">
		<p>
			“My experience attending the grief ceremony was absolutely life changing. It allowed me a safe
			space to grieve and share my story with other women feeling the same as I. Tasha is absolutely
			incredible at what she does, and has a voice of an angel. I can only hope to attend another
			one of her events”
		</p>
		<p>—Taylor Bartel</p>
	</div>
	<hr />
	<div class="space-y-4">
		<p>
			“Tasha facilitated a beautiful ceremony with intuition and love. She brought the spiritual to
			grieving”
		</p>
		<p>—Jaymi Johnston</p>
	</div>
	<hr />
	<div class="space-y-4">
		<p>
			“The grief work Tasha is doing is brave and potent among a cultural norm of grief repression.
			Tasha clearly knows grief intimately and is not afraid to hold and face yours as a pathway to
			connection, support, and belonging.”
		</p>
		<p>—Anna</p>
	</div>
</section>
