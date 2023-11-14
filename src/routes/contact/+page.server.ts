import type { Actions } from './$types';

const formID = '1FAIpQLScqzX1gfRp20wJKj1TtFMgcrFyErm4ZAHmyrzSnyTA1eAy50g';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');

		/* const response = await fetch(`https://docs.google.com/forms/u/0/d/e/${formID}/formResponse`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify({
				'entry.198679502': name,
				'entry.1667206723': email
			})
		}); */

		const response = await fetch(
			`https://docs.google.com/forms/d/e/${formID}/formResponse?entry.198679502=${name}&entry.1667206723=${email}&submit=Submit`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
					// 'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: JSON.stringify({
					'entry.198679502': name,
					'entry.1667206723': email
				})
			}
		);
		console.log(response.status);
		if (response.status === 200) {
			return {
				status: 200,
				body: { message: 'success' }
			};
		} else {
			return {
				status: 404,
				body: { message: 'failed' }
			};
		}
	}
} satisfies Actions;
