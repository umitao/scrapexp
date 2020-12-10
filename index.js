var Xray = require("x-ray");
var x = Xray();

x(
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
  .write("results.json");
