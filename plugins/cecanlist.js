import axios from "axios"
import fetch from 'node-fetch'

let handler = async (m, {command, conn}) => {
	
	let tekk = `\`\`\`➩ Ini Pacar Owner >_< \`\`\` `
	
if (command == 'rccn') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/wallpaper/cecan?apikey=apirey`)
conn.sendButton(m.chat, tekk.trim(), author, haha.data, [[' Next', `/${command}`]], m)}
	
if (command == 'ind') {
let haha = await conn.getFile(`https://xpentabot.herokuapp.com/api/randomgambar/indo`)
conn.sendButton(m.chat, tekk.trim(), author, haha.data, [[' Next', `/${command}`]], m)}
	
if (command == 'jap') {
let haha = await conn.getFile(`https://xpentabot.herokuapp.com/api/randomgambar/jpn`)
conn.sendButton(m.chat, tekk.trim(), author, haha.data, [[' Next', `/${command}`]], m)}
	
if (command == 'chn') {
let haha = await conn.getFile(`https://xpentabot.herokuapp.com/api/randomgambar/china`)
conn.sendButton(m.chat, tekk.trim(), author, haha.data, [[' Next', `/${command}`]], m)}
	
if (command == 'kra') {
let haha = await conn.getFile(`https://xpentabot.herokuapp.com/api/randomgambar/korea`)
conn.sendButton(m.chat, tekk.trim(), author, haha.data, [[' Next', `/${command}`]], m)}
	

}
handler.command = /^(rccn|ind|jap|chn|kra)/i

handler.limit = 2
export default handler