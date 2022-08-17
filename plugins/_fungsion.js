let handler  = async (m, { conn, usedPrefix }) => { 
	conn.sendButton(m.chat, `My Name is Fangz!`.trim(), `${wm2}`, [['🌸 Menu', '.m']], m)
	}

handler.command = /^(nameown)$/i

export default handler 

let wm2 = global.wm2


//PERCOBAAN