const path = require('path')
// 顯示跟目錄 /
console.log(path.sep)
// 指定路徑
const filePath = path.join('/content/','subfolder','test.txt')
console.log(filePath)
// 檔案名稱
const base = path.basename(filePath)
console.log(base)
// 檔案完整路徑 
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)