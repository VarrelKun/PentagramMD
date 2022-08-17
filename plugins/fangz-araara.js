import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './mp3/WhatsApp-Audio-2021-06-21-at-11.33.19.opus'
conn.sendFile(m.chat, vn, './mp3/WhatsApp-Audio-2021-06-21-at-11.33.19.opus', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /^(ara ara)$/i
handler.command = new RegExp

handler.fail = null

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

export default handler 
