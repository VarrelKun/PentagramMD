import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `*🎏 Aktif Kak*\n`,wm + '\n\n' + botdate, [['🗳️MENU','.menu'],['🔭DONASI','.donasi']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'BOT AKTIF',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: snh
                      }}
})
}

handler.help = ['tesbot']
handler.tags = ['owner']
handler.command = ['tesbot']
handler.owner = true
export default handler
