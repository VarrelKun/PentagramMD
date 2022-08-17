let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { 
        'open': 'not_announcement',
        'close': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*Format salah! Contoh :*
  *${l}❌${r} ${usedPrefix + command} off*
  *${l}✅${r} ${usedPrefix + command} on*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['bot *on / off*']
handler.tags = ['admin','group']
handler.command = /^(modebot)$/i

handler.admin = true
handler.botAdmin = true

export default handler
