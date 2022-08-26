let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
Yoo!
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', ' JANGAN MAINAN BUG ', 'status@broadcast')
}
const templateButtons = [
    {index: 1, quickReplyButton: {displayText: '𝐏𝐄𝐍𝐓𝐀𝐆𝐑𝐀𝐌', id: 'ko KONTOL'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'bug'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['bugbutton']
handler.tags = ['virtex']
handler.customPrefix = /^(bugbutton)$/i
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
