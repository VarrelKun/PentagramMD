let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
=> global.db.data.users[m.sender].money = Infinity
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*SUKSES CHEAT MONEY*', 'status@broadcast')
}
handler.command = /^(cheatuang)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler 
