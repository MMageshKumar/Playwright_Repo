import {Browser, Page, test, expect, Locator} from "@playwright/test"
import {webkit, chromium, firefox} from "@playwright/test"

// Class 7 contains class8 and class9.
test('Locators', async()=>{

    const browser : Browser = await chromium.launch({headless : false, channel : 'chrome'});
    const page : Page = await browser.newPage();

    await page.goto("");
    
    // Already we know this 5 locators

    //1. Id:
    const emailID: Locator = await page.locator('id=input-email');

    //2. Class name:
    const emailID2: Locator = await page.locator('.emailPlace');

    //3. Text:
    const emailID3: Locator = await page.locator('text=email');

    //4. css : we need to add prefix additionally
    const emailID4: Locator = await page.locator('css=id#inputemail');

    //5. xpath : we need to add prefix additionally
    const emailID5: Locator = await page.locator("xpath=*[@id='inputemail']");

    // Data-Test-Id or Test-Data-Id
    //6. Test-id:
    const emailID6: Locator = await page.getByTestId("input-onemail");

    // Select by the ARIA role
    //6. role selector:
    const emailID7: Locator = await page.getByRole("checkbox", {name: "Yes"});


    page.getByText("..");
    page.getByPlaceholder("..")
});