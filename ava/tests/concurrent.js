const test = require("ava");
const genericTest = require("../../genericTest").test;

for (let i = 0; i < 50; i++) {
  test("Test" + i, async t => {
    console.log('Test ' + i + ' started')
    await genericTest();
    //console.log('Test ' + i + ' finished')
    t.pass();
  });
}

test.before(function () {
  console.time('took')
})
test.after(function () {
  console.log('#######')
  console.timeEnd('took')
  console.log('#######')
})
