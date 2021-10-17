const { Client, MessageEmbed, GuildMember } = require('discord.js');
const client = new Client();
const fs = require('fs');
const rando_imgs = [
    'https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif',
    'https://media.tenor.com/images/2e1d34d002d73459b6119d57e6a795d6/tenor.gif',
    //'https://i.imgur.com/wOmoeF8.gif',
    'https://data.whicdn.com/images/112409418/original.gif',
    'https://media.tenor.com/images/b0de026a12e20137a654b5e2e65e2aed/tenor.gif',
    'https://i.imgur.com/nrdYNtL.gif',
];

module.exports.run = async (client, message, args) => {

    let noargs = new MessageEmbed()
    .setDescription(`<@${message.author.id}>, ему не хватает обнимашек :с`)
    .setColor('#ff6238')
    .setImage('https://media.giphy.com/media/Y4z9olnoVl5QI/giphy.gif')
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
    if (!hugUser) return message.channel.send(noargs)
    let hugs = new MessageEmbed()
    .setDescription(`<@${message.author.id}> обнял(а) <@${hugUser.user.id}>`)
    .setColor('#ff6238')
    .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
    message.channel.send(hugs)
    
}
