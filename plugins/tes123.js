let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
Yoo!
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '  ', 'status@broadcast')
}
handler.customPrefix = /^(bot|hi|p|tes|test|hii)$/i
handler.command = new RegExp

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler 
