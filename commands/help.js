const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {

    
    const embed = new Discord.MessageEmbed()
      .setColor('#3E005A')
      .setTitle("Menu de Ajuda")
      .setDescription(`${message.author}, Aqui estão algumas informações sobre mim.\n\n**Versão:** \`1.3\`\n**Comandos:** \`18\`\n**Jogadores:** \`${client.users.cache.size}\`\n\n**Lista de Comandos:**\n\`perfil, status, sangue, prodigio, familia, addpoints, removepoints, apv, rpv, obsrpv, dis [atributo], att raça, att aparência, att kekkijutsu, att respiração, add [atributo],\``)
      .setTimestamp()
     
     message.channel.send(embed)
  
};


exports.help = {
  name: "ajuda",
  description: "menu de ajuda."
};