const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {

    const serpente = message.guild.roles.cache.find(r => r.name === "⁀➷〘🐍〙• Respiração da Serpente");
    
    const embed = new Discord.MessageEmbed()
      .setColor('#3E005A')
      .setDescription(`${serpente}\n\n**Primeira Forma: Corte da Serpente Sinuosa!**\n**Requisitos:** <:breath:1072197862412267670> \`10 fôlego (1.000)\``)
      .setImage("https://media.discordapp.net/attachments/1072244257282338958/1075100288526073986/d1a65a9b02811f324371b031756e7ef6b97adcafr1-1256-870v2_hq.jpg?width=688&height=476")
      .setTimestamp()
     
     message.channel.send(embed)
  
};


exports.help = {
  name: "serpente1",
  description: "usa a forma 1 da respiração da serpente."
};