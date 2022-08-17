let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `〔 Dᴏɴ'ᴛ ғᴏʀɢᴇᴛ Dᴏɴᴀᴛɪᴏɴ 〕

››╭─〘 *Donasi* 〙
╭╡📮: Donasi ngab jgan gunain doang.
│┝‷∞ *Pulsa(XL):* [${global.ppulsa}]
│┝‷∞ *Dana:* [${global.pdana}]
│╰───···─────
│⁺𖤐 Ingin Donasi? Chat nomor owner
╰──────────···───╮
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '🧸 YouTube 🧸', url: 'https://youtube.com/nxvall'}},
    {index: 2, urlButton: {displayText: '💬 Instagram 💬', url: sig}},
    {index: 3, urlButton: {displayText: '🌎 Official Group 🌎', url: sgc}},
    {index: 4, quickReplyButton: {displayText: '🥞Menu', id: '.menu'}},
    {index: 5, quickReplyButton: {displayText: '🌸Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
