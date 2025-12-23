const { test, expect } = require('@playwright/test');

test('Tracking pixel redirect chain is captured', async ({ page }) => {
    const redirects = [];

    page.on('request', req => {
        if (req.url().includes("clk.gif")) {
            redirects.push(req.url());
        }
    });

    await page.goto("https://olamidefiction.com");

    await page.waitForSelector("#container-e4b5685e814b0cd1adaffaeceb750dbd");

    await page.click("#container-e4b5685e814b0cd1adaffaeceb750dbd");

    await page.waitForTimeout(3000);

    console.log("🔗 Redirect chain:", redirects);

    expect(redirects.length).toBeGreaterThan(0);
});
