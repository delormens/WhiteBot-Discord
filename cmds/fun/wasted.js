const { Client, MessageEmbed, GuildMember, MessageAttachment } = require('discord.js');
const client = new Client();
const fetch = require('node-fetch')
const fs = require('fs');

module.exports.run = async (client,message,args) => {

    if (!message.mentions.users.size) { // если написано $wasted, то показываем аватарку автора сообщения
        let link = `https://some-random-api.ml/canvas/wasted/?avatar=${message.author.avatarURL({ format: 'png'})}` // Считываем эффект и говорим что картинка для эффекта - аватарка
        const attachmentt = new MessageAttachment(link, 'triggered.gif');
        const embed = new MessageEmbed()
            .setTitle(`${message.author.username} ПОТРАЧЕНО!`)
            .attachFiles(attachmentt)
            .setImage('attachment://triggered.gif')
        return message.channel.send(embed);
    }
    const WastedList = message.mentions.users.map(user => { // Если написали $wasted @test, то показываем триггер аватарки пользователя test
        let link = `https://some-random-api.ml/canvas/wasted/?avatar=${user.avatarURL({ format: 'png'})}`
        const attachmentt = new MessageAttachment(link, 'triggered.gif');
        const embed = new MessageEmbed()
            .setTitle(`${user.username} ПОТРАЧЕНО!`)
            .attachFiles(attachmentt)
            .setImage('attachment://triggered.gif')

        return embed
    });
    message.channel.send(WastedList);
    return
};
