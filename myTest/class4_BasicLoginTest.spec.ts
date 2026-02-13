import { test, expect, Browser, Page, Locator} from '@playwright/test'
import { firefox, chromium, webkit } from '@playwright/test'
// import {test} from '..//myFixture/OneFixture'

test("Login test", async()=>{

    const browser : Browser = await chromium.launch({headless : false, channel : 'chrome'});
    const page : Page = await browser.newPage();

    await page.goto("https://www.facebook.com/login/");
     
    const emailID: Locator = page.locator('xpath=//*[@id="email"]');
    const password: Locator = page.locator('xpath=//*[@id="pass"]');
    const submitButton: Locator = page.locator("xpath=//*[@name='login']");

    await emailID.fill("MageshKumar");
    await password.fill("Password");
    await submitButton.click();

    const title: String = await page.title();
    expect(title).toEqual("Facebook");

    await page.screenshot({path: 'C:\Users\mages\Desktop\Playwright_Repo\Resources\sample.png'});
    await submitButton.screenshot({path: ""}); // Element screenshot

    await page.waitForTimeout(10000);

    await page.close();
});