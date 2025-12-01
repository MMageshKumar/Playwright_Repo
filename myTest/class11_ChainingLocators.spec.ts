import {Browser, Page, test, expect, Locator} from "@playwright/test"
import {webkit, chromium, firefox} from "@playwright/test"

test('Chaining Locators', async()=>{

    const browser : Browser = await chromium.launch({headless : false, channel : 'chrome'});
    const page : Page = await browser.newPage();

    await page.goto("");

    //Locator Chained by parameter - way 1
    const emailID2: Locator = await page.locator('.emailPlace');
    const emailID: Locator = await page.locator('id=input-email');
    await emailID.locator(emailID2).click();

    //Direct Chaining Locator - way 2
     await page.locator('text=email').locator('id=input-email').click();
});