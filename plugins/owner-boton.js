let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply('*Sukses Menghidupkan FANGZ BOT ✅*')
}
handler.command = /^(boton)$/i
handler.owner = true

handler.group = true
handler.admin = true

export default handler