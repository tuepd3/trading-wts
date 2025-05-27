import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.getByText('ATO').click();
//   await page.getByPlaceholder('Khối lượng').click();
//   await page.getByPlaceholder('Khối lượng').fill('100');
//   await page.getByRole('button', { name: 'Đặt mua' }).click();
//   await page.getByRole('button', { name: 'Xác nhận' }).click();
// });


async function login(page) {
  await page.goto('http://10.8.90.163:3060/vi');
  await page.getByLabel('Search').nth(1).click();
  await page.getByRole('link', { name: 'Đăng nhập' }).click();
  await page.getByPlaceholder('Tên đăng nhập').fill('Tuepd1');
  await page.getByPlaceholder('Mật khẩu').fill('test@123');
  await page.getByRole('button', { name: 'Đăng nhập' }).click();
  await page.getByLabel('Search').first().click();
  await page.getByPlaceholder('Mã CK').fill('TNG');
  await page.getByText('TNG', { exact: true }).click();
  await page.getByRole('button', { name: 'Mua', exact: true }).click();
  const pinCode = ['1', '1', '1']; // giả sử 3 ký tự
  for (let i = 0; i < pinCode.length; i++) {
    await page.locator(`input[data-index="${i}"]`).fill(pinCode[i]);
  }
  await page.getByRole('button', { name: 'Xác nhận', exact: true }).click();
  await page.getByRole('button', { name: 'Mua', exact: true }).click();
}

test('test', async ({ page }) => {
  const orderTypes = ["ATC","MTL","MOK","MAK","PLO"];
  await login(page);

  for (let i = 0; i < 100; i++) {
    const orderType = orderTypes[i % orderTypes.length];
    await page.getByText(orderType).click();
    console.log("Loại lệnh:" orderType.o);
    await page.getByPlaceholder('Khối lượng').click();
    await page.getByPlaceholder('Khối lượng').fill('100');
    await page.getByRole('button', { name: 'Đặt mua' }).click();
    await page.getByRole('button', { name: 'Xác nhận' }).click();
  }
});


