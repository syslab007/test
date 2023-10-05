import { test, expect } from '@playwright/test';

test('test', async function({ page }) {
  test.setTimeout(110000);
  await page.goto('https://crm.mytaxprepoffice.com/');
  await page.goto('https://auth.mytaxprepoffice.com/oxauth/authorize.htm?scope=openid+offline_access+user_name&response_type=code&redirect_uri=https%3A%2F%2Fcrm.mytaxprepoffice.com%2Fredirect&state=dG9vfmh1Rkl6ZGVkd2ZnUFlMaUNZc19ucUN1RlBsa2ZqcWdGcFd2eXpZcHR0&code_challenge_method=S256&nonce=dG9vfmh1Rkl6ZGVkd2ZnUFlMaUNZc19ucUN1RlBsa2ZqcWdGcFd2eXpZcHR0&client_id=b90e7ff9-d6e0-4742-8786-bcb5b473522b&code_challenge=Q4zWf1B-SrZRWIhvqX5xbwBrmIUGei-rn-hAcJ35le8');
  await page.locator('[id="loginForm\\:username"]').click();
  await page.locator('[id="loginForm\\:username"]').fill('bhargav.rana');
  await page.locator('[id="loginForm\\:password"]').click();
  await page.locator('[id="loginForm\\:password"]').fill('CRM');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Bhargav Rana' }).click();
  await page.getByRole('link', { name: 'DTU Graph' }).click();
  await page.locator('body').press('F12');
  await page.locator('html').click();
  await page.locator('#DTUGraph-0_Canvas').click({
    position: {
      x: 1103,
      y: 457
    }
  });
  await page.locator('body').press('F12');
  await page.getByRole('button', { name: 'Search' }).click();
});
