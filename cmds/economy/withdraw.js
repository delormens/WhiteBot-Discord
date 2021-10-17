const { MessageEmbed } = require("discord.js");
const config = require("../../config.json");

module.exports.run = async(client, message, args) => {
        let nosum = new MessageEmbed()
        .setTitle(`⛔️ Ошибка`)
        .setColor(11608096)
        .setDescription('Неверная сумма')
        .setTimestamp()
        let bomj = new MessageEmbed()
        .setTitle(`⛔️ Ошибка`)
        .setColor(11608096)
        .setDescription('У вас нету столько в банке')
        .setTimestamp()
        let data = await Guild.findOne({ guildID: message.guild.id });
        let user = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
        
        if(args[0] == 'all'){
                const nobank = new MessageEmbed()
                .setTitle(`⛔️ Ошибка`)
                .setColor(11608096)
                .setDescription(`${message.author} Я щас полицию вызову! Банк Грабить запрещено!`)
                
                if(user.bank == '0') return message.channel.send(nobank)
                let all = new MessageEmbed()
                .setTitle(`✅ Успех`)
                .setColor(49695)
                .setDescription(`Вы успешно вывели все деньги!`)
                .setTimestamp()
                
                user.money += Math.floor(parseInt(user.bank))
                user.bank = 0
                user.save()
                return message.channel.send(all)
        }

        if (!args[0]) return message.channel.send(nosum)
        if (isNaN(args[0])) return message.channel.send(nosum)
        if (args[1] < 1) return message.channel.send(nosum)
        if (user.bank < args[0]) return message.channel.send(bomj)

        const embed = new MessageEmbed()
        .setTitle(`✅ Успех`)
        .setColor(49695)
        .setDescription(`Вывод ${args[0]} 💵`)
        .setTimestamp()

        message.channel.send(embed)
        user.bank -= Math.floor(parseInt(args[0]));
        user.money += Math.floor(parseInt(args[0]));
        user.save()
}
