import { test, expect } from '@playwright/test';

async function login(page) {
  await page.goto('https://mbw-uat.pinetree.vn/vi');
  await page.getByLabel('Search').nth(1).click();
  await page.getByRole('link', { name: 'Đăng nhập' }).click();
  await page.getByPlaceholder('Tên đăng nhập').click();
  await page.getByPlaceholder('Tên đăng nhập').click();
  await page.getByPlaceholder('Tên đăng nhập').fill('ThaiBC');
  await page.getByPlaceholder('Tên đăng nhập').press('Tab');
  await page.getByPlaceholder('Mật khẩu').fill('123456');
  await page.getByRole('button', { name: 'Đăng nhập' }).click();
  await page.getByLabel('Search').first().click();
  await page.getByPlaceholder('Mã CK').fill('FPT');
  await page.getByText('FPT', { exact: true }).click();
  await page.getByRole('button', { name: 'Mua', exact: true }).click();
  // Nhập mã PIN
  const pinCode = ['1', '1', '1']; // giả sử 3 ký tự
  for (let i = 0; i < pinCode.length; i++) {
    await page.locator(`input[data-index="${i}"]`).fill(pinCode[i]);
  }
  await page.getByRole('button', { name: 'Xác nhận', exact: true }).click();
  await page.getByRole('button', { name: 'Mua', exact: true }).click();
}

test('test', async ({ page }) => {
  const orderTypes = ["ATO","ATC","MP"];
  await login(page);
  
  for (let i = 0; i < 10; i++) {
    const orderType = orderTypes[i % orderTypes.length];
    await page.getByText(orderType).click();
    await page.getByPlaceholder('Khối lượng').click();
    await page.getByPlaceholder('Khối lượng').fill('100');
    await page.getByRole('button', { name: 'Đặt mua' }).click();
    await page.getByRole('button', { name: 'Xác nhận' }).click();
  }
});


