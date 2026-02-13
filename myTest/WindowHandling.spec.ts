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

test("We atomatically swithed to the new window and taking that window details", async ()=> {
    const [newWindow] = await Promise.all([
        context.waitForEvent("page"),
        await page.click("")
    ]);
    await newWindow.waitForLoadState() // just a wait for loading the tab
});

test("for multiple window handles", async ()=> {
    const [multipleWindow] = await Promise.all([
        context.waitForEvent ("page"),
        await page.click("")
    ]);
    await multipleWindow.waitForLoadState()
    const allWindows = multipleWindow.context().pages();
    console.log(allWindows.length);
    await allWindows[1].bringToFront();
    allWindows[1].click("");

    /*The square brackets [multipleWindow] are used for Array Destructuring in JavaScript/TypeScript.

In Playwright, when you use Promise.all(), it returns an Array containing the results of all the promises inside it.
The square brackets allow you to "unpack" that array and assign the values to variables immediately.*/

});
