import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix: _p }) => {
let [number, name, pesan, boddy] = text.split `|`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

    if (!number) return conn.reply(m.chat, 'Format penggunaan salah!\n\nContoh :\n .menfes 6285xx|SecretName|message', m)
    if (!name) return conn.reply(m.chat, 'Format penggunaan salah!\n\nContoh :\n .menfes 6285xx|SecretName|message', m)
    if (!pesan) return conn.reply(m.chat, 'Format penggunaan salah!\n\nContoh :\n .menfes 6285xx|SecretName|message', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    
    let user = global.db.data.users[m.sender]

    let korban = `${number}`
    let from = `${name}`
    var nomor = m.sender
    let spam1 = `📩 ʜɪ ᴋᴀᴋ! ᴋᴀᴍᴜ ᴀᴅᴀ ᴩᴇꜱᴀɴ ʀᴀʜᴀꜱɪᴀ ᴅᴀʀɪ ꜱᴇꜱᴇᴏʀᴀɴɢ ɴɪʜ\n\n𝘿𝙖𝙧𝙞 : ${name}\n𝙋𝙚𝙨𝙖𝙣 : ${pesan}\n\n${global.wm}`

    await conn.sendButton(korban + '@s.whatsapp.net', spam1, botdate, [['DARI SIAPA?', '.gpls'],['MENU', '.menu']], m)

{

    let logs = ` ⚠️Berhasil mengirim pesan rahasia ke ${korban}`
    conn.reply(m.chat, logs, m)
}}
handler.help = ['menfes']
handler.tags = ['anonymous']
handler.command = /^(menfes|menfess)$/i
handler.private = true

handler.fail = null
handler.limit = false

export default handler
