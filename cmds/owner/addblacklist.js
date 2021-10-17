const { Client, MessageEmbed, GuildMember } = require('discord.js');
const config = require('../../config.json')

module.exports.run = async (client, message, args) => {
    let no = new MessageEmbed()
    .setTitle(`⛔️ Ошибка`)
    .setColor(`#e74444`)
    .setDescription(`Доступно только администрации бота: DELORMEN: <@716605340757524503> VeLson: <@519021909392883722> Skip: <@474883708394930197>`)
    .setTimestamp()
    if (!config.owners.includes(message.author.id)) return message.channel.send(no);
    let member = message.guild.member(message.mentions.users.first());
    let reason = args.slice(1).join(" ");
    if (!reason) reason = 'Не указана';
    if (!member) return message.channel.send(`Укажите пользователя`);
    let data = await Blacklist.findOne({ userID: member.user.id });
    if(!data) { Blacklist.create({ userID: member.user.id }); client.channels.cache.get('899285047771799603').send(`**\`[✅ BlackList]\` \`${member.user.username}\` Добавлен в чёрный список бота**`); }
    let addblacklist = new MessageEmbed()
    .setTitle(`✅ Успех`)
    .setColor(`#5be55d`)
    .setDescription(`Администратор бота <@${message.author.id}> занёс <@${member.user.id}> в чёрный список бота \n**Причина:** ${reason}`)
    .setTimestamp()
    message.channel.send(addblacklist);
    data.blacklist = 'yes'
    data.reason = reason
    data.save();
}
