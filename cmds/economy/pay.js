const { Client, MessageEmbed, GuildMember } = require('discord.js');
const client = new Client();

module.exports.run = async(client, message, args) => {
  
let member = message.guild.member(message.mentions.users.first())
    if(!member) return message.reply(`⛔️ Пользователь не был найден.`)
    if(!args[1]) return message.reply(`⛔️ Укажите количество монет которых хотите отдать.`)
    if(args[1] < 1) return message.reply(`⛔️ Нельзя передать такое количество монет`)
    if(isNaN(args[1])) return message.reply(`⛔️ Укажите корректное значение.`)

    let author = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
    let loc = await User.findOne({ guildID: message.guild.id, userID: member.id });
    if(!loc) return client.nodb(member.user)
            
    if(author.money < args[1]) return message.reply(`У вас нету такого количества монет.`)
    if(author.userID == member.id) return message.reply(`Вы не можете передать монеты самому себе!`)
    if(member.user.bot) return message.reply(`Боты не люди.`)

    let embed = new MessageEmbed()
    .setColor()
    .setDescription(`✅ **${message.author.username}** успешно передал **${member.user.username}** монетки в количестве ${args[1]} 💵`)
    author.money -= Math.floor(parseInt(args[1]));
    loc.money += Math.floor(parseInt(args[1]));
    author.save(); loc.save()
    message.channel.send(embed)
 }
