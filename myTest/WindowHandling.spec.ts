import {test , Browser, Page } from "@playwright/test";
import { before, describe } from "node:test";
import {chromium} from "playwright" // we can use @playwright/test also

let browser : Browser;
let page : Page;
test.beforeAll("Regular Actions", async () =>{
    browser = await chromium.launch ({headless : false, channel: "chrome"});
    page = await browser.newPage();
    page.goto("")
});
