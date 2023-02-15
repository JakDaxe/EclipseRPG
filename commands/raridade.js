const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
     
      //puxar canais e user
      const respiração = message.guild.channels.cache.get("1067057098237681745");
      const kekkijutsu = message.guild.channels.cache.get("1067057197697220639");
      const user = message.mentions.users.first()
      
      const raridade = [
          {
              name: "Comum", description: `Com este nível de raridade você poderá ter uma respiração ou Kekkijutsu (caso seja um oni) a escolha. Veja em ${kekkijutsu} ou ${respiração} para saber quais estão nesta categoria de raridade.`
          },
          {
              name: "Comum", description: `Com este nível de raridade você poderá ter uma respiração ou Kekkijutsu (caso seja um oni) a escolha. Veja em ${kekkijutsu} ou ${respiração} para saber quais estão nesta categoria de raridade.`
          },
          {
              name: "Comum", description: `Com este nível de raridade você poderá ter uma respiração ou Kekkijutsu (caso seja um oni) a escolha. Veja em ${kekkijutsu} ou ${respiração} para saber quais estão nesta categoria de raridade.`
          },
          {
              name: "Comum", description: `Com este nível de raridade você poderá ter uma respiração ou Kekkijutsu (caso seja um oni) a escolha. Veja em ${kekkijutsu} ou ${respiração} para saber quais estão nesta categoria de raridade.`
          },
          {
              name: "Comum", description: `Com este nível de raridade você poderá ter uma respiração ou Kekkijutsu (caso seja um oni) a escolha. Veja em ${kekkijutsu} ou ${respiração} para saber quais estão nesta categoria de raridade.`
          },
          {
              name: "Raro", description: `Com este nível de raridade você poderá ter uma respiração ou Kekkijutsu (caso seja um oni) a escolha. Veja em ${kekkijutsu} ou ${respiração} para saber quais estão nesta categoria de raridade.`
          },
          {
              name: "Raro", description: `Com este nível de raridade você poderá ter uma respiração ou Kekkijutsu (caso seja um oni) a escolha. Veja em ${kekkijutsu} ou ${respiração} para saber quais estão nesta categoria de raridade.`
          },
          {
              name: "Raro", description: `Com este nível de raridade você poderá ter uma respiração ou Kekkijutsu (caso seja um oni) a escolha. Veja em ${kekkijutsu} ou ${respiração} para saber quais estão nesta categoria de raridade.`
          },
          {
              name: "Raro", description: `Com este nível de raridade você poderá ter uma respiração ou Kekkijutsu (caso seja um oni) a escolha. Veja em ${kekkijutsu} ou ${respiração} para saber quais estão nesta categoria de raridade.`
          },
          {
              name: "Epíco", description: `Com este nível de raridade você poderá ter uma respiração ou Kekkijutsu (caso seja um oni) a escolha. Veja em ${kekkijutsu} ou ${respiração} para saber quais estão nesta categoria de raridade.`
          },
          {
              name: "Epíco", description: `Com este nível de raridade você poderá ter uma respiração ou Kekkijutsu (caso seja um oni) a escolha. Veja em ${kekkijutsu} ou ${respiração} para saber quais estão nesta categoria de raridade.`
          },
          {
              name: "Epíco", description: `Com este nível de raridade você poderá ter uma respiração ou Kekkijutsu (caso seja um oni) a escolha. Veja em ${kekkijutsu} ou ${respiração} para saber quais estão nesta categoria de raridade.`
          },
          {
              name: "Lendário", description: `Com este nível de raridade você poderá ter uma respiração ou Kekkijutsu (caso seja um oni) a escolha. Veja em ${kekkijutsu} ou ${respiração} para saber quais estão nesta categoria de raridade.`
          },
          {
              name: "Comum", description: `Com este nível de raridade você poderá ter uma respiração ou Kekkijutsu (caso seja um oni) a escolha. Veja em ${kekkijutsu} ou ${respiração} para saber quais estão nesta categoria de raridade.`
          },
          {
              name: "Comum", description: `Com este nível de raridade você poderá ter uma respiração ou Kekkijutsu (caso seja um oni) a escolha. Veja em ${kekkijutsu} ou ${respiração} para saber quais estão nesta categoria de raridade.`
          },
          {
              name: "Raro", description: `Com este nível de raridade você poderá ter uma respiração ou Kekkijutsu (caso seja um oni) a escolha. Veja em ${kekkijutsu} ou ${respiração} para saber quais estão nesta categoria de raridade.`
          },
          {
              name: "Epíco", description: `Com este nível de raridade você poderá ter uma respiração ou Kekkijutsu (caso seja um oni) a escolha. Veja em ${kekkijutsu} ou ${respiração} para saber quais estão nesta categoria de raridade.`
          },
          {
              name: "Comum", description: `Com este nível de raridade você poderá ter uma respiração ou Kekkijutsu (caso seja um oni) a escolha. Veja em ${kekkijutsu} ou ${respiração} para saber quais estão nesta categoria de raridade.`
          },
          {
              name: "Comum", description: `Com este nível de raridade você poderá ter uma respiração ou Kekkijutsu (caso seja um oni) a escolha. Veja em ${kekkijutsu} ou ${respiração} para saber quais estão nesta categoria de raridade.`
          },
          {
              name: "Comum", description: `Com este nível de raridade você poderá ter uma respiração ou Kekkijutsu (caso seja um oni) a escolha. Veja em ${kekkijutsu} ou ${respiração} para saber quais estão nesta categoria de raridade.`
          },
          {
              name: "Raro", description: `Com este nível de raridade você poderá ter uma respiração ou Kekkijutsu (caso seja um oni) a escolha. Veja em ${kekkijutsu} ou ${respiração} para saber quais estão nesta categoria de raridade.`
          },
          {
              name: "Epico", description: `Com este nível de raridade você poderá ter uma respiração ou Kekkijutsu (caso seja um oni) a escolha. Veja em ${kekkijutsu} ou ${respiração} para saber quais estão nesta categoria de raridade.`
          }
      ]
      
    //sistema de rolar 
    const randomIndex = Math.floor(Math.random() * raridade.length);
    const randomReward = raridade[randomIndex];
 
    const embed = new Discord.MessageEmbed()
      .setColor('#3E005A')
      .setDescription(`**Parabéns ${message.author}**, você conseguiu o nível de raridade **${randomReward.name}**.\n\n${randomReward.description}`)
      .setTimestamp()
     
     
    
    message.channel.send(embed)

 };



exports.help = {
  name: "raridade",
  description: "rolar a raridade."
};