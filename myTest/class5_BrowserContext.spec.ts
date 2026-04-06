import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { firefox, chromium, webkit } from '@playwright/test'
import { tracingChannel } from 'diagnostics_channel';
import { snapshot } from 'node:test';

test.describe("smoke", ()=> {
    
test("At a time open and use many browsers", async()=>{

    const browser : Browser = await chromium.launch({headless : false, channel : 'chrome'});

    // BrowserContext1
    const context1: BrowserContext = await browser.newContext({
        recordVideo: {
            dir: "./vidoes/"
        }
    });

    await context1.tracing.stop({ path: "trace_1"});

    const page1 : Page = await context1.newPage();

    await page1.goto("https://www.facebook.com/login/");
     
    const emailID1: Locator = page1.locator('xpath=//*[@id="email"]');
    const password1: Locator = page1.locator('xpath=//*[@id="pass"]');
    const submitButton1: Locator = page1.locator("xpath=//*[@name='login']");

    await emailID1.fill("Mg");

    await password1.fill(" ");
    await submitButton1.click();


    // BrowserContext2
    const broserContext2: BrowserContext = await browser.newContext();

    const page2 : Page = await context1.newPage();

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