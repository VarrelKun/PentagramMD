import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
	conn.sendButton(m.chat, './media/virgam.jpeg', wm, url, [['𝐏𝐄𝐍𝐓𝐀𝐆𝐑𝐀𝐌','.menu']],m)
}
handler.command = /^(virgam)$/i
handler.tags = ['virus']
handler.help = ['virgam']
export default handler
