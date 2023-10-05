const { chromium } = require('playwright');

(async () function {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navigate to the Google homepage.
  await page.goto('https://www.google.com');

  // Get the search input element.
  const searchInput = await page.$('input[name="q"]');

  // Enter the search term "Playwright".
  await searchInput.type('Playwright');

  // Click the search button.
  const searchButton = await page.$('input[type="submit"]');
  await searchButton.click();

  // Wait for the search results to load.
  await page.waitForNavigation();

  // Get the first search result link.
  const firstSearchResultLink = await page.$('a.r');

  // Click the first search result link.
  await firstSearchResultLink.click();

  // Wait for the search result page to load.
  await page.waitForNavigation();

  // Get the title of the search result page.
  const searchResultTitle = await page.title();

  // Print the title of the search result page to the console.
  console.log(searchResultTitle);

  // Close the browser.
  await browser.close();
})();
