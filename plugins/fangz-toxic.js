import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './mp3/PTT-20220220-WA0414.opus'
conn.sendFile(m.chat, vn, './mp3/PTT-20220220-WA0414.opus', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /^anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole|asu$/i
handler.command = new RegExp

handler.fail = null

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

export default handler 
