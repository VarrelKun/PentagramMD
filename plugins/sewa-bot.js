let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} SEWA ${htka}`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Klick untuk sewa', url: 'https://wa.me/p/5447696441957458/62895394988123'}}, //GAUSAH DI GANTI, BIAR NGARAH KE LIST SEWA NYA!!
    {index: 4, quickReplyButton: {displayText: '🗳️UPGRADE PREMIUM', id: '.upprem'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^belibot$/i
handler.private = true

export default handler