import fs from 'fs'
import fetch from 'node-fetch'


let handler = async (m, { conn, args, command }) => {
	let url = 'https://telegra.ph/file/4c87058d1b9fbb8f18c44.png'
	let text = ` 
═┅══ *SEWA* ══┅═
⫹⫺ *Hemat:* _5k/grup (1 minggu)_
⫹⫺ *Normal:* _15k/grup (1 bulan)_
⫹⫺ *Standar:* _30k/grup (2 bulan)_
⫹⫺ *Pro:* _35k/grup (4 bulan)_                                                      
⫹⫺ *Vip:* _65k/grup (6 bulan & 1 bulan *Premium*)_
═┅══ *PREMIUM* ══┅═
⫹⫺ *Hemat:* _5k (1 minggu)_
⫹⫺ *Normal:* _20k (1 bulan)_
⫹⫺ *Pro:* _40k (4 bulan)_
⫹⫺ *Vip:* _50k (8 bulan)_                                               
⫹⫺ *Permanent:* = _999k (Unlimited)_
═┅══ *INFO* ══┅═
 Ingin sewa BOT untuk Grup kalian? atau Upgrade Premium agar dapat akses ke semua fitur?
Kalian bisa Chat nomor Owner BOT dan konfirmasi pembayarannya
═┅══ *PAYMENT* ══┅═
• *Pulsa:* [085954184111]
• *Dana:* [085954184111]
═┅══ *OWNER* ══┅═
*ᴄᴏɴᴛᴀᴄᴛ ᴜꜱ*
╰►  • wa.me/6285954184111 `.trim()

let ftoko = { 
     key: { 
     fromMe: false, 
     participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net', 
     remoteJid: 'status@broadcast', 
   }, 
   message: { 
   "productMessage": { 
   "product": { 
   "productImage":{ 
   "mimetype": "image/jpeg", 
   "jpegThumbnail": await (await fetch('https://telegra.ph/file/8f729fca4c6096d469664.jpg')).buffer(), //Gambarnye
     }, 
   "title": titlebot,
   "description": 'Make doang kaga donasi',
   "currencyCode": "US", 
   "priceAmount1000": "100", 
   "retailerId": wm, 
   "productImageCount": 999 
         }, 
   "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net` 
   } 
   } 
   } 

 await await conn.sendButton(m.chat, '─────[ *DONASI* ]─────', text, [['OWNER', '.owner'], ['Menu', '.menu']], m, { 
     quoted: ftoko, 
     contextInfo: { externalAdReply: { showAdAttribution: true,
             title: 'Cute IQ-MD Testing Project By Ziv San', 
             body: `ok`, 
             description: `iya`, 
             mediaType: 2, 
           thumbnail: fs.readFileSync('darkness.jpg'),
          mediaUrl: `https://www.facebook.com/Inunime-107082474576049/`
         } 
      } 
     })
}
handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i
export default handler