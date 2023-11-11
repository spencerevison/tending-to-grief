export const post = async ({ request }: { request: Request }) => {
	const formID = '1FAIpQLSdMMvK0wDsz_kCbtxi3_44tseD-SACbVO9WBXR8aBdeQ';

	const body = await request.formData();
	const name = body.get('name');
	const email = body.get('email');
	//const message = body.get('message');

	const response =
		await fetch(`https://docs.google.com/forms/d/e/${formID}/formResponse?usp=pp_url&entry.2015997712=${name}&entry.1886489237=${email}&submit=Submit
  `);

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
};
