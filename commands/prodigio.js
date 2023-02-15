const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {

    //puxar role
    const ambidestro = message.guild.roles.cache.find(r => r.name === "⁀➷〘⚔️〙• Ambidestro");
    
    //resultados
    const prodigio = [
        { prod: `🌟 **Você é um prodigio!**\n\nProdígios são aqueles que nasceram com uma habilidade tão grande que facilmente conseguem usar técnicas de respiração/kekkijutsu e adquirirem sentidos Aguçados ou até mesmo outras habilidades.\n\n**Benefícios**:\nObtém +25% dos ganhos em missões.\nGanha +2% em treinos\nSobe de Rank com -50% dos requisitos\n-50% do Cooldown de todos os treinos\n+2 pontos em treino físico`},
        {
          prod: `**Você não é um prodígio!**\n\nVocê nasceu como uma pessoa qualquer, e infelizmente você não tem muitas habilidades únicas como um prodigio, mas não desanime você ainda pode evoluir muito!`
        },
        
        {
          prod: `**Você não é um prodígio!**\n\nVocê nasceu como uma pessoa qualquer, e infelizmente você não tem muitas habilidades únicas como um prodigio, mas não desanime você ainda pode evoluir muito!`
        },

        {
          prod: `**Você não é um prodígio!**\n\nVocê nasceu como uma pessoa qualquer, e infelizmente você não tem muitas habilidades únicas como um prodigio, mas não desanime você ainda pode evoluir muito!`
        },
        
        {
          prod: `**Você não é um prodígio!**\n\nVocê nasceu como uma pessoa qualquer, e infelizmente você não tem muitas habilidades únicas como um prodigio, mas não desanime você ainda pode evoluir muito!`

        },
        
        {
          prod: `**Você não é um prodígio!**\n\nVocê nasceu como uma pessoa qualquer, e infelizmente você não tem muitas habilidades únicas como um prodigio, mas não desanime você ainda pode evoluir muito!`

        },
        
        {
          prod: `**Você não é um prodígio!**\n\nVocê nasceu como uma pessoa qualquer, e infelizmente você não tem muitas habilidades únicas como um prodigio, mas não desanime você ainda pode evoluir muito!`

        },
        
        {
          prod: `**Você não é um prodígio!**\n\nVocê nasceu como uma pessoa qualquer, e infelizmente você não tem muitas habilidades únicas como um prodigio, mas não desanime você ainda pode evoluir muito!`

        },
        
        {
          prod: `**Você não é um prodígio!**\n\nVocê nasceu como uma pessoa qualquer, e infelizmente você não tem muitas habilidades únicas como um prodigio, mas não desanime você ainda pode evoluir muito!`

        }

    ]
    
    //sistema de rolar
    const user = message.mentions.users.first()
    const randomIndex = Math.floor(Math.random() * prodigio.length);
    const randomReward = prodigio[randomIndex];
    

    
    const embed = new Discord.MessageEmbed()
      .setColor('#3E005A')
      .setDescription(`${message.author}, ${randomReward.prod}`)
      .setTimestamp()
     
     message.channel.send(embed)
  
};


exports.help = {
  name: "prodigio",
  description: "rolar prodigio."
};