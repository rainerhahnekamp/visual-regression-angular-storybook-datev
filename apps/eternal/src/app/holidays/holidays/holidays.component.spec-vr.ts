it('should do visual regression', async () => {
  await page.setViewport({ width: 1300, height: 1300 });
  await page.goto('http://localhost:4200/holidays', { waitUntil: 'networkidle0' });
  const screenshot = await page.screenshot();
  expect(screenshot).toMatchImageSnapshot();
});
