// 👈 You Can change this your choice 
// 👈 You Can change this your choice 
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
// 👈 You Can change this your choice
global.emoji01 = ['🐼'] // 👈 Enter your Emoji 
global.emoji02 = ['🦋'] //👈 Enter your Emoji
global.notice = ` *Hi 🥰 I m*
*Ameer Ξ*
*I am 12 years old ...*
*From Palestine*
*I am a Learning.*
*Not more..*
*Also I am Student*
*Subscribe to my Youtube Chanel - https://www.youtube.com/channel/UC7HMNAD9VqunnGT03Ajd2rg*`  // 👈 Enter Your details and Social Media Links and Anything
global.owner =  ['0502930010'] //👈  Enter Your number
global.premium =  ['0502930010'] //👈  Enter Your number
global.ownernomer = '0502930010' //👈  Enter Your number
global.ownername = 'Ameer' //👈 Enter Your name
global.botname = 'Muslim ＢＯＴ' //👈 Enter Your Bot name
global.footer = '© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖡𝗒 Muslim 𝖡𝗈𝗍' //👈 Enter Your Name
global.ig = 'https://pastebin.com/VihcGUpA' // 👈 You Can change this your choice
global.region = 'Palestine' // 👈 You Can change this your choice
global.sc = 'https://pastebin.com/VihcGUpA'
global.fbt = 'https://www.youtube.com/channel/UC7HMNAD9VqunnGT03Ajd2rg' // 👈 Enter (Subscribe/Follow/Like now)
global.myweb = 'https://www.youtube.com/channel/UC7HMNAD9VqunnGT03Ajd2rg'// 👈 Enter your Social media link to follow now button
global.welcome = '*🦋 اهلا وسهلا بك 🦋*' // 👈 You Can change this your choice
global.bye = '*🐼 مع السلامة 🐼*' // 👈 You Can change this your choice
global.packname = 'GARFIELD-BOTv8'  // 👈 You Can change this your choice 
global.author = 'ISLAM DEVELOPMENT' // 👈 You Can change this your choice 
global.sessionName = 'session' // 👈 You Can change this your choice
global.prefa = ['','!','.','🛰️','⚓','🍎'] // 👈 You Can change this your choice
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png' 
global.spoty = 'https://i.postimg.cc/HW2YbN1b/Pics-Art-22-08-09-16-12-14-489.png'
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.sp = '⭔'
global.mess = {
    success: '🦋 تم 🦋', // 👈 You Can change this your choice
    admin: '🕵🏼‍♂️ هذه الخاصية فقط للمسؤولين 🕵🏼‍♂️', // 👈 You Can change this your choice
    botAdmin: '🤖 يجب ان يكون البوت مسؤولا لتنفيذ الامر 🤖', // 👈 You Can change this your choice
    owner: '👑 هذه الخاصية فقط لصاحب البوت 👑', // 👈 You Can change this your choice
    group: '👥 تستخدم هذه الخاصية فقط في الجروبات 👥', // 👈 You Can change this your choice
    private: '🛡️ هذه الخاصية تستخدم فقط في الخاص 🛡️', // 👈 You Can change this your choice
    bot: 'This Feature Is Only For Bot', // 👈 You Can change this your choice
    wait: '```⏳ ...الرجاء الإنتظار... ⏳```', // 👈 You Can change this your choice
    error: 'Error! Maybe Api Key Is Expired🤔!', // 👈 You Can change this your choice
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
} // 👈 You Can change this your choice
/// Do Not Change 👇 
global.limitAwal = "99999999999999999"
global.lolkey = "835641f3d2d1b6971e1fd132"
global.xteam = "apivproject"
global.xcodeapi = "5S3epf7hC2"
global.dapaapi = "piceg"
global.sankey = "sanuwa"
global.xteamkey = "nandowangy"
global.carkey = "cakrayp24Q6"
global.violkey = "beta"
global.HunterApi = "FuckBitch"
global.neokey = "V8qnSaTq"
global.riy = "RiyGanz"

    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
