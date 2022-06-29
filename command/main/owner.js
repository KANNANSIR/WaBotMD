module.exports = {
   name: 'owner',
   alias: ['creator','developer'],
   category: 'main',
   desc: 'Menampilkan contact owner bot',
   async exec(msg, sock, args, arg) {
      const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:𝖐𝖗𝖎𝖘𝖍𝖓𝖆𝖉𝖆𝖘\n' // full name
            + 'ORG:𝔦𝔫𝔡𝔦𝔞;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=919633687665:919633687665\n' // WhatsApp ID + phone number
            + 'END:VCARD'
      sock.sendMessage(
      msg.from,
        { 
           contacts: { 
            displayName: '𝔨𝔯𝔦𝔷 𝔰𝔢𝔯', 
            contacts: [{ vcard }] 
           }
        }, { quoted: msg }
      )
   }
}
