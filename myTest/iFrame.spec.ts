import {test , Browser, Page, BrowserContext } from "@playwright/test";
import { error } from "console";
import {chromium} from "playwright" // we can use @playwright/test also

let browser : Browser;
let page : Page;
let context : BrowserContext;
test.beforeAll("Regular Actions", async () =>{
    browser = await chromium.launch ({headless : false, channel: "chrome"});
    context = await browser.newContext()
    page = await context.newPage();
    await page.goto("")
});

 test("Frames concept", async ()=> {
    // Simple swith from Page itself
    const frameOne = page.frame("Locator of the frame");

    // In playwright if frame's not presernt it will not throw error automatically like Selenium,
    // so we are using customized if case here
    if ( frameOne != null ){
        frameOne.fill("","");
        frameOne.click("");

        //To child frames
        const childFrames = frameOne.childFrames();
        childFrames[0].click("");

       // In playwright we can directly call the parent frame and switch to parent two ways are avilable
       frameOne.fill("","");
       childFrames[0].parentFrame()?.click("");

    } else throw new Error ("frame not available");

 });