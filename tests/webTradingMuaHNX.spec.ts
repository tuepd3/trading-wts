import { test } from '@playwright/test';

// login function
async function login(page) {
  await page.goto('http://10.8.90.17:8888/#/home/bang-gia/vn30');
  await page.getByRole('button', { name: 'Đăng nhập' }).click();
  await page.getByPlaceholder('Tên đăng nhập').fill('Tuepd1');
  await page.getByPlaceholder('Tên đăng nhập').press('Tab');
  await page.getByPlaceholder('Mật khẩu').fill('test@123');
  await page.getByRole('button', { name: 'Đăng nhập' }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('dialog').locator('span').nth(2).click();
  await page.getByText('Đặt lệnh').click();
  await page.locator('input[name="inputEl1"]').fill('1');
  await page.locator('input[name="inputEl2"]').fill('1');
  await page.locator('input[name="inputEl3"]').fill('1');
  await page.getByRole('button', { name: 'Xác nhận' }).click();
}

test('Place 20 orders with different order types', async ({ page }) => {
  const orderTypes = ['ATC','MTL','MOK', 'MAK','PLO'];
  await login(page);

  for (let i = 0; i < 20; i++) {
    const currentOrderType = orderTypes[i % orderTypes.length];
    console.log(`Đặt lệnh lần ${i + 1}, loại lệnh: ${currentOrderType}`);
    await page.getByPlaceholder('Mã CK', { exact: true }).fill('TNG');
    await page.getByPlaceholder('Giá x1000').click();
    await page.getByRole('button', { name: currentOrderType }).click();
    await page.getByPlaceholder('KL x1').click();
    await page.getByPlaceholder('KL x1').fill('100');
    await page.getByRole('button', { name: 'Đặt lệnh' }).click();
    await page.getByRole('button', { name: 'Xác nhận' }).click();
    // Optional: chờ nhẹ giữa các lần
    // await page.waitForTimeout(5000);
  }
});
