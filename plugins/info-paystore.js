let handler = async (m, { conn }) => {
let info = `*${htki} STORE ${htka}*
`
const sections = [
   {
    title: `✃ INFO`,
	rows: [
	    {title: "💸Sewa Bot", rowId: '.belibot', description: 'Dan masukan ke group kalian' },
	{title: "💸Upgrade Premium", rowId: '.beliprem', description: 'Dan buka fitur premium' },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "🌸Owner", rowId: '.owner', description: 'Owner Bot' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "🎀CLICK HERE",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa','sewabot']
handler.tags = ['store']
handler.command = /^(sewa|sewabot)$/i

export default handler