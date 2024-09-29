import {test} from '@playwright/test';

test.describe('Test Group1', () => {


    test.beforeAll(async () => {
      // Your setup steps go here
      console.log('Before All is executed');
    });

    test.afterAll(async () => {
      // Your teardown steps go here
      console.log('After All is executed');
    });

    test.beforeEach(async () => {
      // Your setup steps for each test go here
      console.log('Before Each is executed');
    });

    test.afterEach(async () => {
      // Your teardown steps for each test go here
      console.log('After Each is executed');
    });


    test('Test Case 1', async ({page}) => {
      // Your test steps go here
     console.log('Your test steps 1 go here');
    })

    test('Test Case 2', async ({page}) => {
      // Your test steps go here
      console.log('Your test steps 2 go here');
    })

    test('Test Case 3', async ({page}) => {
      // Your test steps go here
      console.log('Your test steps 3 go here');
    })
  
})