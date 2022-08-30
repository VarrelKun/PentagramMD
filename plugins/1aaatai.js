import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let [nama, number, pesan] = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ɴᴀᴍᴀᴍᴜ'
let handler = async(m, { conn, text, usedPrefix: _p }) => {

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    
    let user = global.db.data.users[m.sender]

    let korban = `${number}`
    let nama = `${name}`
    var nomor = m.sender
    let spam1 = `「 *KANNA* 」\n\nDari : ${nama}\nKe : wa.me/${korban}\nPesan : ${pesan}\n\n${global.wm}`

    await conn.reply(korban + '@s.whatsapp.net', spam1, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: global.wm, 
    body: 'Hai,Ini Balasan Pesan Dari Owner',  
    sourceUrl: sgc, 
    thumbnail: fs.readFileSync('./thumbnail.jpg')
      }}
     })    

{

    let logs = `[!] Berhasil mengirim pesan wa ke nomor ${korban}`
    conn.reply(m.chat, logs, m)
}}
handler.command = /^(tai)$/i
handler.owner = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

export default handler
