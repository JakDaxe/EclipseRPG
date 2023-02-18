const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {

    const serpente = message.guild.roles.cache.find(r => r.name === "⁀➷〘🐍〙• Respiração da Serpente");
    
    const embed = new Discord.MessageEmbed()
      .setColor('#3E005A')
      .setDescription(`${serpente}\n\n**Quarta Forma: Réptil de Duas Cabeças!**\n**Requisitos:** <:breath:1072197862412267670> \`40 fôlego (4.000)\` `)
      .setImage("https://media.discordapp.net/attachments/1072244257282338958/1075102400442011708/quarta-forma-respiracao-da-serpente-demon-slayer-kimetsu-no-yaiba.png?width=531&height=512")
      .setTimestamp()
     
     message.channel.send(embed)
  
};


exports.help = {
  name: "serpente4",
  description: "usa a forma 4 da respiração da serpente."
};