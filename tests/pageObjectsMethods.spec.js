import { expect, test } from '@playwright/test';


test('Getting the title of the page', async ({ page }) => {
  // Your test steps go here
  //got to https://practice.cydeo.com/
   await page.goto('https://practice.cydeo.com/');

  let actualTitle = await page.title();

  expect(actualTitle).toBe('Practice');

  log('Title of the page is correct');
  await page.waitForTimeout(3000);

});
test('Getting the curent URL of the page', async ({ page }) => {
  // Your test steps go here
   //got to https://practice.cydeo.com/
   await page.goto('https://practice.cydeo.com/');

   let actualURL = page.url();

   expect(actualURL).toBe('https://practice.cydeo.com/');

   log('URL of the page is correct');
   await page.waitForTimeout(3000);

});

test('Set the window size', async ({ page }) => {
  // Your test steps go here

  await page.setViewportSize({ width: 1900, height: 1080});

  //got to https://practice.cydeo.com/
  await page.goto('https://practice.cydeo.com/');

  log('Window size set to 1280x800');

  await page.waitForTimeout(3000);


});
