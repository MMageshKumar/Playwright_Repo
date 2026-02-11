import { test as myTest } from '@playwright/test'

/*
type kumar = {
 hi : String;
}
 
const mkFixture = myTest.extend<kumar>({
 hi : "Raja",
});

*/

const mkFixture = myTest.extend<{hi : String}>({
 hi : "Raja",
});

export const test = mkFixture
export const expect = mkFixture.expect