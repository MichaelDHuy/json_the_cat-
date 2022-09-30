const request = require('request');
const breedName = process.argv[2]
// const fs = require('fs');
// const readline = require('readline');
// const rl = readline.createInterface({ //readline
//   input: process.stdin,
//   output: process.stdout
// });
const fetchBreedDescription = function (breedName, callback) {
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request(url, (error, response, body) => {
  if (error) {
    return callback(error, null);
  }

  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  if (data.length === 0) {
    return callback("breed not found", null);
  }
  return callback(null, data[0].description);
});
};

module.exports = { fetchBreedDescription };