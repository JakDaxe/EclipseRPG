const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {

    const lua = message.guild.roles.cache.find(r => r.name === ("⁀➷〘🌙〙• Respiração da Lua"));
    
    const embed = new Discord.MessageEmbed()
      .setColor('#3E005A')
      .setDescription(`${lua}\n\n**Primeira Forma: Lua Negra - Palácio da Tarde!**\n**Requisitos:** <:breath:1072197862412267670> \`10 fôlego (1.000)\``)
      .setImage("https://media.discordapp.net/attachments/1072244257282338958/1076440500132921455/IMG_1761.png")
      .setTimestamp()
     
     message.channel.send(embed)
  
};


exports.help = {
  name: "lua1",
  description: "usa a forma 1 da respiração da lua."
};