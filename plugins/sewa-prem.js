let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} PREMIUM ${htka}
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Klick untuk berlangganan', url: 'https://wa.me/p/5240667609353116/6285954184111'}},
    {index: 4, quickReplyButton: {displayText: '🗳️SEWA BOT', id: '.belibot'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^(premium|beliprem)$/i
handler.private = true

export default handler