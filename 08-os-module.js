const os = require("os");

// 使用者資訊
// info about current user
const user = os.userInfo();
console.log(user)

// 正常運行時間
// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
