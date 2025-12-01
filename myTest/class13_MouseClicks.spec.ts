import {Browser, Page, test, expect, Locator} from "@playwright/test"
import {webkit, chromium, firefox} from "@playwright/test"

// Class 13 contains class14 and class15.
test('Mouse Click', async()=>{

    const browser : Browser = await chromium.launch({headless : false, channel : 'chrome'});
    const page : Page = await browser.newPage();

    await page.goto("");

    //1. Normal click
    await page.locator('id=input-email').click();

    //2. Double click
    await page.locator('id=input-email').dblclick();

    //3. Right click
    await page.locator('id=input-email').click({button: "right"});

     //4. Shift click (for open new window)
    await page.locator('id=input-email').click({modifiers : ["Shift"]});

    //5. Mouse hover
    await page.locator('id=input-email').hover();

    //6. Drag and Drop
    // way 1
    await page.locator('id=input-email').dragTo(page.locator("..."));

    // way 2
    await page.locator('id=input-email').hover();
    await page.mouse.down();
    await page.locator('id=input-email').hover();
    await page.mouse.down();


    await page.waitForTimeout(10000);
    
});