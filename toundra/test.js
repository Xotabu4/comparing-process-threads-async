const { Test, AfterAll } = require("toundra");
const genericTest = require("../genericTest").test;
console.time("Toundra tests are started");

for (let i = 0; i < 50; i++) {
  Test("my test " + i, async () => {
    console.log("Started test - " + i);
    await genericTest();
    console.log("Finished test - " + i);
  });
}

AfterAll(function() {
  console.timeEnd("Toundra tests are started");
});
