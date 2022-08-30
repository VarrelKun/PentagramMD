import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix: _p }) => {
let [number, pesan, boddy] = text.split `|`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

    if (!number) return conn.reply(m.chat, 'Contoh Penggunaan *.menfess 6287xxx|pesanmu* ', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    
    let user = global.db.data.users[m.sender]

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `𝐇𝐚𝐢 𝐤𝐚𝐤, 𝐚𝐝𝐚 𝐩𝐞𝐬𝐚𝐧 𝐫𝐚𝐡𝐚𝐬𝐢𝐚 𝐧𝐢𝐡!\n\nDari : Seseorang\nKe : Kamu :3\nPesan : ${pesan}\n\n${global.wm}`
  
    await conn.reply(korban + '@s.whatsapp.net', spam1, wm + '\n\n' + botdate, thumb, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    description: 'anu',
    title: bottime,
    body: 'NV Gang',          previewType: 0,
    thumbnail: fs.readFileSync("./thumbnail.jpg"),
    sourceUrl: sig
      }}
     })        

{
    let logs = `[!] Berhasil mengirim pesan wa ke nomor ${korban}`
    conn.reply(m.chat, logs, m)
}}
handler.help = ['tai']
handler.tags = ['nocategory']
handler.command = /^(tai)$/i
handler.owner = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

export default handler
