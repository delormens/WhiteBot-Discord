const { Client, MessageEmbed, GuildMember } = require('discord.js');
const client = new Client();
const fs = require('fs');
const rando_imgs = [
    //'https://i.imgur.com/fm49srQ.gif',
    //'https://i.imgur.com/o2SJYUS.gif',
    'https://pa1.narvii.com/6067/68a2bb5829d993b3362a37dce55caa9c0949af6c_hq.gif',
    'https://i.imgur.com/Agwwaj6.gif',
];

module.exports.run = async (client, message, args) => {

    let noargs = new MessageEmbed()
    .setDescription(`<@${message.author.id}>, пытался ударить себя, возможно у него проблемы в жизни`)
    .setColor('#ff6238')
    .setImage('https://media.giphy.com/media/Y4z9olnoVl5QI/giphy.gif')
    let kissUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
    if (!kissUser) return message.channel.send(noargs)
    let slaps = new MessageEmbed()
    .setDescription(`<@${message.author.id}> ударил(а) <@${kissUser.user.id}>`)
    .setColor('#ff6238')
    .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
    message.channel.send(slaps)

}
