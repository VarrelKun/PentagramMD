import { promises } from 'fs' 
 import { join } from 'path' 
 import { xpRange } from '../lib/levelling.js' 
 let tags = { 
   'main': 'Main', 
   'game': 'Game', 
   'rpg': 'RPG Games', 
   'xp': 'Exp & Limit', 
   'sticker': 'Sticker', 
   'kerang': 'Kerang Ajaib', 
   'quotes': 'Quotes', 
   'admin': 'Admin', 
   'group': 'Group', 
   'premium': 'Premium', 
   'internet': 'Internet', 
   'anonymous': 'Anonymous Chat', 
   'nulis': 'MagerNulis & Logo', 
   'downloader': 'Downloader', 
   'tools': 'Tools', 
   'fun': 'Fun', 
   'database': 'Database', 
   'vote': 'Voting', 
   'absen': 'Absen', 
   'quran': 'Al Qur\'an', 
   'jadibot': 'Jadi Bot', 
   'owner': 'Owner', 
   'host': 'Host', 
   'advanced': 'Advanced', 
   'info': 'Info', 
  'virus': 'Virtex',
  'thnks': 'Thanks To',
  'store': 'Store Menu',
   '': 'No Category', 
 } 
 const defaultMenu = { 
   before: ` 
 ╭─「  *%me* 」 
 │ 👋🏻 Hai, %name! 
 │ 
 │🧱  *Limit* : %limit Limit
 │ 🦸🏼‍♂️  *Role* : %role
 │ 🔼  *Level* : %level (%exp / %maxexp)
 │ 💫  *Total XP* : %totalexp ✨ 
 │  
 │ 📅  *Tanggal* : %week, %date
 │ 🕰️  *Waktu* : %time 
 │ 
 │ 📈  *Uptime* : %uptime
 │ 📊  *Database* : %rtotalreg of %totalreg 
 ╰──── 
 %readmore`.trimStart(), 
   header: '╭─「 %category 」', 
   body: '┊ • %cmd %islimit %isPremium', 
   footer: '╰═┅═━––––––๑\n', 
   after: ` 
 *%npmname* | %version 
 ${'```%npmdesc```'} 
 `, 
 } 
 let handler = async (m, { conn, usedPrefix: _p, __dirname }) => { 
   try { 
     let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) 
     let { exp, limit, level, role } = global.db.data.users[m.sender] 
     let { min, xp, max } = xpRange(level, global.multiplier) 
     let name = await conn.getName(m.sender) 
     let d = new Date(new Date + 3600000) 
     let locale = 'id' 
     // d.getTimeZoneOffset() 
     // Offset -420 is 18.00 
     // Offset    0 is  0.00 
     // Offset  420 is  7.00 
     let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5] 
     let week = d.toLocaleDateString(locale, { weekday: 'long' }) 
     let date = d.toLocaleDateString(locale, { 
       day: 'numeric', 
       month: 'long', 
       year: 'numeric' 
     }) 
     let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', { 
       day: 'numeric', 
       month: 'long', 
       year: 'numeric' 
     }).format(d) 
     let time = d.toLocaleTimeString(locale, { 
       hour: 'numeric', 
       minute: 'numeric', 
       second: 'numeric' 
     }) 
     let _uptime = process.uptime() * 1000 
     let _muptime 
     if (process.send) { 
       process.send('uptime') 
       _muptime = await new Promise(resolve => { 
         process.once('message', resolve) 
         setTimeout(resolve, 1000) 
       }) * 1000 
     } 
     let muptime = clockString(_muptime) 
     let uptime = clockString(_uptime) 
     let totalreg = Object.keys(global.db.data.users).length 
     let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
     let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => { 
       return { 
         help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help], 
         tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags], 
         prefix: 'customPrefix' in plugin, 
         limit: plugin.limit, 
         premium: plugin.premium, 
         enabled: !plugin.disabled, 
       } 
     }) 
     for (let plugin of help) 
       if (plugin && 'tags' in plugin) 
         for (let tag of plugin.tags) 
           if (!(tag in tags) && tag) tags[tag] = tag 
     conn.menu = conn.menu ? conn.menu : {} 
     let before = conn.menu.before || defaultMenu.before 
     let header = conn.menu.header || defaultMenu.header 
     let body = conn.menu.body || defaultMenu.body 
     let footer = conn.menu.footer || defaultMenu.footer 
     let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after 
     let _text = [ 
       before, 
       ...Object.keys(tags).map(tag => { 
         return header.replace(/%category/g, tags[tag]) + '\n' + [ 
           ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => { 
             return menu.help.map(help => { 
               return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help) 
                 .replace(/%islimit/g, menu.limit ? '(Limit)' : '') 
                 .replace(/%isPremium/g, menu.premium ? '(Premium)' : '') 
                 .trim() 
             }).join('\n') 
           }), 
           footer 
         ].join('\n') 
       }), 
       after 
     ].join('\n') 
     let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : '' 
     let replace = { 
       '%': '%', 
       p: _p, uptime, muptime, 
       me: conn.getName(conn.user.jid), 
       npmname: _package.name, 
       npmdesc: _package.description, 
       version: _package.version, 
       exp: exp - min, 
       maxexp: xp, 
       totalexp: exp, 
       xp4levelup: max - exp, 
       github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]', 
       level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role, 
       readmore: readMore 
     } 
     text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name]) 
     const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png') 
     conn.sendHydrated(m.chat, text.trim(), author, pp, 'https://fangzbot.websites.co.in/', '💌Blog Kami', null, null, [ 
       ['💰Donate', '/donasi'], 
       ['⚡Speed', '/ping'], 
       ['🌹Owner', '/owner'] 
     ], m) 
   } catch (e) { 
     conn.reply(m.chat, 'Maaf, menu sedang error', m) 
     throw e 
   } 
 }  
 handler.command = /^(menu|help|\?)$/i
  
 handler.exp = 3 
  
 export default handler 
  
 const more = String.fromCharCode(8206) 
 const readMore = more.repeat(4001) 
  
 function clockString(ms) { 
   let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) 
   let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60 
   let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60 
   return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':') 
 }