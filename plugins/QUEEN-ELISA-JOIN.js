const config = require('../config')
const { cmd, commands } = require('../command')
      cmd({ 
           pattern: "join",
            desc: "joins group by link",
            category: "main",
            use: '<group link.>',
        },
       async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if(!isOwner && !isSachintha && !isSavi && !isSadas && !isMani && !isMe)return;
    try{  if (!q) return reply(`*_Please give me Query_*`);
            if (!q.split(" ")[0] && !q.split(" ")[0].includes("whatsapp.com"))
               reply("*_Link Invalid, Please Send a valid whatsapp Group Link!_*");
            let result = q.split(" ")[0].split("https://chat.whatsapp.com/")[1];
            await conn.groupAcceptInvite(result)
                .then((res) => reply("*_🟩Joined Group_*"))
                .catch((err) => reply("*_Error in Joining Group_*"));
} catch (e) {
reply('*Error !!*')
l(e)
}
})