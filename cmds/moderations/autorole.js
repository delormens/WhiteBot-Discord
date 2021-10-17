const { MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args) => {
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Недостаточно прав на использование команды!')
        let data = await Guild.findOne({ guildID: message.guild.id });
        if (!args[0]) return message.reply(`Укажите допустимое значение между **on** и **off**`)
        if (args[0] == 'on'){
            if (!args[1]) return message.reply(`Укажите существующую роль`)
            let role = message.guild.roles.cache.find((r) => r.name == args[1]) || message.guild.roles.cache.find((r) => r.id == args[1]) || message.mentions.roles.first();
            message.reply(`Автоматическая выдача ролей включена! Новые участники автоматически получат **<@&${role.id}>**`)
            data.autorole = role.id;
            data._autorole = 'on';
            data.save();
        } else if (args[0] == 'off') {
            message.reply(`**Автоматическая выдача ролей отключена.** \n\n\🔁 Напишите ${data.prefix}autorole on @Роль чтобы включить`)
            data._autorole = 'off';
            data.autorole = 'none';
            data.save();
        }
}
