import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.mytaxprepoffice.com/');

  // Expect a title "to contain" a substring.
  
});
