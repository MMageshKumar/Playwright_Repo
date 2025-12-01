import {Browser, Page, test, expect, Locator} from "@playwright/test"
import {webkit, chromium, firefox} from "@playwright/test"

test('Press Virtual Keys', async()=>{

    const browser : Browser = await chromium.launch({headless : false, channel : 'chrome'});
    const page : Page = await browser.newPage();

    await page.goto("");

    //Simple method: pressSequentially, if we want we can add delay as well.
    await page.locator('id=input-email').pressSequentially("macbook", {delay: 300});

    await page.waitForTimeout(10000);
    
});