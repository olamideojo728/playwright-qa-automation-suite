const { test, expect } = require('@playwright/test');

test('Form validation works correctly', async ({ page }) => {
    await page.goto("https://olamidefiction.com/contact");

    // Try submitting empty form
    await page.click("button[type='submit']");

    // Expect validation errors
    await expect(page.locator(".error-message")).toBeVisible();

    // Fill only one field
    await page.fill("input[name='name']", "Christus");
    await page.click("button[type='submit']");

    // Still expect errors
    await expect(page.locator(".error-message")).toBeVisible();

    // Fill all fields
    await page.fill("input[name='email']", "test@example.com");
    await page.fill("textarea[name='message']", "Hello!");

    // Submit again
    await page.click("button[type='submit']");

    // Expect success message
    await expect(page.locator(".success-message")).toBeVisible();
});
