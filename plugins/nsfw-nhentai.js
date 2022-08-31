import fetch from 'node-fetch'
import { extractImageThumb } from '@adiwajshing/baileys'

let handler = async (m, { conn, args }) => {
	let code = (args[0] || '').replace(/\D/g, '')
	if (!code) throw 'Input code' 
	await m.reply('_In progress, please wait..._')
	let res = await fetch('https://api.lolhuman.xyz/api/nhentaipdf/'+ code'?apikey=a70fe5fb01ea65b6bb350009')
	if (!res.ok) throw await res.statusText
	let json = await res.json()
	let buffer = await (await fetch('https://external-content.duckduckgo.com/iu/?u=' + json.result.pages[0])).buffer()
	let jpegThumbnail = await extractImageThumb(buffer)
	conn.sendMessage(m.chat, { document: { url: 'https://api.lolhuman.xyz/api/nhentaipdf/'+ code'?apikey=a70fe5fb01ea65b6bb350009'}, jpegThumbnail, fileName: json.result.title + '.pdf', mimetype: 'application/pdf' }, { quoted: m })
}
handler.help = ['nhentai']
handler.tags = ['nsfw']
handler.command = /^(nhentai)$/i

handler.limit = true

export default handler

//https://api.lolhuman.xyz/api/nhentaipdf/344253?apikey=a70fe5fb01ea65b6bb350009
