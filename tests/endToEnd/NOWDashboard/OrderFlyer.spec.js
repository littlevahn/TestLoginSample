import { Selector, Role } from 'testcafe';

const testUser = Role('https://purple-pond-078e7901e.azurestaticapps.net/login', async t => {
	const username = 'ed3dc4d914cb4b15bc57@mailspons.com';
	const password = 'Wl1Z!Yz#C6OKzOX%D6o1';
	await t
		.typeText('#loginId', username)
		.typeText('#password', password)
		.click('.submit');
}, { preserveUrl: true });

fixture
	.disablePageCaching`Dashboard Order Flyer NOW! - Integration Flow`
	.page`https://purple-pond-078e7901e.azurestaticapps.net/`;

test
	.disablePageCaching('Login to Test Users Account', async t => {

		await t.useRole(testUser);

		//const username = 'ed3dc4d914cb4b15bc57@mailspons.com';
		//const password = 'Wl1Z!Yz#C6OKzOX%D6o1'
		/*await t
			.click('.MuiButtonBase-root-30')
			.typeText('#loginId', username)
			.typeText('#password', password)
			.click('.submit')
			.expect('#cardContentWrapper > div:nth-child(1) > div').exists;
			*/
	});

test
	('Select a listing and Purcahse a flyer', async t => {
		await t
			.navigateTo('https://purple-pond-078e7901e.azurestaticapps.net/ml/home')
			.expect('#cardContentWrapper > div:nth-child(1) > div').exists;
	});
