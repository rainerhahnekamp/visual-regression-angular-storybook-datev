describe('Holiday Card Component', () => {
  it.each<string>([
    'default',
    'minimal',
    'overflown',
    'sold-out',
    'empty',
    'tiny-image',
    'on-sale',
    'sale-and-sold'
  ])(`should visually test %s via Storybook`, async (story) => {
    await page.goto(`http://localhost:8080/iframe.html?id=eternal-holidaycard--${story}`, {
      waitUntil: 'networkidle2'
    });
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchImageSnapshot();
  });
});
