import {test, expect, Browser, Page, Locator} from '@playwright/test'
import { firefox, chromium, webkit } from '@playwright/test'

test("Login test", async()=>{

    const browser : Browser = await chromium.launch({headless : false, channel : 'chrome'});
    const page : Page = await browser.newPage();

    await page.goto("");
     
    const emailID: Locator = await page.locator('');
    const password: Locator = await page.locator('');
    const submitButton: Locator = await page.locator(' ');

    await emailID.fill(" ");
    await password.fill(" ");
    await submitButton.click();

    const title: String = await page.title();
    expect(title).toEqual("My Account title");

    await page.screenshot({path: ''});

    await page.close();
});