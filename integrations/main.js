// Segment webhooks destination function
async function onTrack(event, settings) {
	const endpoint = 'https://hooks.zapier.com/hooks/catch/8782482/b44c4z8/'; // Jade Zapier Webhooks endpoint
	let response;
	try {
		response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				Authorization: `Basic ${btoa(settings.apiKey + ':')}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(event)
		});
	} catch (error) {
		throw new RetryError(error.message);
	}
	if (response.status >= 500 || response.status === 429) {
		throw new RetryError(`Failed with ${response.status}`);
	}
}
async function onIdentify(event, settings) {
	throw new EventNotSupported('identify is not supported');
}
async function onGroup(event, settings) {
	throw new EventNotSupported('group is not supported');
}
async function onPage(event, settings) {
	throw new EventNotSupported('page is not supported');
}
async function onScreen(event, settings) {
	throw new EventNotSupported('screen is not supported');
}
async function onAlias(event, settings) {
	throw new EventNotSupported('alias is not supported');
}
async function onDelete(event, settings) {
	throw new EventNotSupported('delete is not supported');
}