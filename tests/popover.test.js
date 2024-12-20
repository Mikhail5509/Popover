const puppeteer = require('puppeteer');

describe('Popover', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:8080'); // Запуск dev-server
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should display popover on button click', async () => {
    const button = await page.$('.popover-button');
    await button.click();

    const popover = await page.$('.popover');
    expect(popover).not.toBeNull();

    const content = await page.evaluate((el) => el.innerText, popover);
    expect(content).toContain('Popover Title');
  });
});
