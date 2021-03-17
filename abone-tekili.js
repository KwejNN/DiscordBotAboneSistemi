const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let aboneyetkilisi = message.mentions.roles.first()
  if (!aboneyetkilisi) return message.channel.send('Lütfen Abone Yetkili rolünü etiketlermisin?')
   
  db.set(`aboneyetkilisi_${message.guild.id}`, aboneyetkilisi.id)
  message.channel.send(`Abone Yetkili Rolü Başarıyla Ayarlandı; **${aboneyetkilisi}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'aboneyetkilisi-ayarla',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'kayıt-rol <@rol>'
};