  
const { Client, MessageEmbed, GuildMember } = require('discord.js');
const client = new Client();
const fs = require('fs');

module.exports.run = async (client, message, arg) => {
    let member = message.guild.member(message.mentions.users.first() || message.author)
    let data = await User.findOne({ guildID: message.guild.id, userID: member.user.id });
    const embed = new MessageEmbed()
    .setDescription(`Баланс пользователя <@${member.id}> - ${data.money} 💵 в банке ${data.bank} 💸`)
    .setColor()
    
    message.channel.send(embed)
}
