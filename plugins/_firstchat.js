import moment from 'moment-timezone';

export async function before(m) {
    if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

    let user = global.db.data.users[m.sender]
    let txt = `👋Hai, ${ucapan()}

${user.banned ? '📮Maaf, kamu dibanned & Tidak bisa menggunakan bot ini lagi' : `💬 Ada yg bisa ${this.user.name} bantu?`}`.trim()

    if (new Date() - user.pc < 21600000) return // waktu ori 21600000 (6 jam)
    await this.sendButton(m.chat, txt, user.banned ? wm : '📮Note: Jangan spam bot nya', [user.banned ? '🎏 OWNER' : '🌸 MENU', user.banned ? '.owner' : '.menu'], m)
    user.pc = new Date * 1
}


function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat dinihari 🌆"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌇"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}
function timeimg() {
    let imgloc = ''
  const time = moment.tz('Asia/Kolkata').format('HH')
  imgloc = ('./media/menu.jpg')
  if (time >= 0) {
    imgloc = ('./media/midnight.jpg')
  }
  if (time >= 1) {
    imgloc = ('./media/aftermid.jpg')
  }
  if (time >= 4) {
    imgloc = ('./media/morning.jpg')
  }
  if (time >= 5) {
    imgloc = ('./media/dawn.jpg')
  }
  if (time >= 6) {
    imgloc = ('./media/sunrise.jpg')
  }
  if (time >= 7) {
    imgloc = ('./media/day.jpg')
  }
  if (time >= 12) {
    imgloc = ('./media/noon.jpg')
  }
  if (time >= 14) {
    imgloc = ('./media/afternoon.jpg')
  }
  if (time >= 16) {
    imgloc = ('./media/evening.jpg')
  }
  if (time >= 18) {
    imgloc = ('./media/sunset.jpg')
  }
  if (time >= 19) {
    imgloc = ('./media/dusk.jpg')
  }
  if (time >= 20) {
    imgloc = ('./media/night.jpg')
  }
  return imgloc
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}


// jasa buat plugins by FokusDotId (Fokus ID)