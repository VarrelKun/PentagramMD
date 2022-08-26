let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 Donasi • Pulsa 」
│ • *XL:* [${global.ppulsa}]
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Dana:* [${global.pdana}]
❏────
`
const templateButtons = [
    {index: 1, quickReplyButton: {displayText: 'Menu', id: 'bug1nih'}},
    {index: 2, quickReplyButton: {displayText: 'Owner', id: 'bug2coy'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['bugb']
handler.tags = ['virus']
handler.command = /^bugb$/i

export default handler
