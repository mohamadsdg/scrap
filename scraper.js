const puppeteer = require("puppeteer");

module.exports.fetchCategories = async (url, callback) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "domcontentloaded" });
  await page.addScriptTag({
    url: "https://code.jquery.com/jquery-3.5.1.min.js",
  });

  const resault = await page.evaluate(() => {
    let data = {
      categories: [],
    };
    $(".nav-search-dropdown")
      .children()
      .each(() => {
        let obj = {
          text: $(this),
        };
        data.categories.push(obj);
      });

    return data;
  });
  await page.close();
  await browser.close();
  callback(resault, true);
};
