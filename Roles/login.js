import { Role } from 'testcafe';

const testUser = Role('https://purple-pond-078e7901e.azurestaticapps.net/', async t => {
	const username = 'ed3dc4d914cb4b15bc57@mailspons.com';
	const password = 'Wl1Z!Yz#C6OKzOX%D6o1';
	await t
		.typeText('#loginId', username)
		.typeText('#password', password)
		.click('.submit');
});

export { testUser }