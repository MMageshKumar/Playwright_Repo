import {Browser, Page, test, expect, Locator} from "@playwright/test"
import {webkit, chromium, firefox} from "@playwright/test"

test.use({
    actionTimeout: 40000,
});

test('Timeout', async()=>{

    const browser : Browser = await chromium.launch({headless : false, channel : 'chrome'});
    const page : Page = await browser.newPage();

    await page.goto("");

   //1. Step level timeout
   await page.waitForSelector("id=input-email"); // like a webdriver wait in selenium
    await page.locator('id=input-email').click({timeout: 1000});

    //2. test level timeout
    await page.waitForTimeout(10000);
    
});