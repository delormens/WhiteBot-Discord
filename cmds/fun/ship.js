const { Client, MessageEmbed, GuildMember } = require('discord.js');

module.exports.run = async(client, message, args) => {
  
  let owner = message.guild.member(message.mentions.users.first() || message.guild.member(args[0]));
  let player = args.slice(1).join(" ");
  
  let ship1 = new MessageEmbed()
  .setDescription(`Укажите первого пользователя!`)
  .setColor('#ff6238')
  .setFooter(`Запросил: ${message.author.tag}`, message.author.avatarURL());
  let ship2 = new MessageEmbed()
  .setDescription(`Укажите второго пользователя!`)
  .setColor('#ff6238')
  .setFooter(`Запросил: ${message.author.tag}`, message.author.avatarURL());
  
  if(!owner) return message.channel.send(ship1);
  if(!player) return message.channel.send(ship2)
  
  const arg = Math.floor(Math.random() * 100 + 1)
  
  if (arg > 50) {
  let ships = new MessageEmbed()
  .setDescription(`${owner} и ${player} очень хорошо подходят друг другу ❤️ ${arg} ❤️`)
  .setColor('#ff6238')
  message.channel.send(ships)
  } else {
  let ships = new MessageEmbed()
  .setDescription(`${owner} и ${player} не очень хорошо подходят друг другу 💔 ${arg} 💔`)
  .setColor('#ff6238')
  message.channel.send(ships)
  }
}
