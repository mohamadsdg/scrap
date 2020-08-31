const uri = require("./uri");
const scrapper = require("./scraper");

scrapper.fetchCategories(uri.base, (data, response) => {
  if (response) {
    console.log(data);
  }
});
