import { Page } from "playwright";

export default class Loginpage {

    private page : Page;
    constructor (page: Page){
        this.page = page;
    }

    public get elementEmailField() {
    return this.page.$("xpath=//*[@id='email']");
    }

    public async enterEmail(name: string){
       const ele = await this.elementEmailField;
      await ele?.fill (name);
    };
}