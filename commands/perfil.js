const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {

    const user = message.mentions.users.first() || message.author;
    
let nome = await db.get(`nome_${user.id}`);
    if (nome === null) nome = 'nenhum';
      
    let idade = await db.get(`idade_${user.id}`);
    if (idade === null) idade = '0';
      
    let raca = await db.get(`raca_${user.id}`);
    if (raca === null) raca = 'nenhuma';
      
    let blood = await db.get(`blood_${user.id}`);
    if (blood === null) blood = '0'; 
      
    let respi = await db.get(`respi_${user.id}`);
    if (respi === null) respi = 'nenhuma';
    
    let keki = await db.get(`keki_${user.id}`);
    if (keki === null) keki = 'nenhuma';
    
    let folego = await db.get(`folego_${user.id}`);
    if (folego === null) folego = '0';
    
    let imagem = await db.get(`imagem_${user.id}`);
    if (imagem === null) imagem = 'https://media.discordapp.net/attachments/1072244257282338958/1072266969975378020/783C7C54-A23C-4C8C-883D-41B79AB5F8BB.png';
    
    const embed = new Discord.MessageEmbed()
      .setColor('#3E005A')
      
      .setDescription(`<:Timba_desc:1064968344828117022> **Perfil**\n\n**Nome**: *${nome}*\n**Idade**: *${idade}*\n**Raça**: *${raca}*\n**Sangue**: \`${blood} (${blood}00)\`\n**Fôlego**: \`${folego} (${folego}00)\`\n\n**Respiração**: ${respi}\n**Kekkijutsu**: ${keki}\n\n**Aparência**:`)
      .setTimestamp()
      .setImage(imagem)
     
    
    message.channel.send(embed);

 };



exports.help = {
  name: "perfil",
  description: "ver o perfil."
};