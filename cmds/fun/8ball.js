const { Client, MessageEmbed, GuildMember } = require('discord.js');
const client = new Client();
const fs = require('fs');
const answers = [
  "Нет",
  "Врятли",
  "Возможно",
  "Да",
]

module.exports.run = async (client, message, args) => {

    if (!args[0]) return message.channel.send('Укажите вопрос!');
  
    let ball = new MessageEmbed()
    .setDescription(':8ball: 8ball')
    .setColor(`RANDOM`)
    .addField("Я думаю:", `${answers[Math.floor(Math.random() * answers.length)]}`, true)
    .setColor(49695)
    message.channel.send(ball)
    
}
