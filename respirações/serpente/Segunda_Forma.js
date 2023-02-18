const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {

    const serpente = message.guild.roles.cache.find(r => r.name === "⁀➷〘🐍〙• Respiração da Serpente");
    
    const embed = new Discord.MessageEmbed()
      .setColor('#3E005A')
      .setDescription(`${serpente}\n\n**Segunda Forma: Presas Venenosas da Cabeça Estreita!**\n**Requisitos:** <:breath:1072197862412267670> \`20 fôlego (2.000)\``)
      .setImage("https://media.discordapp.net/attachments/1072244257282338958/1075101974380425266/segunda-forma-respiracao-da-serpente-demon-slayer-kimetsu-no-yaiba.png?width=996&height=512")
      .setTimestamp()
     
     message.channel.send(embed)
  
};


exports.help = {
  name: "serpente2",
  description: "usa a forma 2 da respiração da serpente."
};