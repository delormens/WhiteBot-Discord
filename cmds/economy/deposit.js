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
        .setDescription('Нету столько денег')
        .setTimestamp()
        let data = await Guild.findOne({ guildID: message.guild.id });
        let user = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
        
        if(args[0] == 'all'){
                const nomoney = new MessageEmbed()
                .setTitle(`⛔️ Ошибка`)
                .setColor(11608096)
                .setDescription(`${message.author} У вас нет денег!`)
                
                if (user.money == '0') return message.channel.send(nomoney)
                const all = new MessageEmbed()
                .setTitle(`✅ Успех`)
                .setColor(49695)
                .setDescription(`Вы успешно положили все деньги в банк!`)
                .setTimestamp()
                
                //message.channel.send(all)
                //user.money = 0
                user.bank += Math.floor(parseInt(user.money));
                user.money = 0
                user.save()
                return message.channel.send(all)
        }

        if (!args[0]) return message.channel.send(nosum)
        if (isNaN(args[0])) return message.channel.send(nosum)
        if (args[1] < 1) return message.channel.send(nosum)
        if (user.money < args[0]) return message.channel.send(bomj)

        const embed = new MessageEmbed()
        .setTitle(`✅ Успех`)
        .setColor(49695)
        .setDescription(`Пополнение счета на ${args[0]} 💵`)
        .setTimestamp()

        message.channel.send(embed)
        user.money -= Math.floor(parseInt(args[0]));
        user.bank += Math.floor(parseInt(args[0]));
        user.save()
        
}
