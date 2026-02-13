import {test, Browser, chromium, Page} from "@playwright/test"

test("Alerts in Playwright", async ()=> {

    const browser : Browser = await chromium.launch({headless : false, channel : 'chrome'});
    const page : Page = await browser.newPage();

    await page.goto("https://www.facebook.com/login/");

    page.on("dialog", (alert) => {
        console.log(alert.message() +" "+ alert.type) // Message means alert box having some text and type mean simple alert, accept and cancel alert kind of.
        alert.accept();
        alert.accept("Passing the message inside text box");
        alert.dismiss();
    });
    page.click("#submit");
    
});