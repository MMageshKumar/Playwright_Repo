import {Browser, Page, test, expect, Locator} from "@playwright/test"
import {webkit, chromium, firefox} from "@playwright/test"
import * as path from 'path';

test('Focus', async()=>{

    const browser : Browser = await chromium.launch({headless : false, channel : 'chrome'});
    const page : Page = await browser.newPage();

    await page.goto("");

    // focus for hightliting the particular web element.
    await page.locator('id=input-email').focus();
    await page.locator('id=input-email').click();

    await page.waitForTimeout(10000);
    
});