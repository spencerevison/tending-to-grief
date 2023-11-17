<script>
	import Logo from '$lib/assets/graphics/logo-graphic.svg?component';
	import aboutImg from '$lib/assets/img/about-2.jpg?as=run';
	import Img from '@zerodevx/svelte-img';
	import parents from '$lib/assets/img/parents.jpg?as=run';
	import aboutMe from '$lib/assets/img/flowers.jpg?as=run';
	import hands from '$lib/assets/img/hands-2.jpg?as=run';
	import newMoon from '$lib/assets/img/new-moon.jpg?as=run';
	import sitting from '$lib/assets/img/sitting.jpg?as=run';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>
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
		<h1 class="font-title text-6xl font-bold sm:text-8xl">About</h1>
	</div>
</div>

<div class="mx-auto max-w-3xl space-y-4 p-8 pb-8 text-lg lg:max-w-4xl lg:text-xl">
	<div class="mx-auto my-16 flex max-w-2xl flex-col items-center gap-8 text-center sm:gap-16">
		<div class="space-y-1 sm:space-y-3">
			<p class="font-title text-4xl sm:text-5xl lg:text-6xl">
				When we bypass grief, we bypass love—so let's be with it, shall we?
			</p>
		</div>
		<Logo class="w-40 shrink fill-white sm:w-64" />
	</div>

	<div class="mx-auto max-w-4xl pt-8">
		<Img src={aboutMe} class="-z-10 mx-auto max-w-full rounded-lg" />
	</div>
</div>

<section
	class="mx-auto flex max-w-3xl flex-col gap-8 p-8 pb-20 text-lg lg:max-w-4xl lg:pb-32 lg:text-xl"
>
	<h2 class="text-3xl lg:text-4xl">Meet me</h2>
	<p>Welcome, I'm Tasha</p>
	<p>
		I have worked very, very hard, to get here. I come to this work with a decade of experience of
		tending the portals of birth and death. I come to this work with a deep personal spiritual path
		and practice. I come to this work after years of sitting in devotion and awe of grief through my
		own incredibly deep and painful losses. I come to this work after hundreds of hours of
		professional training and self study to learn all the ways I can show up and be the most present
		and skillful helper as possible. I come to this work as a human being who knows that even though
		this is some of the heart wrenching, hardest, and most grueling work one can do- it is my work,
		my dharma, my truth, it is why I am here. To create beauty through these portals of pain, to
		gather, to hold, to witness & to trust that the greatest gifts in life are those of love, and
		those of death.
	</p>
	<p>
		My work is firmly rooted in the continuing bonds theory and in ceremony. I call on the elements,
		earth and unseen beings and realms to support us as we journey into the underworld to create
		rituals to honor, remember, metabolize and be with our grief. I work beyond the veil and call
		forth the healthy and luminous ancestors to be with us.
	</p>
	<p>
		I am passionate about supporting teens and young adults in parent loss. Pregnant women
		navigating loss of loved ones, parentless parents, and traumatic losses such as suicide, over
		dose and missing persons. In person retreats, circles and gatherings are among my favorite
		elements along with supporting people 1:1.
	</p>
	<p>
		Beyond my grief work offered here I am a mother, writer, herbalist, birth worker, singer, and
		much more. I currently reside on Hawai’i island with my partner, 3 year old daughter and another
		child on the way in spring of 2024. In my free time I am writing, drinking herbal tea, taking
		baths, swimming in the turquoise warm waters and loving my roles of partner, mama and matriarch.
	</p>
	<figure class="mx-auto max-w-2xl pt-8">
		<Img src={parents} class="-z-10 mx-auto max-w-full rounded-lg" />
		<figcaption class="text-base">
			Frank and Heidi 1998- All of this work is in devotion to them, all of this work is in their
			name
		</figcaption>
	</figure>
	<p>
		My parents are the bedrock of this work. My mother died when I was 21 after many years of
		battling deep trauma, addiction, mental and physical illness which spanned most of my life. I
		was her death midwife without even knowing what that was, giving her permission and saying my
		final goodbye to her in the hospital, she died 4 hours later. My father died very traumatically
		when I was 5 months pregnant with my daughter. His body was missing for many weeks until he was
		found in a river on the east coast while I was navigating pregnancy, living abroad and a few
		months later the pandemic. I am still digesting their deaths, and I will be for the rest of my
		life.
	</p>
	<div class="mx-auto max-w-lg pt-8">
		<Img src={newMoon} class="-z-10 mx-auto max-w-full rounded-lg" />
	</div>
</section>

<section
	class="mx-auto flex max-w-3xl flex-col gap-8 p-8 pb-20 text-lg lg:max-w-4xl lg:pb-32 lg:text-xl"
>
	<h2 class="text-3xl lg:text-4xl">Education & Experience</h2>
	<div>
		<h3 class="mb-2 text-2xl font-bold">Professional Trainings</h3>
		<ul class="list-disc pl-4">
			<li>Trauma-informed Grief Support professional training - Shauna Janz 2023</li>
			<li>
				Loss through Death Support Group facilitator training, Grief level I, Living through Loss
				Counseling Society 2020
			</li>
			<li>Roots to Resiliency - Grief companioning training with Shauna Janz 2020</li>
			<li>Traumatic Loss Support Group facilitator training, BC Bereavement 2021</li>
			<li>
				Holding Space for Pregnancy Loss training, Birth Breath and Death Foundation by Amy Wright
				Glenn 2021
			</li>
			<li>Motherloss Certification, Claire Bidwell Smith 2024</li>
			<li>
				Continuing Bonds in Grief Therapy and Counseling - Association for Death Education and
				Counseling 2022
			</li>
			<li>Polyvagal Theory - Deb Dana LCSW 2022</li>
			<li>“What’s Your Grief” Continuing Education Professional Workshops</li>
			<li>Ambiguous Loss, Continuing Bonds, Grief Theory, Addiction and Overdose</li>
			<li>Children’s Grief, Ethics Personal Loss, and Countertransference</li>
		</ul>
	</div>
	<div>
		<h3 class="mb-2 text-2xl font-bold">
			Bachelor of Arts in Human Development - concentration in gerontology
		</h3>
		<p>University of California East Bay</p>
		<p>Thesis “Perspectives and grief experiences of young adults on parent loss”</p>
	</div>
	<div>
		<h3 class="mb-2 text-2xl font-bold">Work Experience</h3>
		<ul class="list-disc pl-4">
			<li>Hospice of Kona, Hawai’i Island - Grief counselor (currently on leave while pregnant)</li>
			<li>Coastal Kids Homecare - Grief group facilitator</li>
			<li>Kara - Grief Agency in Palo Alto, Volunteer</li>
			<li>Young Adult Group Facilitator/Peer Counselor/Camp Kara Youth Bereavement Counselor</li>
			<li>Owner and Operator, Arose Herbal Teas (formerly The Tea Tree Herb Co)</li>
		</ul>
	</div>
	<div>
		<h3 class="mb-2 text-2xl font-bold">Herbal Medicine/ Birthwork</h3>
		<ul class="list-disc pl-4">
			<li>Science and Art of Herbal Medicine, Rosemary Gladstar Distance Herbal Program - 2013</li>
			<li>California School of Herbal Studies - Body Systems 9-Month Program - 2014</li>
			<li>Advanced Community Herbalist Certification - Holly Bellebouno - 2017</li>
			<li>Herbal Medicine for Women Professional Course - Aviva Romm MD 2016</li>
			<li>Herbs + the Nervous System 6-Week Course, AHG - David Winston 2015</li>
			<li>Certified Holistic Doula Training - Sierra Childbirth Institute 2014 (DONA)</li>
			<li>Breastfeeding Basics - DONA Approved 2014</li>
			<li>Postpartum Doula Training - DONA 2016</li>
			<li>
				5-Week Midwifery Student Volunteer, Bumi Wadah Robin Lim’s Clinic in Dulag, Philippines 2016
			</li>
			<li>200-Hour Yoga Teacher Training - The Lotus Seed, Portland Oregon 2016</li>
		</ul>
	</div>
	<div class="mx-auto max-w-lg pt-8">
		<Img src={sitting} class="-z-10 mx-auto max-w-full rounded-lg" />
	</div>
</section>

<section class="mx-auto max-w-3xl space-y-4 p-8 pb-20 text-lg lg:max-w-4xl lg:pb-32 lg:text-xl">
	<h2 class="text-3xl lg:text-4xl">What does “tending to grief” mean?</h2>
	<p>
		It means so many things and looks so many ways. But some of my definitions include: Showing up
		in true presence to sit at the altar of loss and sorrow. It means making time and space for what
		is yearning to be felt. For these immense losses to be acknowledged. Tending to grief means
		making this a practice and an honoring. To grow into a new relationship with your beloved dead.
		To remember them, to carry them forward.
	</p>

	<p>
		Tending to grief means letting go of the dominant cultural lie we continuously are fed that we
		need to let go of these people and that death and grief is something we are meant to just “get
		over”. It means carving out intentional time to connect with them. To go into the landscape of
		your memory, study the lines on the faces of the ones that you loved so dear and invite them to
		reveal themselves now in other ways. It means allowing your tears to fall and fertilize the
		soil, the land, the rivers, and oceans that are near. To call upon the earth and the land to
		hold you.
	</p>

	<p>
		Tending to grief means to recognize the preciousness and the greatness of your love. It means to
		light a candle in the dark. To be in the marrow and bones of your heartbreak for it is simply a
		reflection of your profound, unconditional, love.
	</p>

	<p>
		It means being held in your joy and your love for life because you are intimately connected with
		the fact that it is all so fleeting and impermanent. Tending to grief is to be open to the
		immense suffering and impermanence that this life has promised us. And to the boundless
		graciousness and beauty of it too.
	</p>

	<p>I hope you will join me here on the journey With great love, and great grief</p>
	<p>xoxo</p>
	<p>—Tasha</p>

	<div class="mx-auto max-w-4xl pt-8">
		<Img src={hands} class="-z-10 mx-auto max-w-full rounded-lg" />
	</div>
</section>
