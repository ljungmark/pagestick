beforeEach(async () => {
    await page.goto(PATH, { waitUntil: 'load' })
});
it('Page title is "Pagestick"', async () => {
    await expect(page.title()).resolves.toMatch('Pagestick');
});
