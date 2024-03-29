const { Client, MessageEmbed, GuildMember } = require('discord.js');

module.exports.run = async (client, message, args) => {
    let noargs = new MessageEmbed()
    .setTitle(`⛔️ Ошибка`)
    .setColor(`#e74444`)
    .setDescription('Не указан пользователь')
    .setTimestamp()
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Недостаточно прав на использование команды!');
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.member(args[0]));
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "Не указана";

    if (!message.guild) return;
    {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick({
              reason: (reason),
            })
            .then(() => {
                let kick = new MessageEmbed()
                .setTitle(`✅ Успех`)
                .setColor(`#5be55d`)
                .setDescription(`<@${message.author.id}> кикнул <@${member.user.id}> \nПричина: ${reason}`)
                message.channel.send(kick);
            })
            .catch(err => {
                message.channel.send(`⛔️ | Вы не можете санкционировать или обновить санкцию для участника, который имеет более высокую или равную иерархию ролей с вашей.!`)
                console.error(err);
            });
        } else {
          message.channel.send(noargs);
        }
      } else {
        message.channel.send(noargs);
      }
    }
}
