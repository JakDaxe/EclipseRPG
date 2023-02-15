const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) {
      return message.reply('🚫 **Erro:** `Sem permissão.`');
    }
    
    const user = message.mentions.users.first()
    const embed = new Discord.MessageEmbed()
      .setColor('#3E005A')
      
      .setDescription(`**Parabéns ${user}!** A sua ficha foi aprovada e está em modo: **Observação**. Qualquer abuso da mesma resultará reset. Se divirta e bom RP.`)
      .setTimestamp()
     
     
    
    message.channel.send(embed).then(sentMessage => {
      message.delete();

 });
 };



exports.help = {
  name: "obsapv",
  description: "aprovar a ficha."
};