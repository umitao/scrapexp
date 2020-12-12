var Xray = require("x-ray");
var xray = Xray();

// xray(
//   "https://www.yemeksepeti.com/istanbul/restoran-arama",
//   "a.restaurantName",
//   [
//     {
//       title: "a.restaurantName > text",
//       link: "a.restaurantName@href",
//     },
//   ]
// )
// .paginate("ul.pagination > li > a@href")
// .limit(30)
// .write("results3.json");

// xray(
//   "https://www.yemeksepeti.com/istanbul/restoran-arama",
//   "ul .select2-results__options"
// )(function (err, title) {
//   console.log(title);
// });

// xray(
//   "https://www.yemeksepeti.com/istanbul/besiktas-levent-mah",
//   "a.restaurantName",
//   ["a.restaurantName"]
// ).write("results5.json");

xray(
  "https://www.yemeksepeti.com/istanbul",
  "option",
  ["option@data-area-name"]
  // "option@data-url"
).write("results7.json");

xray("https://www.yemeksepeti.com/istanbul", "option", [
  {
    title: ["option@data-area-name"],
    url: ["option@data-url"],
  },
]).write("results9.json");
// select2-results__option

// var path = require("path");
// var read = require("fs").readFileSync;
// var html = read(path.resolve(__dirname, "index.html"));
// // var Xray = require("../..");
// // // var x = Xray();

// xray(html, ".item", [
//   {
//     title: "h2",
//     tags: xray(".tags", ["li"]),
//   },
// ])(console.log);
