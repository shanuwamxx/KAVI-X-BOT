const fs = require('fs')
const chalk = require('chalk')

global.sessionID = process.env.SESSIONID || "KAVI-X-SESSION-ID~cdwGnCaL#juQRvfYH_zLssWofeLAwAHtxiKQ8cp-YTAEkJfNWmTg"
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
global.mongoDB = process.env.MONGODB_URI || "mongodb+srv://ketkshqAqjXygEF5:ketkshqAqjXygEF5@freeuri.dmkyoml.mongodb.net/akilapathum-18:24-0788364308?retryWrites=true&w=majority&appName=freeuri"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
