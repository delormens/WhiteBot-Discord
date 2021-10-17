
const { Client, MessageEmbed, GuildMember } = require('discord.js');
const client = new Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async(client, message, args) => {
  
  const bonus = Math.floor(Math.random() * 2000 + 1)
  
  let member = message.guild.member(message.mentions.users.first() || message.author)
  let user = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
  const no = new MessageEmbed()
  .setColor('#e74444')
  .setDescription(`<@${message.author.id}>, вы сможете получить награду через **${ms('43200000' - (Date.now() - user.timely))}**`)
  if(user.timely !== null && '43200000' - (Date.now() - user.timely) > 0) return message.channel.send(no)
  
  if(!user) return client.nodb(member.user);
  const r = new MessageEmbed()
  .setColor('#ff6238')
  .setDescription(`Вы получили ежедневную награду в размере. ${bonus} 💵`)
  message.channel.send(r);
  user.timely = Date.now();
  user.money += bonus;
  user.save() 
}
