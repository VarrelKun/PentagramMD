import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
	let url = paptt[Math.floor(Math.random() * paptt.length)]
	conn.sendButton(m.chat, 'Tch, dasar sangean', wm, url, [['Next','.paptt']],m)
}
handler.command = /^(paptt)$/i
handler.help = ['paptt']
export default handler

global.paptt = [
 "https://telegra.ph/file/5c62d66881100db561c9f.mp4",
 "https://telegra.ph/file/a5730f376956d82f9689c.jpg",
 "https://telegra.ph/file/8fb304f891b9827fa88a5.jpg",
 "https://telegra.ph/file/29146a2c1a9836c01f5a3.jpg",
 "https://telegra.ph/file/85883c0024081ffb551b8.jpg",
 "https://telegra.ph/file/d8b79ac5e98796efd9d7d.jpg",
 "https://telegra.ph/file/267744a1a8c897b1636b9.jpg",
 ]
