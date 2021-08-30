import { memoize } from "./decorators";

class Test {
  @memoize()
  get yy() {
    console.log("GET yy");
    return 2;
  }
}

// const test = new Test();
// test.yy;
// test.yy;
// test.yy;
