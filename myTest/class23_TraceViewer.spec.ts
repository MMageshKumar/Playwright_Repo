import {test , Browser, Page, BrowserContext } from "@playwright/test";
import {chromium} from "playwright" // we can use @playwright/test also

let browser : Browser;
let page : Page;
let context : BrowserContext;
test.beforeAll("Regular Actions", async () =>{
    browser = await chromium.launch ({headless : false, channel: "chrome"});
    context = await browser.newContext()
    page = await context.newPage();
    await page.pause();
    await page.goto("")

    await context.tracing.start({
        snapshots: true,
        screenshots: true,
        sources: true
    });
});

 test("Frames concept", async ()=> {

 });

 test.afterAll ("Regular Actions Closing", async () => {
    await context.tracing.stop({ path: "trace_2.zip"});
 });

