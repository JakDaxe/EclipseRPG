const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {

    const serpente = message.guild.roles.cache.find(r => r.name === "⁀➷〘🐍〙• Respiração da Serpente");
    
    const embed = new Discord.MessageEmbed()
      .setColor('#3E005A')
      .setDescription(`${message.author} usou a ${serpente}\n\n**Terceira Forma: Estrangulamento Espiral (San no kata: Toguro Jime)**`)
      .setImage("https://media.discordapp.net/attachments/1072244257282338958/1075102396360957962/terceira-forma-respiracao-da-serpente-demon-slayer-kimetsu-no-yaiba.png?width=1048&height=512")
      .setTimestamp()
     
     message.channel.send(embed)
  
};


exports.help = {
  name: "serpente3",
  description: "usa a forma 3 da respiração da serpente."
};