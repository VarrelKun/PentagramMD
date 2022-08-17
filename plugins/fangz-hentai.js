import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './mp3/WhatsApp-Audio-2021-02-19-at-23.33.29.opus'
conn.sendFile(m.chat, vn, './mp3/WhatsApp-Audio-2021-02-19-at-23.33.29.opus.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /^(hentai)$/i
handler.command = new RegExp

handler.fail = null

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

export default handler 
