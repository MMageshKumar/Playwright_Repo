import {test} from "../myFixture/pageFixture"
import {chromium, Browser, Page, Locator} from "@playwright/test"

test ("Login implementation", async ({loginPage}) => {
    const browser : Browser = await chromium.launch({headless : false, channel : 'chrome'});
    const page : Page = await browser.newPage();

    await page.goto("https://www.facebook.com/login/");
 
    const str : string = "Magesh";
    await loginPage.enterEmail(str);
    
    await page.waitForTimeout(4000);
});