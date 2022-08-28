let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *DOWNLOAD* ${htka}

     Alight Motion MOD ( via Mediafire )
    
    --------APK INFO--------
    
*${htjava} Version:* 3.1.4
*${htjava} Link:* http://www.mediafire.com/file/tpxj2grwf8imp6i/Alight_Motion_V.3.1.4_%2528Mod%2529_By_bilqis_neha.apk/file
*${htjava} Filesize:* 54mb
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '⎙ Download ⎙', id: '.mediafire http://www.mediafire.com/file/tpxj2grwf8imp6i/Alight_Motion_V.3.1.4_%2528Mod%2529_By_bilqis_neha.apk/file'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
mediaUrl: '',
mediaType: 2,
description: 'anu',
thumbnail: fs.readFileSync("./thumbnail.jpg"),
sourceUrl: sig
}
conn.sendMessage(m.chat, tm, m)
}

handler.command = /^ammod$/i

export default handler