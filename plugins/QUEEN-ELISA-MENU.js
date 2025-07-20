const settings = require('../settings')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "menu",
    desc: "To get the menu.",
    react: "😚",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{  await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/ftbee0.mp3' }, // Audio URL
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

let menu = {
youtube: '',
mediadownload: '',
search: '',
convert: '',
group: '',
owner: '',

};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `●●►.${commands[i].pattern}\n`;
 }
}

let madeMenu = `
.........․⁀⸱⁀⸱︵⸌⸃૰⳹․👸․⳼૰⸂⸍︵⸱⁀⸱⁀․........
𔓕꯭  ꯭ 𓏲꯭֟፝੭ ꯭☘𝙉3𝙩𝙆𝙞𝙣𝙜 𝙈𝘿☘ 𓏲꯭֟፝੭ ꯭  ꯭𔓕
▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭
─────────────────
▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭
╭───────────────╮
├ ⏳ *𝗥𝘂𝗻𝘁𝗶𝗺𝗲:* ${runtime(process.uptime())}
├ 🚀 *Version:* ${require("../package.json").version}
├ 👤 *𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲:* ☘𝙉3𝙩𝙆𝙞𝙣𝙜 𝙈𝘿☘ DEV
├ 📞 *𝗢𝘄𝗻𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿:* ${settings.BOT_NUMBER}
└ ⚙️ Mode : *[${settings.MODE}]*
╰───────────────╯
▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭
─────────────────
.........․⁀⸱⁀⸱︵⸌⸃૰⳹․👸․⳼૰⸂⸍︵⸱⁀⸱⁀․........
𔓕꯭  ꯭ 𓏲꯭֟፝੭ ꯭YOUTUBE MENU 𓏲꯭֟፝੭ ꯭  ꯭𔓕
▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭
${menu.youtube}
▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭
─────────────────
.........․⁀⸱⁀⸱︵⸌⸃૰⳹․👸․⳼૰⸂⸍︵⸱⁀⸱⁀․........
𔓕꯭  ꯭ 𓏲꯭֟፝੭ ꯭DOWNLOAD MENU 𓏲꯭֟፝੭ ꯭  ꯭𔓕
▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭
${menu.download}
▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭
─────────────────
.........․⁀⸱⁀⸱︵⸌⸃૰⳹․👸․⳼૰⸂⸍︵⸱⁀⸱⁀․........
𔓕꯭  ꯭ 𓏲꯭֟፝੭ ꯭SEARCH MENU 𓏲꯭֟፝੭ ꯭  ꯭𔓕
▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭
${menu.search}
▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭
─────────────────
.........․⁀⸱⁀⸱︵⸌⸃૰⳹․👸․⳼૰⸂⸍︵⸱⁀⸱⁀․........
𔓕꯭  ꯭ 𓏲꯭֟፝੭ ꯭CONVERT MENU 𓏲꯭֟፝੭ ꯭  ꯭𔓕
▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭
${menu.convert}
▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭
─────────────────
.........․⁀⸱⁀⸱︵⸌⸃૰⳹․👸․⳼૰⸂⸍︵⸱⁀⸱⁀․........
𔓕꯭  ꯭ 𓏲꯭֟፝੭ ꯭GROUP MENU 𓏲꯭֟፝੭ ꯭  ꯭𔓕
▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭
${menu.group}
▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭
─────────────────
.........․⁀⸱⁀⸱︵⸌⸃૰⳹․👸․⳼૰⸂⸍︵⸱⁀⸱⁀․........
𔓕꯭  ꯭ 𓏲꯭֟፝੭ ꯭OWNER MENU 𓏲꯭֟፝੭ ꯭  ꯭𔓕
▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭
${menu.owner}
▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭͞▬͞▭
─────────────────
*©Made by ☘𝙉3𝙩𝙆𝙞𝙣𝙜 𝙈𝘿☘ whatsapp bot 2025* 
💻 *GitHub:* github.com/Joshuamambo1/QUEEN-ELISA
`
return await conn.sendMessage(from,{video: {url: settings.ALIVE_VIDEO},caption:madeMenu},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})


