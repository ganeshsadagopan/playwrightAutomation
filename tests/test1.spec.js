const { test, expect } = require('@playwright/test');

// launch browser with page
test.only('launch browser',async ({browser})=>{
   
   const browserContext=await browser.newContext();
   const page= await browserContext.newPage();
    await page.goto('https://www.google.com/');
    await page.waitForTimeout(10000); // keep open for 10 seconds
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
 
    });

    // launch browser with page
test('launch browser with page',async ({page})=>{
    await page.goto('https://www.facebook.com/');
    await page.waitForTimeout(10000); // keep open for 10 seconds
    });
    //wait for timeout - is equal to thread.sleep in selenium

