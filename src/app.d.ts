// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import '@poppanator/sveltekit-svg/dist/svg';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

declare module '$lib/assets/*' {
	const meta;
	export default meta;
}

export {};
