import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { firefox, chromium, webkit } from '@playwright/test'

test.describe("smoke", ()=> {
    
test("At a time open and use many browsers", async()=>{

    const browser : Browser = await chromium.launch({headless : false, channel : 'chrome'});

    // BrowserContext1
    const broserContext1: BrowserContext = await browser.newContext({
        recordVideo: {
            dir: "./vidoes/"
        }
    });

    const page1 : Page = await broserContext1.newPage();

    await page1.goto("");
     
    const emailID1: Locator = page1.locator('');
    const password1: Locator = page1.locator('');
    const submitButton1: Locator = page1.locator(' ');

    await emailID1.fill(" ");
    await password1.fill(" ");
    await submitButton1.click();

    // BrowserContext2
    const broserContext2: BrowserContext = await browser.newContext();

    const page2 : Page = await broserContext1.newPage();

    await page1.goto("");
     
    const emailID2: Locator = await page2.locator('');
    const password2: Locator = await page2.locator('');
    const submitButton2: Locator = await page2.locator(' ');

    await emailID2.fill(" ");
    await password2.fill(" ");
    await submitButton2.click();

    const title2: String = await page2.title();
    expect(title2).toEqual("My Account title");

    await page2.screenshot({path: ''});

    await page2.close();

    const title1: String = await page1.title();
    expect(title1).toEqual("My Account title");

    await page1.screenshot({path: ''});

    await page1.close();
});

});