import { test, expect } from '@playwright/test';

    test('App has a button', async ({ page }) => {
    await page.goto('http://localhost:3000');

    const addButton = await page.waitForSelector('#add');
    expect(addButton).toBeTruthy();
});

test('App can cubstract', async ({ page }) => {
    await page.goto('http://localhost:3000');

    const subtractButton = await page.locator('[role="button"][name="subtract"]');

    await page.fill('#number1', '3');
    await page.fill('#number2', '7');

    await subtractButton.click();
    await page.waitForSelector('#result:has-text("-4")');

    const result = await page.$eval('#result', (element: Element | null) => {
        return element ? element.textContent : null;
  });

  expect(result).toBe('The result is: 2');
});
