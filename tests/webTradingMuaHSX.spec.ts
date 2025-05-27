import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
 
 
//   await page.getByPlaceholder('Mã CK', { exact: true }).fill('FPT');
//   await page.getByPlaceholder('Giá x1000').click();
//   await page.getByRole('button', { name: 'ATO' }).click();
//   await page.getByPlaceholder('KL x1').click();
//   await page.getByPlaceholder('KL x1').fill('100');
//   await page.getByRole('button', { name: 'Đặt lệnh' }).click();
//   await page.getByRole('button', { name: 'Xác nhận' }).click();
// });


async function login(page) {
  await page.goto('http://10.8.90.17:8888/#/home/bang-gia/vn30');
  await page.getByRole('button', { name: 'Đăng nhập' }).click();
  await page.getByPlaceholder('Tên đăng nhập').fill('Tuepd1');
  // await page.getByPlaceholder('Mật khẩu').press('test@123');
  await page.getByPlaceholder('Mật khẩu').fill('test@123');
  await page.getByRole('button', { name: 'Đăng nhập' }).click();
  await page.getByRole('dialog').locator('span').nth(2).click();
  await page.getByText('Đặt lệnh').click();
  await page.locator('input[name="inputEl1"]').fill('1');
  await page.locator('input[name="inputEl2"]').fill('1');
  await page.locator('input[name="inputEl3"]').fill('1');
  await page.getByRole('button', { name: 'Xác nhận' }).click();
}

test('test', async ({ page }) => {

  const orderTypes = ["MTL","ATO","ATC","MP"];
  await login(page);

  for (let i = 0; i < 100; i++) {
    const orderType = orderTypes[i % orderTypes.length];
    // Sửa
    await page.getByPlaceholder('Mã CK', { exact: true }).fill('FPT');
    await page.getByPlaceholder('Giá x1000').click();
    await page.getByRole('button', { name: orderType }).click();
    await page.getByPlaceholder('KL x1').click();
    await page.getByPlaceholder('KL x1').fill('100');
    await page.getByRole('button', { name: 'Đặt lệnh' }).click();
    await page.getByRole('button', { name: 'Xác nhận' }).click();
  }
});
