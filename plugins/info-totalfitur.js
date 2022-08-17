import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `Total Fitur Bot Saat ini: ${totalf}\n`,wm + '\n\n' + botdate, [['MENU','.menu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: totalf,
                        body: 'Bot Simpel By Fangz',          previewType: 0,
                        sourceUrl: sgh
                      }}
})
}


handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
export default handler