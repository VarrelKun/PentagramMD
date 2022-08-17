import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './mp3/WhatsApp-Audio-2021-03-02-at-20.52.32-_2_.opus'
conn.sendFile(m.chat, vn, './mp3/WhatsApp-Audio-2021-03-02-at-20.52.32-_2_.opus', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /^(fangz)$/i
handler.command = new RegExp

handler.fail = null

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

export default handler 
