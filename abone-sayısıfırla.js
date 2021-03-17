const Discord = require('discord.js');
const db = require('quick.db') 
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(':x: bu özelliği kullanabilmek için `Yönetici` yetkisine sahip olmalısınız')
   let user = message.mentions.users.first();
   if (message.mentions.users.size < 1) return message.reply('Lütfen Abone Rol Verme Sayısını Sileceğin Kişiyi Etiketle!');
     if (db.has(`aboneistatistik${user.id}`) === false) return message.reply("Zaten 0 Görünüyor!")


   message.reply('Belirtilen Kişinin Abone Rol Verme Sayısı Sıfırlanmıştır.')
db.delete(`aboneistatistik${user.id}`)

}; 


exports.conf = { 
enabled: true,
guildOnly: false,
 aliases: [], 
permLevel: 0
}

exports.help = {
 name: 'abonesayısını-sıfırla', 
description: 'kayıt sistemini kapatır',
 usage: 'kayıt-kapat' 
};