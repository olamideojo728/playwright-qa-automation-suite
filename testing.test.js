const { test, expect } = require('@playwright/test');

test('Site loads and key elements are visible', async ({ page }) => {
    await page.goto("https://olamidefiction.com");

    // Check header
    await expect(page.locator("header")).toBeVisible();

    // Check banner exists
    await expect(page.locator("#container-e4b5685e814b0cd1adaffaeceb750dbd")).toBeVisible();

    // Check footer
    await expect(page.locator("footer")).toBeVisible();
});
