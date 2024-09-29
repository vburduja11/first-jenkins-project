import {test} from '@playwright/test';

test('Youtube Search', async ({ page }) => {
  // Your test steps go here
   await page.goto('https://www.youtube.com');

  //wait for 3 seconds
   await page.waitForTimeout(3000);

  //locate the search box
   let searchBox =page.locator("//input[@id='search']");

   await searchBox.click();

  //enter "CYDEO" in the search box
   await searchBox.fill('Cydeo');

  //wait for 3 seconds
   await page.waitForTimeout(3000);

   await searchBox.press('Enter');

   //wait for 3 seconds
   await page.waitForTimeout(3000);

    let firstResult = page.locator("(//a[@id='video-title'])[1]");

    await firstResult.click();

    //wait for 3 seconds
    //await page.waitForTimeout(3000);



});