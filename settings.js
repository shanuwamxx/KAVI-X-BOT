const fs = require('fs')
const chalk = require('chalk')

global.sessionID = process.env.SESSIONID || "KAVI-X-SESSION-ID~IEBU2T5Z#ALYgxGTH7whUt4vWmqjJ_UTgPTtAPfMbN0UQLIBIorI"
global.botname = process.env.BOTNAME || "SHANUWA MD"
global.ownernumber = process.env.OWNERNUMBER || "94789994798"
global.ownername = process.env.OWNERNAME || "Cyber shanu"
global.websitex = process.env.WEBSITEX || "https://kavi-x-bot-login.up.railway.app/"
global.wagc = process.env.WAGC || "https://chat.whatsapp.com/CG9f0paHJzwDImXiydfuht"
global.botscript = process.env.BOTSCRIPT || "https://github.com/KaviDeveloperSe/KAVI-X-BOT"
global.packname = process.env.PACKNAME || "SHANUWA MD"
global.author = process.env.AUTHOR || "Cyber SHANU"
global.creator = process.env.CREATOR || "94789994798@s.whatsapp.net"
global.botprefix = process.env.BOTPREFIX || "."
global.restart = process.env.RESTART || true
global.mongoDB = process.env.MONGODB_URI || "mongodb+srv://shanukalithikshana1:lbtgESXKLgT7YLOS@cluster0.v4ilb0t.mongodb.net/"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
