// const messages = ["52", "1", "100", "99", "0", "55"]
// const Gay = messages[Math.floor(Math.random() * messages.length)];

const { Client, MessageEmbed, GuildMember } = require('discord.js');
const client = new Client();
const fs = require('fs');

module.exports.run = async(client, message, args) => {
   const gay = Math.floor(Math.random() * 100 + 1)
   const noargs = new MessageEmbed()
   .setColor('#ff6238')
   .setTitle(`**🏳️‍🌈 Я думаю что ${message.author.username} гей на ${gay} %!🏳️‍🌈**`)
   let member = message.guild.member(message.mentions.users.first())
   if(!member) return message.channel.send(noargs)
  
   const embed = new MessageEmbed()
   .setColor('#ff6238')
   .setTitle(`**🏳️‍🌈 Я думаю что ${member.user.username} гей на ${gay} %!🏳️‍🌈**`)
   message.channel.send(embed)
}
