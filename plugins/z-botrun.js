//HAYO MAU NGAPAIN :D 

import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, command }) => {
	let url = 'https://telegra.ph/file/27f8b54a27aefcd03116b.jpg'
	let text = `Nyari apa cuy?`
	
let buttonMessage= {
'document':{'url':sgc},
'mimetype':global.ddocx,
'fileName':'- - - - - SOURCE CODE - - - - -',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'externalAdReply':{
'showAdAttribution':true,
'mediaUrl':'',
'mediaType':2,
'previewType':'pdf',
'title':'Tap Here',
'body':'',
'thumbnail':await(await fetch(url)).buffer(),
'sourceUrl':'https://github.com/VarrelKun/PentagramMD'}},
'caption':text,
'footer':botdate,
'buttons':[
{'buttonId':'.donasi','buttonText':{'displayText':'ᴅᴏɴᴀsɪ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}

handler.command = ['sc']
export default handler
