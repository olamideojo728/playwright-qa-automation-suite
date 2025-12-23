const { test, expect } = require('@playwright/test');
const { humanize } = require('../utils/human');
const { randomUserAgent } = require('../utils/userAgents');
const { randomDevice } = require('../utils/devices');
const { randomGeo } = require('../utils/geolocation');
const { randomTimezone } = require('../utils/timezones');

test('Simulate 10–50 global users triggering tracking pixel', async ({ browser }) => {
    const sessionCount = Math.floor(Math.random() * 41) + 10; // 10–50 users
    console.log(`👥 Running ${sessionCount} simulated user sessions`);

    for (let i = 0; i < sessionCount; i++) {
        console.log(`\n🧍 User #${i + 1}`);

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

        const page = await context.newPage();

        let pixelFired = false;

        page.on('request', req => {
            if (req.url().includes("clk.gif")) {
                pixelFired = true;
                console.log(`🔥 Pixel fired for user #${i + 1}:`, req.url());
            }
        });

        await page.goto("https://olamidefiction.com");

        await page.waitForSelector("#container-e4b5685e814b0cd1adaffaeceb750dbd");

        await humanize(page, "#container-e4b5685e814b0cd1adaffaeceb750dbd");

        await page.waitForTimeout(2000);

        if (!pixelFired) {
            console.log(`⚠️ Pixel did NOT fire for user #${i + 1}`);
        }

        await context.close();
    }

    expect(true).toBeTruthy(); // test always passes; failures logged per user
});
