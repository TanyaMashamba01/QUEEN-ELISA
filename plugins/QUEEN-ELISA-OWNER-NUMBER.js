const { cmd } = require('../command');
const settings = require('../settings');

cmd({
    pattern: "owner",
    react: "🥋🇿🇼", 
    desc: "Get owner number",
    category: "owner",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        const ownerNumber = settings.OWNER_NUMBER; // Fetch owner number from config
        const ownerName = settings.OWNER_NAME;     // Fetch owner name from config

        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +  
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` + 
                      'END:VCARD';

        // Send the vCard
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

        // Send the owner contact message with image and audio
        await conn.sendMessage(from, {
            image: { url: 'https://i.postimg.cc/4NdSqms8/MidKing.jpg' }, // Image URL from your request
            caption: `╭━━〔 **J̸͟͞o̸͟͞s̸͟͞h̸͟͞u̸͟͞a̸͟͞m̸͟͞a̸͟͞m̸͟͞b̸͟͞o̸͟͞1 T̸͟͞e̸͟͞c̸͟͞h̸͟͞ A̸͟͞l̸͟͞i̸͟͞v̸͟͞e̸͟͞** 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *Here is the owner details*
┃◈┃•😍*Name* - ${ownerName}
┃◈┃•👸*Number* ${ownerNumber}
┃◈┃•📊*Version*: 5.0.0 Beta
┃◈└───────────┈⊷
╰──────────────┈⊷
> ©made by *J̸͟͞o̸͟͞s̸͟͞h̸͟͞u̸͟͞a̸͟͞m̸͟͞a̸͟͞m̸͟͞b̸͟͞o̸͟͞1 T̸͟͞e̸͟͞c̸͟͞h̸͟͞ A̸͟͞l̸͟͞i̸͟͞v̸͟͞e̸͟͞* whatsapp bot 2025`, // Display the owner's details
            contextInfo: {
                mentionedJid: [`${ownerNumber.replace('+', '')}@s.whatsapp.net`], 
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363347365643318@newsletter',
                    newsletterName: '*J̸͟͞o̸͟͞s̸͟͞h̸͟͞u̸͟͞a̸͟͞m̸͟͞a̸͟͞m̸͟͞b̸͟͞o̸͟͞1 T̸͟͞e̸͟͞c̸͟͞h̸͟͞ A̸͟͞l̸͟͞i̸͟͞v̸͟͞e̸͟͞*',
                    serverMessageId: 143
                }            
            }
        }, { quoted: mek });

        // Send audio as per your request
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/vpnq7.mp3' }, // Audio URL
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        reply(`An error occurred: ${error.message}`);
    }
});
