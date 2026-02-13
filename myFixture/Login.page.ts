import { Page } from "playwright";

export default class Loginpage {

    private page : Page;
    constructor (page: Page){
        this.page = page;
    }

    public get elementEmailField() {
    return this.page.locator("xpath=//*[@id='email']");
    }

    public async enterEmail(name: string){
       const ele = this.elementEmailField;
      await ele.fill (name);
    };
}