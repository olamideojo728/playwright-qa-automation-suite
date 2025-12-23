exports.humanize = async (page, selector) => {
    // Random delay before interacting
    await page.waitForTimeout(Math.random() * 1500 + 500);

    // Random scrolling
    const scrollSteps = Math.floor(Math.random() * 5) + 3;
    for (let i = 0; i < scrollSteps; i++) {
        await page.mouse.wheel(0, Math.random() * 300);
        await page.waitForTimeout(Math.random() * 400 + 200);
    }

    // Move mouse in a human-like curve
    const box = await page.locator(selector).boundingBox();
    const targetX = box.x + Math.random() * box.width;
    const targetY = box.y + Math.random() * box.height;

    const steps = Math.floor(Math.random() * 20) + 10;
    for (let i = 0; i < steps; i++) {
        await page.mouse.move(
            targetX + Math.sin(i / steps * Math.PI) * 5,
            targetY + Math.cos(i / steps * Math.PI) * 5
        );
        await page.waitForTimeout(20 + Math.random() * 30);
    }

    // Random hesitation before clicking
    await page.waitForTimeout(Math.random() * 800 + 200);

    // Click
    await page.mouse.click(targetX, targetY);
};
