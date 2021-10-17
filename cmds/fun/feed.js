const { Client, MessageEmbed, GuildMember } = require('discord.js');
const client = new Client();
const fs = require('fs');

module.exports.run = async (client, message, arg) => {
  
     let member = message.guild.member(message.mentions.users.first())
     if(!member) return message.channel.send('Укажите пользователя!')

    const embed = new MessageEmbed()
    .setDescription(`<@${message.author.id}> Кормит <@${member.id}>`)
    .setImage('https://images-ext-2.discordapp.net/external/LNr1BFLcO6Ch1uaAt4vimCk8WmvlhG461zTZXRZ7Jwo/https/cdn.nekos.life/feed/feed_013.gif')
    .setColor(233425)
    
    message.channel.send(embed)
    
}
