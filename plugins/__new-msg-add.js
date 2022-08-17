const { proto } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, text, command, usedPrefix }) => {
	let M = proto.WebMessageInfo;
	if (!m.quoted) throw `balas pesan dengan perintah *${usedPrefix + command}*`;
	if (!text) throw `penggunaan: ${usedPrefix + command} <teks>\n\ncontoh:\n${usedPrefix + command} tes`;
	let msgs = db.data.msgs
	if (text in msgs) throw `'${text}' telah terdaftar di database!`
	msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
	m.reply(`berhasil menambahkan ${text} ke database.\n\nakses dengan mengetik namanya`.trim())
}
handler.help = ['msg'].map(v => 'add' + v + ' <teks>')
handler.tags = ['database']
handler.command = /^addmsg$/i
handler.premium = true
export default handler