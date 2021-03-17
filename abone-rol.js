const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let abonerol = message.mentions.roles.first()
  if (!abonerol) return message.channel.send('Lütfen Abone rolünü etiketlermisin?')
   
  db.set(`abonerolü_${message.guild.id}`, abonerol.id)
  message.channel.send(`Abone Rolü Başarıyla Ayarlandı; **${abonerol}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'abonerol-ayarla',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'kayıt-rol <@rol>'
};