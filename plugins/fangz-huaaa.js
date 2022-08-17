import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './mp3/WhatsApp-Audio-2021-03-03-at-00.32.11.opus'
conn.sendFile(m.chat, vn, './mp3/WhatsApp-Audio-2021-03-03-at-00.32.11.opus', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /^(hua|huaa|huaaa|huaaaa|huaaaaa|huua|huuaa|huuaaa|huuaaaa|huuua|huuuaa|huuuaaa|huuuaaaa)$/i
handler.command = new RegExp

handler.fail = null

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

export default handler 
