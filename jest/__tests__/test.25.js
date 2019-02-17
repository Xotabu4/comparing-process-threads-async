const genericTest = require("../../genericTest").test;
test("some test", async () => {
  console.log('started!', new Date())
  await genericTest()
}, 120000);