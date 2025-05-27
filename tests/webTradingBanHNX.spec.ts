import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('http://10.8.90.16:8888/#/home/bang-gia/vn30');
//   await page.getByRole('button', { name: 'Đăng nhập' }).click();
//   await page.getByPlaceholder('Tên đăng nhập').click();
//   await page.getByPlaceholder('Tên đăng nhập').fill('HaiPDH');
//   await page.getByPlaceholder('Tên đăng nhập').press('Tab');
//   await page.getByPlaceholder('Mật khẩu').fill('1111');
//   await page.getByRole('button', { name: 'Đăng nhập' }).click();
//   await page.getByText('Đặt lệnh').click();
//   await page.locator('input[name="inputEl1"]').fill('1');
//   await page.locator('input[name="inputEl2"]').fill('1');
//   await page.locator('input[name="inputEl3"]').fill('1');
//   await page.getByRole('button', { name: 'Xác nhận' }).click();
//   await page.getByRole('button', { name: 'Bán' }).click();
//   await page.getByPlaceholder('Mã CK', { exact: true }).click();
//   await page.getByPlaceholder('Mã CK', { exact: true }).fill('HUT');
//   await page.getByPlaceholder('Giá x1000').click();
//   await page.getByRole('button', { name: 'ATC' }).click();
//   await page.getByPlaceholder('KL x1').click();
//   await page.getByPlaceholder('KL x1').fill('100');
//   await page.getByRole('button', { name: 'Đặt lệnh' }).click();
//   await page.getByRole('button', { name: 'Xác nhận' }).click();
// });

// login function
async function login(page) {
  await page.goto('http://10.8.90.16:8888/#/home/bang-gia/vn30');
  await page.getByRole('button', { name: 'Đăng nhập' }).click();
  await page.getByPlaceholder('Tên đăng nhập').fill('HaiPDH');
  await page.getByPlaceholder('Tên đăng nhập').press('Tab');
  await page.getByPlaceholder('Mật khẩu').fill('1111');
  await page.getByRole('button', { name: 'Đăng nhập' }).click();
  await page.getByText('Đặt lệnh').click();
  await page.locator('input[name="inputEl1"]').fill('1');
  await page.locator('input[name="inputEl2"]').fill('1');
  await page.locator('input[name="inputEl3"]').fill('1');
  await page.getByRole('button', { name: 'Xác nhận' }).click();
}

test('test', async ({ page }) => {
  const orderTypes = ["MTL","MOK","MAK", "ATC","PLO"];
  await login(page);

  for (let i = 0; i < 100; i++) {
    const orderType = orderTypes[i % orderTypes.length];

    //Sửa
    await page.getByRole('button', { name: 'Bán' }).click();
    await page.getByPlaceholder('Mã CK', { exact: true }).click();
    await page.getByPlaceholder('Mã CK', { exact: true }).fill('HUT');
    await page.getByPlaceholder('Giá x1000').click();
    await page.getByRole('button', { name: orderType }).click();
    await page.getByPlaceholder('KL x1').click();
    await page.getByPlaceholder('KL x1').fill('100');
    await page.getByRole('button', { name: 'Đặt lệnh' }).click();
    await page.getByRole('button', { name: 'Xác nhận' }).click();
  }
});
