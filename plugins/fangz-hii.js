import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './mp3/WhatsApp-Ptt-2021-07-14-at-18.12.33.opus'
conn.sendFile(m.chat, vn, './mp3/WhatsApp-Ptt-2021-07-14-at-18.12.33.opus.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /^(hi|hii|hiii|hi aine|hii aine|hiii aine|hy|halo|hallo|helo|hello|hy aine|mas pian|bot|Bot|pian)$/i
handler.command = new RegExp

handler.fail = null

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

export default handler 
