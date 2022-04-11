const {data} = require('./data');
const crypto = require('crypto');
const fs = require('fs');

let userdata= data("REC",2022,"BE");
const password = crypto.createHmac('sha256', "skdbf643yuEv#$").update('REC').digest('hex');
userdata.userId = 2567;
userdata.userName = "MADHU";
userdata.password = password;
fs.writeFileSync('./message.txt',JSON.stringify(userdata));
console.log(userdata);
