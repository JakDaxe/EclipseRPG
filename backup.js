const Discord = require('discord.js');
const db = require('quick.db');

const client = new Discord.Client();

client.on('message', async message => {
  if (message.content.startsWith('!status')) {
    let forca = await db.get(`forca_${message.author.id}`);
    if (forca === null) forca = 0;
      
    let speed = await db.get(`speed_${message.author.id}`);
    if (speed === null) speed = 0;
    
    let resist = await db.get(`resist_${message.author.id}`);
    if (resist === null) resist = '0';
    
    let blood = await db.get(`blood_${message.author.id}`);
    if (blood === null) blood = '0';
      
    let folego = await db.get(`folego_${message.author.id}`);
    if (folego === null) folego = '0';
      
    let points = await db.get(`points_${message.author.id}`);
    if (points === null) points = '0';
    
      
      const embed = new Discord.MessageEmbed()
      .setColor('#3E005A')
      .setTitle(`Status Atual - ${message.author.username}`)
      .setDescription(`\n<:strength:1072212510175920168> **Força**: \`${forca}\`\n<:speed:1072197155269398618> **Velocidade**: \`${speed}\`\n<:resistance:1072197485432426626> **Resistência**: \`${resist}\`\n<:breath:1072197862412267670> **Fôlego**: \`${folego}\`\n<:blood:1072198040032641104> **Sangue**: \`${blood}\`\n<:points:1072198464357810247> **Pontos**: \`${points}\` `)
      .setTimestamp()
     
    
    message.channel.send(embed);
  } 
});


client.on('message', async message => {
  if (message.content.startsWith('!dis')) {
    const args = message.content.split(' ');
    if (args.length !== 3) {
      return message.reply('Erro: `!dis [atributo] [pontos]`');
    }

    const attribute = args[1];
    if (attribute !== 'str') {
      return message.reply('Invalido.');
    }

    const points = parseInt(args[2]);
    if (isNaN(points)) {
      return message.reply('Pontos invalidos');
    }
      
      
    

    const userPoints = await db.fetch(`points_${message.author.id}`);
    if (userPoints < points) {
      return message.reply('Erro: Pontos Insuficientes.');
    }

      const currentPoints = await db.fetch(`forca_${message.author.id}`) || 0;
    await db.set(`forca_${message.author.id}`, currentPoints + points);
    await db.subtract(`points_${message.author.id}`, points);
   

    return message.reply(`Successo. Gastou ${points} pontos e adicionou eles em força.`);
  }
});


client.on('message', async message => {
  if (message.content.startsWith('!perfil')) {
    let nome = await db.get(`nome_${message.author.id}`);
    if (nome === null) nome = 'nenhum';
      
    let idade = await db.get(`idade_${message.author.id}`);
    if (idade === null) idade = '0';
      
    let raca = await db.get(`raca_${message.author.id}`);
    if (raca === null) raca = 'nenhuma';
      
    let blood = await db.get(`blood_${message.author.id}`);
    if (blood === null) blood = '0'; 
      
    let respi = await db.get(`respi_${message.author.id}`);
    if (respi === null) respi = 'nenhuma';
    
    let imagem = await db.get(`imagem_${message.author.id}`);
    if (imagem === null) imagem = 'https://media.discordapp.net/attachments/1072244257282338958/1072266969975378020/783C7C54-A23C-4C8C-883D-41B79AB5F8BB.png';
    
    const embed = new Discord.MessageEmbed()
      .setColor('#3E005A')
      .setTitle(`Perfil`)
      .setDescription(`\n**Nome**: *${nome}*\n**Idade**: *${idade}*\n**Raça**: *${raca}*\n**Fôlego/Sangue**: ${blood}\n\n**Respiração/Kekkijutsu**: *${respi}*\n\n**Aparência**:`)
      .setTimestamp()
      .setImage(imagem)
     
    
    message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content.startsWith('!att nome')) {
    let novonome = message.content.split(' ').slice(2).join(' ');
    await db.set(`nome_${message.author.id}`, novonome);
    
    const embed = new Discord.MessageEmbed()
      .setColor('#3E005A')
      .setTitle(`Atualização`)
      .setDescription(`O seu nome foi alterado para: **${novonome}**`)
      .setTimestamp()
   
    
    message.channel.send(embed);
  }
});

client.on('message', async message => {

  if (message.content.startsWith('!att idade')) {
    let novaidade = message.content.split(' ').slice(2).join(' ');
    await db.set(`idade_${message.author.id}`, novaidade)
    
    const embed = new Discord.MessageEmbed()
      .setColor('#3E005A')
      .setTitle(`Atualização`)
      .setDescription(`A sua idade foi alterada para: **${novaidade}**`)
      .setTimestamp()
   
    
    message.channel.send(embed);
  }
});


client.on('message', async message => {
  if (message.content.startsWith('!addpoints')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) {
      return message.reply('Erro: Você não possui permissão para executar este comando.');
    }

    const args = message.content.split(' ');
    if (args.length !== 3) {
      return message.reply('Erro: `!addpoints [usuário] [pontos]`');
    }

    const user = message.mentions.users.first();
    if (!user) {
      return message.reply('Erro: Mencione alguém válido.');
    }

    const points = parseInt(args[2]);
    if (isNaN(points)) {
      return message.reply('Erro: Número inválido de pontos.');
    }

    await db.add(`points_${user.id}`, points);

    return message.reply(`Sucesso.  Adicionei ${points} pontos a  ${user.username}.`);
  }
});

client.on('message', async message => {
    if (message.content.startsWith('!verstatus')) {
    
const user = message.mentions.users.first();
    
    let forca = await db.get(`forca_${user.id}`);
    if (forca === null) forca = '0';
      
    let speed = await db.get(`speed_${user.id}`);
    if (speed === null) speed = '0';
    
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
      .setTitle(`Status Atual - ${user.username}`)
      .setDescription(`\n<:strength:1072212510175920168> **Força**: \`${forca}\`\n<:speed:1072197155269398618> **Velocidade**: \`${speed}\`\n<:resistance:1072197485432426626> **Resistência**: \`${resist}\`\n<:breath:1072197862412267670> **Fôlego**: \`${folego}\`\n<:blood:1072198040032641104> **Sangue**: \`${blood}\`\n<:points:1072198464357810247> **Pontos**: \`${points}\` `)
      .setTimestamp()
     
    
    message.channel.send(embed);
  }
  
});

client.login('');
