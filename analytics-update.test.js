const { test, expect } = require('@playwright/test');

test('Analytics updates after banner click', async ({ page }) => {
    // Step 1: Get current click count
    await page.goto("https://olamidefiction.com/analytics.php");
    const before = await page.locator("#totalClicks").innerText();

    // Step 2: Trigger a click
    await page.goto("https://olamidefiction.com");
    await page.click("#container-e4b5685e814b0cd1adaffaeceb750dbd");
    await page.waitForTimeout(2000);

    // Step 3: Check analytics again
    await page.goto("https://olamidefiction.com/analytics.php");
    const after = await page.locator("#totalClicks").innerText();

    expect(Number(after)).toBeGreaterThan(Number(before));
});
