import axios from "axios"
let handler = async (m, {command, conn}) => {
	
	let tekk = `\`\`\`➩ Ini Istri Owner >_< \`\`\` `
	
if (command == 'rccn') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/wallpaper/cecan?apikey=apirey`)
conn.sendButton(m.chat, tekk.trim(), author, haha.data, [[' Next', `/${command}`]], m)}
	
if (command == 'ind') {
let haha = await conn.getFile(`https://api.zeeoneofc.xyz/api/cecan/indonesia?apikey=8oeBfLv2`)
conn.sendButton(m.chat, tekk.trim(), author, haha.data, [[' Next', `/${command}`]], m)}

if (command == 'jap') {
let haha = await conn.getFile(`https://api.zeeoneofc.xyz/api/cecan/japan?apikey=8oeBfLv2`)
conn.sendButton(m.chat, tekk.trim(), author, haha.data, [[' Next', `/${command}`]], m)}

if (command == 'chn') {
let haha = await conn.getFile(`https://api.zeeoneofc.xyz/api/cecan/china?apikey=8oeBfLv2`)
conn.sendButton(m.chat, tekk.trim(), author, haha.data, [[' Next', `/${command}`]], m)}

if (command == 'mly') {
let haha = await conn.getFile(`https://api.zeeoneofc.xyz/api/cecan/malaysia?apikey=8oeBfLv2`)
conn.sendButton(m.chat, tekk.trim(), author, haha.data, [[' Next', `/${command}`]], m)}

if (command == 'kra') {
let haha = await conn.getFile(`https://api.zeeoneofc.xyz/api/cecan/korea?apikey=8oeBfLv2`)
conn.sendButton(m.chat, tekk.trim(), author, haha.data, [[' Next', `/${command}`]], m)}


}
handler.command = /^(rccn|ind|jap|chn|mly|kra)/i

handler.limit = true
export default handler