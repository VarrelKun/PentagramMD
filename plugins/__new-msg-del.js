let handler = async (m, { text, usedPrefix, command }) => {
	if (!text) throw `gunakan *${usedPrefix}listmsg* untuk melihat daftar pesan yg tersimpan.`
	let msgs = db.data.msgs
	if (!(text in msgs)) throw `'${text}' tidak terdaftar di daftar pesan.`
	delete msgs[text]
	m.reply(`\n  berhasil menghapus pesan di daftar pesan dengan nama '${text}'.\n`)
}
handler.help = ['msg'].map(v => 'del' + v + ' <teks>')
handler.tags = ['database']
handler.command = /^delmsg$/i
handler.premium = true
export default handler