const Discord = require(`discord.js`);
const db = require(`quick.db`)

exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu Komutu Kullanabilmek İçin Yeterli Yetkiye Sahip Değilsin!`);
let kişi = message.mentions.users.first()
if(!args[0]) {
    const abonestats = await db.fetch(`aboneistatistik${message.author.id}.${message.guild.id}`)
    const codework1 = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL())
    .setTimestamp()
    .setFooter(`${message.author.tag} Tarafından İstendi.`)
    .setDescription(`**${message.author} İsimli Yetkilinin Toplam Kayıtı**
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**
    **Toplam \`${abonestats ? abonestats : '0'}\` Abone Rolü Vermişsin.**
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**`)
    message.channel.send(codework1)}
if(kişi) {
    const abonestats2 = await db.fetch(`aboneistatistik${kişi.id}.${message.guild.id}`)
    const codework = new Discord.MessageEmbed()
    .setAuthor(kişi.username, kişi.avatarURL)
    .setThumbnail(message.mentions.users.first().avatarURL())
    .setTimestamp()
    .setFooter(`${message.author.tag} Tarafından İstendi.`)
    .setDescription(`**Yetkilinin Bilgileri**
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**
    **Toplam \`${abonestats2 ? abonestats2 : '0'}\` Abone Rolü Vermiş.**
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**`)
    message.channel.send(codework)}  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["abone-istatistik","abone-stats","abonestats"],
 permLevel: 0,
};
exports.help = {
 name: 'aboneistatistik'
};