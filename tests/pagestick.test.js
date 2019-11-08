beforeEach(async () => {
    page = await browser.newPage();
    await page.goto(PATH, { waitUntil: 'load' })
});

describe('Load', () => {
    test('Page title is "Pagestick"', async () => {
        await expect(page.title()).resolves.toMatch('Pagestick');
    });

    test('Page is loaded with theme', async () => {
        const HtmlDatasetTheme = await page.$eval('html', el => el.dataset.theme);
        expect(HtmlDatasetTheme).toEqual('light');
    });
});

describe('DOM Modifications', () => {
    test('Theme can be set to dark', async () => {
        const buttonSetToDarkTheme = await page.$('.js-changeTheme[data-theme="dark"]')
        await buttonSetToDarkTheme.click();
        const HtmlDatasetTheme = await page.$eval('html', el => el.dataset.theme);
        expect(HtmlDatasetTheme).toEqual('dark');
    });

    test('Theme can be set to light', async () => {
        const buttonSetToDarkTheme = await page.$('.js-changeTheme[data-theme="light"]')
        await buttonSetToDarkTheme.click();
        const HtmlDatasetTheme = await page.$eval('html', el => el.dataset.theme);
        expect(HtmlDatasetTheme).toEqual('light');
    });
});
