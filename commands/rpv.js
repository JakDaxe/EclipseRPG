const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {

    const user = message.mentions.users.first()
    
      if (!message.member.hasPermission('ADMINISTRATOR')) {
      return message.reply('🚫 **Erro:** `Sem permissão.`');
    }
    
    const embed = new Discord.MessageEmbed()
      .setColor('#3E005A')
      
      .setDescription(`**${user}**, infelizmente a sua ficha foi reprovada, ela contém erros ou está desbalanceada.`)
      .setTimestamp()
     
     
    
    message.channel.send(embed).then(sentMessage => {
      message.delete();

 });

 };



exports.help = {
  name: "rpv",
  description: "reprovar a ficha."
};