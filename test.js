const fs = require("fs");

const a = JSON.parse(fs.readFileSync("a.json", {encoding: "utf-8"}));
const b = JSON.parse(fs.readFileSync("b.json", {encoding: "utf-8"}));
const c = {...a, ...b};
fs.writeFileSync("c.json", JSON.stringify(c, null, 2));
