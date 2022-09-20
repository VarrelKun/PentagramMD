import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix: _p }) => {
let [number, name, pesan, boddy] = text.split `|`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

    if (!number) return conn.reply(m.chat, 'Cara penggunaan!\n\nContoh :\n .menfes 6285xx|SecretName|message\n\n📣note : nomor target tidak boleh memiliki tanda (+ dan -)\n\nContoh: 6285976160666', m)
    if (!number) throw `Format nomor salah!`
    if (!name) return conn.reply(m.chat, 'Format penggunaan salah!\n\nContoh :\n .menfes 6285xx|SecretName|message', m)
    if (!pesan) return conn.reply(m.chat, 'Format penggunaan salah!\n\nContoh :\n .menfes 6285xx|SecretName|message', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    
    let user = global.db.data.users[m.sender]

    let korban = `${number}`
    let from = `${name}`
    var nomor = m.sender
    let spam1 = `📩 ʜɪ ᴋᴀᴋ! ᴋᴀᴍᴜ ᴀᴅᴀ ᴩᴇꜱᴀɴ ʀᴀʜᴀꜱɪᴀ ᴅᴀʀɪ ꜱᴇꜱᴇᴏʀᴀɴɢ ɴɪʜ\n\n𝘿𝙖𝙧𝙞 : ${name}\n𝙋𝙚𝙨𝙖𝙣 : ${pesan}`
    let foot = `Kamu blom bisa membalas pesan menfes ini ke pengirim, jadi ss aja buat SW siapa tau orang yg ngirim ngaku.\n\nKalo mau gunain fiturnya tinggal ketik .𝙢𝙚𝙣𝙛𝙚𝙨`

    const templateButtons = [
    {index: 1, quickReplyButton: {displayText: 'MENFES', id: '.menfes'}},
]
let tm = {
text: spam1,
footer: foot,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(korban + '@s.whatsapp.net', tm, m)

{

    let logs = ` ⚠️Berhasil mengirim pesan rahasia ke ${korban}`
    conn.sendButton(m.chat, logs, botdate, [['Menu', '.menu']], m)
}}
handler.help = ['menfes']
handler.tags = ['anonymous']
handler.command = /^(menfes|menfess)$/i
handler.private = true

handler.fail = null
handler.limit = false

export default handler
