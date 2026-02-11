import {Browser, Page, test, expect, Locator} from "@playwright/test"
import {webkit, chromium, firefox} from "@playwright/test"

test('Dropdown', async()=>{

    const browser : Browser = await chromium.launch({headless : false, channel : 'chrome'});
    const page : Page = await browser.newPage();

    await page.goto("");

    //Dropdown input from string
    const emailID ='id=input-email'; 
    const emailID2 = await page.$('#input-email'); // mostly we can use web elements as emailID

    await page.selectOption(emailID, {value: ""});
    await page.selectOption(emailID, {index: 6});
    await page.selectOption(emailID, {label: ""});
    await emailID2?.selectOption([{value:'aqua'}, {index: 3}]) // For Multiple select option

    //Take all values from the Drobdown. (> options is a CSS selector only)
    const allValues : any[] = await page.$$(emailID + "> option");
    console.log(allValues.length);

    for (const a of allValues){
        console.log(await a.text)
    };

    await page.waitForTimeout(10000);
    
});