const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {

    
    const visão = message.guild.roles.cache.find(r => r.name === "⁀➷〘👀〙• Visão Aprimorada");
    const coragem = message.guild.roles.cache.find(r => r.name === "⁀➷〘💖〙• Coragem Extrema");
    const fôlego = message.guild.roles.cache.find(r => r.name === "⁀➷〘🫁〙• Fôlego Avançado");

    
        const rewards = [
  { name: "Tomioka", image: "https://media.discordapp.net/attachments/1067056840875192401/1068148257005510699/download_1.gif?width=573&height=322", benefits: `${visão}\n${coragem}`, description: "O clã Tomioka foi criado a partir da linhagem do Ex Hashira da água, Giyu Tomioka. Este é um clã com inúmeras habilidades.", cor: "#0A47F8"},
  { name: "Iguro", image: "https://media.discordapp.net/attachments/1067056840875192401/1068146876366454904/download.gif?width=573&height=322", benefits: `${visão}\n${coragem}`, description: "O clã Iguro cultuava uma deusa que possuía um corpo metade humano e metade cobra, firmando um pacto com ela e em troca de riqueza", cor: "#0AF811"},
  { name: "Tsuyuri", image: "https://media.discordapp.net/attachments/1067056840875192401/1068143294770581546/956944-Kimetsu-no-Yaiba-Kanao-Tsuyuri-black-hair-purple-eyes.jpg?width=630&height=483", benefits: `${visão}\n${fôlego}`, description: "A família Tsuyuri é mesclada com a familia Kocho e por isso eles possuem alguns dos mesmos benefícios", cor: "#D903FF" }
];

    
    const randomIndex = Math.floor(Math.random() * rewards.length);
    const randomReward = rewards[randomIndex];
 

    
    const embed = new Discord.MessageEmbed()
      .setColor(randomReward.cor)
      .setTitle(randomReward.name)
      .setDescription(`**Parabéns ${message.author}!** Você conseguiu a família: **${randomReward.name}**.\n\n${randomReward.description}\n\n**Benefícios**:\n${randomReward.benefits}`)
      .setImage(randomReward.image)
      .setTimestamp()
     
    message.channel.send(embed)
     
};


exports.help = {
  name: "familia",
  description: "Roll numa família."
};