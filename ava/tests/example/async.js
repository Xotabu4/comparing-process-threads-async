test("Test 1", async function() {
  console.log("Test 1 started");
  syncOperation();
  await asyncOperation();
  console.log("Test 1 finished");
});

test("Test 2", async function() {
  console.log("Test 2 started");
  syncOperation();
  await asyncOperation();
  console.log("Test 2 finished");
});

test("Test 3", async function() {
  console.log("Test 3 started");
  syncOperation();
  await asyncOperation();
  console.log("Test 3 finished");
});



let mySharedVariable = null
test("Test 1", async function() {
  console.log("Test 1 started");
  mySharedVariable = await asyncOperation();
  console.log("Test 1 finished");
});

test("Test 2", async function() {
  console.log("Test 2 started");
  await asyncOperation(mySharedVariable);
  console.log("Test 2 finished");
});
