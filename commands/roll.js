const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {


    //sistema de rolar
   const max = parseInt(args[0]);
    if (!max) {
      return message.reply('Insira um número válido.');
    }
    const roll = Math.floor(Math.random() * max) + 1;

    
    const embed = new Discord.MessageEmbed()
      .setColor('#3E005A')
      .setDescription(`${message.author}, Você rolou **${roll}**.`)
      .setTimestamp()
     
     message.channel.send(embed)
  
};


exports.help = {
  name: "roll",
  description: "roll um número"
};