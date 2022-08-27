import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix: _p }) => {
let [number, pesan, boddy] = text.split `|`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

    if (!number) return conn.reply(m.chat, 'Contoh Penggunaan *.menfess 6287855823556|pesanmu* ', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    
    let user = global.db.data.users[m.sender]

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `𝐇𝐚𝐢 𝐤𝐚𝐤, 𝐚𝐝𝐚 𝐩𝐞𝐬𝐚𝐧 𝐫𝐚𝐡𝐚𝐬𝐢𝐚 𝐧𝐢𝐡!\n\nDari : Seseorang\nKe : Kamu :3\nPesan : ${pesan}\n\n${global.wm}`
  
    conn.sendButton(m.chat, spam1, wm, [['MENU','.menu']],m)
    

{

    let logs = `[!] Berhasil mengirim pesan wa ke nomor ${korban}`
    conn.reply(m.chat, logs, m)
}}
habdler.help = ['menfess']
handler.tags = ['anonymous']
handler.command = /^(menfess|mbalas)$/i
handler.owner = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

export default handler
