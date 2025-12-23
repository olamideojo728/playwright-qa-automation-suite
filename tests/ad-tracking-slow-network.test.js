const { test, expect } = require('@playwright/test');

test('Tracking pixel fires on slow network', async ({ page }) => {
    await page.route('**/*', route => {
        route.continue({
            delay: 500, // delay every request by 500ms
        });
    });

    let pixelFired = false;

    page.on('request', req => {
        if (req.url().includes("clk.gif")) {
            pixelFired = true;
            console.log("🐢 SLOW NETWORK PIXEL FIRED:", req.url());
        }
    });

    await page.goto("https://olamidefiction.com");

    await page.waitForSelector("#container-e4b5685e814b0cd1adaffaeceb750dbd");

    await page.click("#container-e4b5685e814b0cd1adaffaeceb750dbd");

    await page.waitForTimeout(5000);

    expect(pixelFired).toBeTruthy();
});
