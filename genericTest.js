const axios = require("axios");

async function pause(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function test() {
  for (let i = 0; i < 50; i++) {
    let resp = await axios.get("https://httpbin.org/uuid");
    //console.log(resp.data);
    await pause(1000)
  }
}

module.exports.test = test;
module.exports.pause = pause;
