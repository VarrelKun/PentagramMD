let handler = async (m, { conn }) => {
let info = `
*${htki} PENT-APK ${htka}*
          
 Kami Menyediakan Beberapa Aplikasi MOD Yang Bisa Kalian Pilih & Unduh.
          
  _Kalian Bisa Request Nambah Apk/Fitur Lainnya Ke Owner_
                  
–––––– *ᴋᴇʙɪᴊᴀᴋᴀɴ* ––––––
*📮Jangan Lupa Berdonasi :D*
`
const sections = [
   {
    title: `✃ APK`,
	rows: [
	    {title: "Alight Motion (MOD)", rowId: '.ammod', description: 'V 3.1.4 via Mediafire' },
	    {title: "Minecraft (PE)", rowId: '.mcpe', description: 'V 1.16.101 via Mediafire' },
	{title: "PSCC", rowId: '.pscc', description: 'Free Download via Mediafire' },
	{title: "Pixellab", rowId: '.pxlb', description: 'Android Apk For Editing/Design' },
	{title: "Kinemaster", rowId: '.kinemstr', description: 'Cocok buat lu pada yang ngedit anime' },
	]
    }, 
    
]

const listMessage = {
  text: info,
  footer: global.wm,
  title: null,
  buttonText: "LIST APK",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.command = /^apk$/i
handler.premium = false

export default handler