const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {
  
  const berat = await db.fetch(`abonek_${message.guild.id}`)
  
  if(berat == null) return message.channel.send('Abone Rolü Vermek İçin Birini Etiketle');
  if (message.channel.id !== berat) return message.channel.send(`Bu Komutu Sadece <#${berat}> Kanalında Kullanabilirsiniz!`);
  if (berat == true) return; 
  if (berat == false) return message.channel.send(`Bu Sunucuda Abone Sistemi Aktif Edilmemiş.`);
  
 if(!message.member.roles.cache.has(db.fetch(`aboneyetkilisi_${message.guild.id}`))) {
    return message.channel.send("Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin!");
 }
  let user = message.mentions.members.first()
   if (!user) return message.channel.send('Kime Rol Verceğimi Yazmadın!').catch(console.error);
   if (user.roles.cache.has(db.fetch(`abonerolü_${message.guild.id}`))) return message.channel.send("Bu Kullanıcıda Zaten Abone Rolü Var!")
  user.roles.add(db.fetch(`abonerolü_${message.guild.id}`))
  const embed = new Discord.MessageEmbed()
  .setColor('#ff0000')
  .setTimestamp()
  .setFooter('Fraxy!')
  .addField(`Abone Rolü Alan Kullanıcı;`, `${user}`,true)
  .addField(`Abone Rolü Veren Yetkili;`,`${message.author}`,true)
  .setImage("https://cdn.dribbble.com/users/1369921/screenshots/3699553/yt-new-button-yoodle.gif")
      message.channel.send(embed)
  db.add(`aboneistatistik${message.author.id}.${message.guild.id}`, 1)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['abone ver','onay','onayla']
};

exports.help = {
  name: "abone",
  description: "31!",
  usage: "abone"
};