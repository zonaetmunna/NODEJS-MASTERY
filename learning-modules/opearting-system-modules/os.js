// node.js operating system module
const os = require("os");

// os.arch()
const architecture = os.arch();
console.log("Operating System Architecture:", architecture);

// os.cpus
const cpus = os.cpus();
console.log("CPU Information:", cpus);

// os.freemem
const freeMemory = os.freemem();
console.log("Free System Memory:", freeMemory, "bytes");

// os.totalMem()
const totalMemory = os.totalmem();
console.log("Total System Memory:", totalMemory, "bytes");

// os.hostname()
const hostname = os.hostname();
console.log("Hostname:", hostname);

// os.platform()
const platform = os.platform();
console.log("Operating System Platform:", platform);

// os.release()
const release = os.release();
console.log("Operating System Release:", release);

// os.tmpdir()
const tmpDir = os.tmpdir();
console.log("Temporary Directory:", tmpDir);

// os.type
const osType = os.type();
console.log("Operating System Type:", osType);

// os.userInfo()
const userInfo = os.userInfo();
// const userInfo = os.userInfo({ encoding: 'utf8', showHidden: false });

console.log("User Information:", userInfo);

// os.networkInterfaces()
const networkInterfaces = os.networkInterfaces();
console.log("Network Interfaces:", networkInterfaces);

// os.constants
console.log("Error Codes:", os.constants.errno);
console.log("Signals:", os.constants.signals);
//or this part
const errorName = "EACCES";
const errorCode = os.constants.errno[errorName];
console.log(`Error Code for ${errorName}: ${errorCode}`);
