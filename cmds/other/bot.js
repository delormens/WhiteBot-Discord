const { Client, MessageEmbed, GuildMember } = require('discord.js');
const client = new Client();
const fs = require('fs');

module.exports.run = async(client, message, args) => {
  const embed = new MessageEmbed()
  .setTitle('Информация о боте')
  .setAuthor(message.author.username, message.author.avatarURL())
  .setDescription(`> 📜 •** Участников**: ${client.users.cache.size}\n> 🖥 •** Серверов**: ${client.guilds.cache.size}\n> ⭐️ •** Комманд**: 42\n\n**Ссылки**\n📘 • Пригласить бота: [Пригласить](https://discord.com/api/oauth2/authorize?client_id=899235873420369940&permissions=8&scope=bot)\n🔖 • Discord Group: [Дискорд](https://discord.gg/Rf7p5CWxhf)\n🔖 • VK: [Поддержка](https://vk.com/delormen)`)
  .setFooter('WhiteRP', 'https://media.discordapp.net/attachments/742390603442290850/859733588698595348/whbv.png?width=566&height=566');
  message.channel.send(embed)
}
