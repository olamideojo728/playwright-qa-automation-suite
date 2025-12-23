const { test, expect, devices } = require('@playwright/test');

test.use({
    ...devices['iPhone 12'],
});

test('Tracking pixel fires on mobile banner click', async ({ page }) => {
    let pixelFired = false;

    page.on('request', req => {
        if (req.url().includes("clk.gif")) {
            pixelFired = true;
            console.log("🔥 MOBILE TRACKING PIXEL FIRED:", req.url());
        }
    });

    await page.goto("https://olamidefiction.com");

    await page.waitForSelector("#container-e4b5685e814b0cd1adaffaeceb750dbd");

    await page.tap("#container-e4b5685e814b0cd1adaffaeceb750dbd");

    await page.waitForTimeout(3000);

    expect(pixelFired).toBeTruthy();
});
