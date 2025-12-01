import {Browser, Page, test, expect, Locator} from "@playwright/test"
import {webkit, chromium, firefox} from "@playwright/test"

test('Normal window', async()=>{

    const browser = await chromium.launchPersistentContext("forHistoryPath", {headless: false, channel:"chrome"});

    // two tab's opened when without incognito, so the below two lines,
    const pages : Page [] = browser.pages();
    const page : Page = pages[0];

    await page.waitForTimeout(10000);

    await page.goto("");
});