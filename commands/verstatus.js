const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
    
    let imagy = ("https://media.discordapp.net/attachments/1072244257282338958/1072849085494730762/IMG_1679.png")
    const userimage = message.author.AvatarURL
    
    const user = message.mentions.users.first() 
    
  let forca = await db.get(`forca_${user.id}`);
    if (forca === null) forca = 0;
      
    let speed = await db.get(`speed_${user.id}`);
    if (speed === null) speed = 0;
    
    let resist = await db.get(`resist_${user.id}`);
    if (resist === null) resist = '0';
    
    let blood = await db.get(`blood_${user.id}`);
    if (blood === null) blood = '0';
      
    let folego = await db.get(`folego_${user.id}`);
    if (folego === null) folego = '0';
      
    let points = await db.get(`points_${user.id}`);
    if (points === null) points = '0';
    
      
      const embed = new Discord.MessageEmbed()
      .setColor('#3E005A')
      .setThumbnail(userimage)
      .setDescription(`**Status** - **${user.username}**\n\n<:points:1072198464357810247> **Pontos**: \`${points}\`\n\n<:strength:1072212510175920168> **Força**: \`${forca}\`\n<:speed:1072197155269398618> **Velocidade**: \`${speed}\`\n<:resistance:1072197485432426626> **Resistência**: \`${resist}\`\n<:breath:1072197862412267670> **Fôlego**: \`${folego}\`\n<:blood:1072198040032641104> **Sangue**: \`${blood}\` `)
      .setTimestamp()
      .setImage(imagy);
     
    message.channel.send(embed);
    
  };



exports.help = {
  name: "verstatus",
  description: "ver o status."
};