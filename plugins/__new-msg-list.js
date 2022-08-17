let handler = async (m, { conn, usedPrefix, command }) => {
	let msgs = db.data.msgs
	let msg = (Object.entries(msgs).map(([nama, isi]) => { return { nama, ...isi } })).map(v => v.nama)
	let row = Object.keys(msg).map(v => ({
		title: msg[v],
		description: '',
		rowId: msg[v]
	}))
	let button = {
		buttonText: 'LIST PESAN',
		description: 'Berikut daftar pesan yg terdaftar di database.',
		footerText: wm
	}
	if (msg[0]) return await conn.sendListM(m.chat, button, row, m)
	else throw `\nbelum ada pesan yg terdaftar di database.\nketik *${usedPrefix + command} <teks>* untuk menambahkan daftar pesan.\n`
}
handler.help = ['msg'].map(v => 'list' + v)
handler.tags = ['database']
handler.command = /^list(msg|pesan)?$/i

export default handler


/**
 * Jangan di hapus
 *
 * Buatan FokusDotId (Fokus ID)
 * https://github.com/fokusdotid
 *
 */