import { test, expect } from '@playwright/test';

test('SauceDemo full checkout flow with 3 random items', async ({ page }) => {
  // 1. زيارة الموقع
  await page.goto('https://www.saucedemo.com/');

  // 2. تسجيل الدخول
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Assertion: تحقق من صفحة المنتجات
  await expect(page).toHaveURL(/inventory/);

  // 3. اختيار 3 منتجات عشوائية
  const items = await page.$$('.inventory_item');
  const randomIndexes = new Set<number>();
  while (randomIndexes.size < 3) {
    randomIndexes.add(Math.floor(Math.random() * items.length));
  }

  for (const index of randomIndexes) {
    const addBtn = await items[index].$('button');
    await addBtn?.click();
  }

  // 4. الذهاب إلى السلة
  await page.click('.shopping_cart_link');

  // Assertion: تحقق من وجود 3 منتجات في السلة
  const cartItems = await page.$$('.cart_item');
  expect(cartItems.length).toBe(3);

  // 5. إكمال Checkout
  await page.click('#checkout');
  await page.fill('#first-name', 'Rakan');
  await page.fill('#last-name', 'Alshehri');
  await page.fill('#postal-code', '12345');
  await page.click('#continue');
  await page.click('#finish');

  // Assertion: تحقق من رسالة النجاح
  const successMsg = await page.textContent('.complete-header');
  expect(successMsg).toContain('Thank you for your order!');
});