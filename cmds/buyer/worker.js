const { MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args) => {
  // Бд
  let data = await Guild.findOne({ guildID: message.guild.id });
  let user = await User.findOne({ guildID: message.guild.id });
  
  // Проверка на премиум статус сервера
  
  let no = new MessageEmbed()
  .setTitle('⛔️ Ошибка')
  .setDescription('Извините! Данная команда будет доступна только после покупки Premium Status!')
  .setColor(11608096)
  .setFooter('Купить Premium Status можно тут https://discord.gg/Rf7p5CWxhf', 'https://cdn.discordapp.com/attachments/742390603442290850/859733588698595348/whbv.png')
  .setTimestamp();
  
  if(data.buy == 'no') return message.channel.send(no)
  
  message.channel.send('Команда В Разработке')
}
