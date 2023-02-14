const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {

    const serpente = message.guild.roles.cache.find(r => r.name === "⁀➷〘🐍〙• Respiração da Serpente");
    
    const embed = new Discord.MessageEmbed()
      .setColor('#3E005A')
      .setDescription(`${message.author} usou a ${serpente}\n\n**Quarta Forma: Réptil de Duas Cabeças (Shi no kata: Keija Sosei)**`)
      .setImage("https://media.discordapp.net/attachments/1072244257282338958/1075102400442011708/quarta-forma-respiracao-da-serpente-demon-slayer-kimetsu-no-yaiba.png?width=531&height=512")
      .setTimestamp()
     
     message.channel.send(embed)
  
};


exports.help = {
  name: "serpente4",
  description: "usa a forma 4 da respiração da serpente."
};