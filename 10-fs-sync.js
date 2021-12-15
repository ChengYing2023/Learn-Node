// 使用fs模組 fs模組有讀取與寫入的function
// readFileSync 讀取同步 writeFileSync 寫入同步
const { readFileSync, writeFileSync } = require("fs");
// 讀取first , second
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/first.txt", "utf8");
// 寫入 如果沒有檔案就會自動建立
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first},${second}`,
  { flag: "a" }
);
