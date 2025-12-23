const { test, expect } = require('@playwright/test');

test('Custom tracking pixel fires on banner click', async ({ page }) => {
    let phpTrackerFired = false;

    page.on('request', req => {
        if (req.url().includes("track_click.php")) {
            phpTrackerFired = true;
            console.log("🔥 PHP TRACKER FIRED:", req.url());
        }
    });

    await page.goto("https://olamidefiction.com");

    await page.waitForSelector("#container-e4b5685e814b0cd1adaffaeceb750dbd");

    await page.click("#container-e4b5685e814b0cd1adaffaeceb750dbd");

    await page.waitForTimeout(2000);

    expect(phpTrackerFired).toBeTruthy();
});
