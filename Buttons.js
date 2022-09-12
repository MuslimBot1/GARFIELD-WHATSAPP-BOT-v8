//Coded by Tharindu Liyanage
// Edit This File 
const fs = require('fs')
const chalk = require('chalk')
// You can Change this Buttons
// 👈 You Can change this your choice
global.list = ('🧬 قائمة القوائم 🧬')
global.allmenu = ('🎉 كل القوائم 🎉')
global.script = ('Script 🌈')
global.owner = ('👑 المسئول 👑')
global.deploy = ('📜 القوانين 📜')
global.project = ('📜 القوانين 📜')
global.donate = ('☣️ لا تضغط ☣️')
global.stop = ('🛑 إيقاف 🛑')
global.skip = ('⏩ تخطي ⏩')
global.thanks = ('*💙 الشكر 💙*')
// 👈 You Can change this your choice
global.nextimg = ('➡️ الصورة التالية ➡️')
global.audio = ('🎶 صوت 🎶')
global.video = ('📽 فيديو 📽')
global.yts = ('🌐 بحث يوتيوب 🌐')
global.play = ('🍿 بدأ 🍿')
// 👈 You Can change this your choice

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
