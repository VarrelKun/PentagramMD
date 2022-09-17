let handler = async (m, { conn, usedPrefix }) => { 
      conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 15339800,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `
╭─「 Donasi 」
│ • XL [085954184111]
│ • Dana  [085954184111]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6285954184111
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler 
