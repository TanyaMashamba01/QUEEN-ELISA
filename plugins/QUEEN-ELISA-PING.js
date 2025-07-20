const settings = require('../settings');
const { cmd, commands } = require('../command');

cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "group",
    react: "🍂",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {  await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/vpnq7.mp3' }, // Audio URL
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*👸PINGING...*' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `> *Q*J̸͟͞o̸͟͞s̸͟͞h̸͟͞u̸͟͞a̸͟͞m̸͟͞a̸͟͞m̸͟͞b̸͟͞o̸͟͞1 T̸͟͞e̸͟͞c̸͟͞h̸͟͞ A̸͟͞l̸͟͞i̸͟͞v̸͟͞e̸͟͞* SPEED: ${ping}ms*` }, { quoted: message })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
