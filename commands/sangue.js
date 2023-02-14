const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {

   
    
    //resultados
    const sangue = [
        { prod: `🌸 **Você possui Sangue Marechi!**\n\nVocê nasceu com o sangue dos Mareshi. O sangue Mareshi é um sangue capaz de atordoar os onis por conta de ser um sangue muito "Nutritivo" e por conta disso exala um cheiro intenso que faz com que os onis sejam enfraquecidos.`},
        {
          prod: `:drop_of_blood: **Você possui Sangue normal!** \n\nVocê nasceu como uma pessoa normal como qualquer outra, seu sangue é comum e não afeta onis.`
        }
    ]
    
    //sistema de rolar
    const user = message.mentions.users.first()
    const randomIndex = Math.floor(Math.random() * sangue.length);
    const randomReward = sangue[randomIndex];
    

    
    const embed = new Discord.MessageEmbed()
      .setColor('#3E005A')
      .setDescription(`${message.author}, ${randomReward.prod}`)
      .setTimestamp()
     
     
  
};


exports.help = {
  name: "sangue",
  description: "rolar sangue."
};