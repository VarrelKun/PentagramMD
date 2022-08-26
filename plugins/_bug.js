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
    {index: 1, quickReplyButton: {displayText: '𝐏𝐄𝐍𝐓𝐀𝐆𝐑𝐀𝐌', rowId: 'bug1nih'}},
    {index: 2, quickReplyButton: {displayText: '⛧𝐏𝐄𝐍𝐓𝐀𝐆𝐑𝐀𝐌⛧', rowId: 'bug2coy'}},
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
