var Xray = require("x-ray");
var xray = Xray();

xray(
  "https://www.yemeksepeti.com/istanbul/besiktas-levent-mah",
  "a.restaurantName",
  [
    {
      title: "a.restaurantName > span",
      link: "a.restaurantName@href",
    },
  ]
)
  .paginate("ul.pagination > li > a@href")
  .limit(3)
  .write("results2.json");

// xray(
//   "https://www.yemeksepeti.com/istanbul/besiktas-levent-mah",
//   "body@html"
// )(function (_err, title) {
//   console.log(title);
// });
