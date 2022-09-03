import axios from "axios"
let handler = async (m, {command, conn}) => {
	
	let tekk = `\`\`\`➩ Nih Ngabss\`\`\` `
	
if (command == 'satan') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/wallpaper/satanic?apikey=APIKEY`)
conn.sendButton(m.chat, tekk.trim(), author, haha.data, [[' Next', `/${command}`]], m)}
	
if (command == 'qtd') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/wallpaper/katakata?apikey=APIKEY`)
conn.sendButton(m.chat, tekk.trim(), author, haha.data, [[' Next', `/${command}`]], m)}

if (command == 'crtn') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/wallpaper/kartun?apikey=APIKEY`)
conn.sendButton(m.chat, tekk.trim(), author, haha.data, [[' Next', `/${command}`]], m)}

if (command == 'aes') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/wallpaper/aesthetic?apikey=APIKEY`)
conn.sendButton(m.chat, tekk.trim(), author, haha.data, [[' Next', `/${command}`]], m)}

}
handler.command = /^(satan|qtd|crtn|aes)/i

handler.limit = true
export default handler