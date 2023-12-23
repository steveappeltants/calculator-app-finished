import { test, expect } from '@playwright/test';

    test('App has a button', async ({ page }) => {
    await page.goto('http://localhost:3000');

    const addButton = await page.waitForSelector('#add');
    expect(addButton).toBeTruthy();
});

test('App can cubstract', async ({ page }) => {
    await page.goto('http://localhost:3000');

    const subtractButton = await page.waitForSelector('#subtract');

    await page.fill('#number1', '3');
    await page.fill('#number2', '7');

    await subtractButton.click();
    await page.waitForSelector('#result:has-text("-4")');

    const resultText = await page.textContent('#result');

    expect(resultText).toBe('The result is: -4');
});