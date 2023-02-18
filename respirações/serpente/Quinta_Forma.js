const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {

    const serpente = message.guild.roles.cache.find(r => r.name === "⁀➷〘🐍〙• Respiração da Serpente");
    
    const embed = new Discord.MessageEmbed()
      .setColor('#3E005A')
      .setDescription(`${serpente}\n\n**Quinta Forma: Serpente Deslizante!**\n**Requisitos:** <:breath:1072197862412267670> \`50 fôlego (5.000)\` `)
      .setImage("https://images-ext-1.discordapp.net/external/VVb2hlDnrKDzQ0zXROUeGySIsZbluM2BB9rvHE6LHk8/https/psverso.com.br/wp-content/uploads/2022/09/quinta-forma-respiracao-da-serpente-demon-slayer-kimetsu-no-yaiba.webp?width=445&height=512")
      .setTimestamp()
     
     message.channel.send(embed)
  
};


exports.help = {
  name: "serpente5",
  description: "usa a forma 5 da respiração da serpente."
};