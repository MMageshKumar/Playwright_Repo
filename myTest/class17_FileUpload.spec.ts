import {Browser, Page, test, expect, Locator} from "@playwright/test"
import {webkit, chromium, firefox} from "@playwright/test"
import * as path from 'path';

test('File Upload', async()=>{

    const browser : Browser = await chromium.launch({headless : false, channel : 'chrome'});
    const page : Page = await browser.newPage();

    await page.goto("");

    //1. Single file upload
    await page.locator('id=input-email').setInputFiles("path of the file in your system");

    //2. Multiple file upload
    await page.locator ('id=whatEver').setInputFiles([
        path.join("path of the file in your system"),
        path.join("path of the file in your system")
    ]);

    //3. Deselect files
    await page.locator ('id=whatEver').setInputFiles([]);

    await page.waitForTimeout(10000);
    

    // Listener method
 page.on('filechooser', (filechooser) => {
filechooser.setFiles([
        path.join("path of the file in your system"),
        path.join("path of the file in your system")
    ])
 });
 await page.locator('id=input-email').click();
 // then do the click operation - the above listener work with reversely 

});