const { test, expect } = require('@playwright/test');
const { humanize } = require('../utils/human');
const { randomUserAgent } = require('../utils/userAgents');
const { randomDevice } = require('../utils/devices');
const { randomGeo } = require('../utils/geolocation');
const { randomTimezone } = require('../utils/timezones');

// Create a randomized browser context for each test run
test.use(async ({ browser }, use) => {
    const geo = randomGeo();

    const context = await browser.newContext({
        ...randomDevice(),
        geolocation: {
            latitude: geo.latitude,
            longitude: geo.longitude
        },
        timezoneId: randomTimezone(),
        permissions: ['geolocation'],
        extraHTTPHeaders: {
            "User-Agent": randomUserAgent()
        }
    });

    console.log("🌍 Using geolocation:", geo.name, geo.latitude, geo.longitude);
    console.log("🕒 Using timezone:", context._options.timezoneId);

    await use(context);
});

test('Human-like user triggers tracking pixel', async ({ page }) => {
    let pixelFired = false;

    // Detect tracking pixel requests
    page.on('request', req => {
        if (req.url().includes("clk.gif")) {
            pixelFired = true;
            console.log("🔥 TRACKING PIXEL FIRED:", req.url());
        }
    });

    // Load your site
    await page.goto("https://olamidefiction.com");

    // Wait for banner
    await page.waitForSelector("#container-e4b5685e814b0cd1adaffaeceb750dbd");

    // Human-like behavior instead of page.click()
    await humanize(page, "#container-e4b5685e814b0cd1adaffaeceb750dbd");

    // Give time for pixel to fire
    await page.waitForTimeout(3000);

    // Assert pixel fired
    expect(pixelFired).toBeTruthy();
});



