import{test as pageTest} from "@playwright/test";
import Loginpage from "./Login.page"

const Mypages = pageTest.extend <{ loginPage: Loginpage }>({

    loginPage : async({page}, use) => {
      await use(new Loginpage (page));
    }
});

export const test = Mypages;