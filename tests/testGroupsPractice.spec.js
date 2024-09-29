import { test } from '@playwright/test';



//test.describe('@smoke Test Group', () => { --> Here is how to use tags
test.describe('Test Group', () => {

    test.beforeEach(async({page}) => {
       await page.goto('https://practice.cydeo.com/');
    });

    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(3000);
    });

    test('Getting the title of the page', async ({ page }) => {
        // Your test steps go here
        let actualTitle = await page.title();

  expect(actualTitle).toBe('Practice');

  console.log('Title of the page is correct');
    });

    test('Getting the curent URL of the page', async ({ page }) => {
        // Your test steps go here
        let actualURL = page.url();

        expect(actualURL).toBe('https://practice.cydeo.com/');
     
        console.log('URL of the page is correct');
    });

    test('Set the window size', async ({ page }) => {
        // Your test steps go here
        await page.setViewportSize({ width: 1900, height: 1080});
        console.log('Window size set to 1280x800');
    });

});