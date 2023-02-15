const Discord = require("discord.js");
const fs = require("fs");
const db = require("quick.db");

const chalk = require("chalk");

const client = new Discord.Client();
client.setMaxListeners(50)


client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if (jsfiles.length <= 0) {
    console.log("Sem comandos para carregar!");
    return;
  }
   console.log(chalk.bold.yellow(`Carregando ${jsfiles.length} comandos...`))
  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(chalk.bold.cyan(`${i + 1}: ${f} - ☑️`));
    client.commands.set(props.help.name, props);
  });
});

fs.readdir("./respirações/serpente", (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if (jsfiles.length <= 0) {
    console.log("Sem respirações!");
    return;
  }
    console.log(chalk.bold.yellow(`Carregando a Respiração da Serpente...`));
  jsfiles.forEach((f, i) => {
    let props = require(`./respirações/serpente/${f}`);
    console.log(chalk.bold.green(`Respiração da Serpente: ${f} ☑️`));
    client.commands.set(props.help.name, props);
  });
});



client.on("message", message => {
  if (!message.content.startsWith("!")) return;
  let msgArray = message.content.split(" ");
  let cmd = msgArray[0].substr(1);
  let args = msgArray.slice(1);
  let command = client.commands.get(cmd);
  if (!command) return;
  command.run(client, message, args);
});

client.on('message', async message => {
  if (message.content.startsWith('!dis força')) {
    const args = message.content.split(' ');
    if (args.length !== 3) {
      return message.reply('Erro: `!dis [atributo] [pontos]`');
    }

    

    const points = parseInt(args[2]);
    if (isNaN(points)) {
      return message.reply('🚫 **Erro:** `Pontos Inválidos.`');
    }
      
      
    

    const userPoints = await db.fetch(`points_${message.author.id}`);
    if (userPoints < points) {
      return message.reply('🚫 **Erro:** `Pontos Insuficientes.`');
    }

      const currentPoints = await db.fetch(`forca_${message.author.id}`) || 0;
    await db.set(`forca_${message.author.id}`, currentPoints + points);
    await db.subtract(`points_${message.author.id}`, points);
   

    return message.reply(`<:891549976579149846:1066741710459248700> **Successo.** Você adicionou \`${points}\` pontos em **força.**`);
  }
});

client.on('message', async message => {
  if (message.content.startsWith('!dis velocidade')) {
    const args = message.content.split(' ');
    if (args.length !== 3) {
      return message.reply('🚫 **Erro:** `!dis [atributo] [pontos]`');
    }

    

    const points = parseInt(args[2]);
    if (isNaN(points)) {
      return message.reply('🚫 **Erro:** `Pontos Inválidos.`');
    }
      
      
    

    const userPoints = await db.fetch(`points_${message.author.id}`);
    if (userPoints < points) {
      return message.reply('🚫 **Erro:** `Pontos Insuficientes.`');
    }

      const currentPoints = await db.fetch(`speed_${message.author.id}`) || 0;
    await db.set(`speed_${message.author.id}`, currentPoints + points);
    await db.subtract(`points_${message.author.id}`, points);
   

    return message.reply(`<:891549976579149846:1066741710459248700> **Successo.** Você adicionou \`${points}\` pontos em **velocidade.**`);
  }
});

client.on('message', async message => {
  if (message.content.startsWith('!dis resistência')) {
    const args = message.content.split(' ');
    if (args.length !== 3) {
      return message.reply('🚫 **Erro:** `!dis [atributo] [pontos]`');
    }

    

    const points = parseInt(args[2]);
    if (isNaN(points)) {
      return message.reply('🚫 **Erro:** `Pontos Inválidos.`');
    }
      
      
    

    const userPoints = await db.fetch(`points_${message.author.id}`);
    if (userPoints < points) {
      return message.reply('🚫 **Erro:** `Pontos Insuficientes.`');
    }

      const currentPoints = await db.fetch(`resist_${message.author.id}`) || 0;
    await db.set(`resist_${message.author.id}`, currentPoints + points);
    await db.subtract(`points_${message.author.id}`, points);
   

    return message.reply(`<:891549976579149846:1066741710459248700> **Successo.** Você adicionou \`${points}\` pontos em **resistência.**`);
  }
});

client.on('message', async message => {
  if (message.content.startsWith('!dis fôlego')) {
    const args = message.content.split(' ');
    if (args.length !== 3) {
      return message.reply('🚫 **Erro:** `!dis [atributo] [pontos]`');
    }

    

    const points = parseInt(args[2]);
    if (isNaN(points)) {
      return message.reply('🚫 **Erro:** `Pontos Inválidos.`');
    }
      
      
    

    const userPoints = await db.fetch(`points_${message.author.id}`);
    if (userPoints < points) {
      return message.reply('🚫 **Erro:** `Pontos Insuficientes.`');
    }

      const currentPoints = await db.fetch(`folego_${message.author.id}`) || 0;
    await db.set(`folego_${message.author.id}`, currentPoints + points);
    await db.subtract(`points_${message.author.id}`, points);
   

    return message.reply(`<:891549976579149846:1066741710459248700> **Successo.** Você adicionou \`${points}\` pontos em **fôlego.**`);
  }
});

client.on('message', async message => {
  if (message.content.startsWith('!dis sangue')) {
    const args = message.content.split(' ');
    if (args.length !== 3) {
      return message.reply('🚫 **Erro:** `!dis [atributo] [pontos]`');
    }

    

    const points = parseInt(args[2]);
    if (isNaN(points)) {
      return message.reply('🚫 **Erro:** `Pontos Inválidos.`');
    }
      
      
    

    const userPoints = await db.fetch(`points_${message.author.id}`);
    if (userPoints < points) {
      return message.reply('🚫 **Erro:** `Pontos Insuficientes.`');
    }

      const currentPoints = await db.fetch(`blood_${message.author.id}`) || 0;
    await db.set(`blood_${message.author.id}`, currentPoints + points);
    await db.subtract(`points_${message.author.id}`, points);
   

    return message.reply(`<:891549976579149846:1066741710459248700> **Successo.** Você adicionou \`${points}\` pontos em **sangue.**`);
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

  if (message.content.startsWith('!att raça')) {
    let novaraca = message.content.split(' ').slice(2).join(' ');
    await db.set(`raca_${message.author.id}`, novaraca)
    
    const embed = new Discord.MessageEmbed()
      .setColor('#3E005A')
      .setTitle(`Atualização`)
      .setDescription(`A sua raça foi alterada para: **${novaraca}**`)
      .setTimestamp()
   
    
    message.channel.send(embed);
  }
});

client.on('message', async message => {

  if (message.content.startsWith('!att aparência')) {
    let novaimagem = message.content.split(' ').slice(2).join(' ');
    await db.set(`imagem_${message.author.id}`, novaimagem)
    
    const embed = new Discord.MessageEmbed()
      .setColor('#3E005A')
      .setTitle(`Atualização`)
      .setDescription(`A sua aparência foi alterada com sucesso.`)
      .setTimestamp()
   
    
    message.channel.send(embed);
  }
});

client.on('message', async message => {

  if (message.content.startsWith('!att kekkijutsu')) {
    let novokeki = message.content.split(' ').slice(2).join(' ');
    await db.set(`kekkijutsu_${message.author.id}`, novokeki)
    
    const embed = new Discord.MessageEmbed()
      .setColor('#3E005A')
      .setTitle(`Atualização`)
      .setDescription(`A sua kekkijutsu foi alterada com sucesso para: \`${novokeki}.\` `)
      .setTimestamp()
   
    
    message.channel.send(embed);
  }
});

client.on('message', async message => {

  if (message.content.startsWith('!att respiração')) {
    let novarespi = message.content.split(' ').slice(2).join(' ');
    await db.set(`respi_${message.author.id}`, novarespi)
    
    const embed = new Discord.MessageEmbed()
      .setColor('#3E005A')
      .setTitle(`Atualização`)
      .setDescription(`A sua respiração foi alterada com sucesso para: \`${novarespi}.\` `)
      .setTimestamp()
   
    
    message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content.startsWith('!addpoints')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) {
      return message.reply('🚫 **Erro:** `Sem permissão.`');
    }

    const args = message.content.split(' ');
    if (args.length !== 3) {
      return message.reply('🚫 **Erro:** `!addpoints [usuário] [pontos].`');
    }

    const user = message.mentions.users.first();
    if (!user) {
      return message.reply('🚫 **Erro:** `Mencione alguém.`');
    }

    const points = parseInt(args[2]);
    if (isNaN(points)) {
      return message.reply('🚫 **Erro:** `Pontos Inválidos.`');
    }

    await db.add(`points_${user.id}`, points);

    return message.reply(`
<:891549976579149846:1066741710459248700> **Sucesso.** Foram adicionados \`${points}\` pontos a **${user.username}**.`);
  }
});

client.on('message', async message => {
  if (message.content.startsWith('!removepoints')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) {
      return message.reply('🚫 **Erro:** `Sem permissão.`');
    }

    const args = message.content.split(' ');
    if (args.length !== 3) {
      return message.reply('🚫 **Erro:** `!removepoints [usuário] [pontos].`');
    }

    const user = message.mentions.users.first();
    if (!user) {
      return message.reply('🚫 **Erro:** `Mencione alguém.`');
    }

    const points = parseInt(args[2]);
    if (isNaN(points)) {
      return message.reply('🚫 **Erro:** `Pontos Inválidos.`');
    }

    await db.subtract(`points_${user.id}`, points);

    return message.reply(`<:891549976579149846:1066741710459248700> **Sucesso.** Foram removidos \`${points}\` pontos a **${user.username}**.`);
  }
});

client.on('message', async message => {
  if (message.content.startsWith('!remove força')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) {
      return message.reply('🚫 **Erro:** `Sem permissão.`');
    }

    const args = message.content.split(' ');
    if (args.length !== 4) {
      return message.reply('🚫 **Erro:** `!remove [atributo] [usuário] [pontos].`');
    }

    const user = message.mentions.users.first();
    if (!user) {
      return message.reply('🚫 **Erro:** `Mencione alguém.`');
    }

    const points = parseInt(args[3]);
    if (isNaN(points)) {
      return message.reply('🚫 **Erro:** `Pontos Inválidos.`');
    }

    await db.subtract(`forca_${user.id}`, points);

    return message.reply(`<:891549976579149846:1066741710459248700> **Sucesso.** Foram removidos \`${points}\` pontos de força a **${user.username}**.`);
  }
});

client.on('message', async message => {
  if (message.content.startsWith('!remove velocidade')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) {
      return message.reply('🚫 **Erro:** `Sem permissão.`');
    }

    const args = message.content.split(' ');
    if (args.length !== 4) {
      return message.reply('🚫 **Erro:** `!remove [atributo] [usuário] [pontos].`');
    }

    const user = message.mentions.users.first();
    if (!user) {
      return message.reply('🚫 **Erro:** `Mencione alguém.`');
    }

    const points = parseInt(args[3]);
    if (isNaN(points)) {
      return message.reply('🚫 **Erro:** `Pontos Inválidos.`');
    }

    await db.subtract(`speed_${user.id}`, points);

    return message.reply(`<:891549976579149846:1066741710459248700> **Sucesso.** Foram removidos \`${points}\` pontos de velocidade a **${user.username}**.`);
  }
});

client.on('message', async message => {
  if (message.content.startsWith('!remove resistência')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) {
      return message.reply('🚫 **Erro:** `Sem permissão.`');
    }

    const args = message.content.split(' ');
    if (args.length !== 4) {
      return message.reply('🚫 **Erro:** `!remove [atributo] [usuário] [pontos].`');
    }

    const user = message.mentions.users.first();
    if (!user) {
      return message.reply('🚫 **Erro:** `Mencione alguém.`');
    }

    const points = parseInt(args[3]);
    if (isNaN(points)) {
      return message.reply('🚫 **Erro:** `Pontos Inválidos.`');
    }

    await db.subtract(`resist_${user.id}`, points);

    return message.reply(`<:891549976579149846:1066741710459248700> **Sucesso.** Foram removidos \`${points}\` pontos de resistência a **${user.username}**.`);
  }
});

client.on('message', async message => {
  if (message.content.startsWith('!remove fôlego')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) {
      return message.reply('🚫 **Erro:** `Sem permissão.`');
    }

    const args = message.content.split(' ');
    if (args.length !== 4) {
      return message.reply('🚫 **Erro:** `!remove [atributo] [usuário] [pontos].`');
    }

    const user = message.mentions.users.first();
    if (!user) {
      return message.reply('🚫 **Erro:** `Mencione alguém.`');
    }

    const points = parseInt(args[3]);
    if (isNaN(points)) {
      return message.reply('🚫 **Erro:** `Pontos Inválidos.`');
    }

    await db.subtract(`folego_${user.id}`, points);

    return message.reply(`<:891549976579149846:1066741710459248700> **Sucesso.** Foram removidos \`${points}\` pontos de fôlego a **${user.username}**.`);
  }
});

client.on('message', async message => {
  if (message.content.startsWith('!remove sangue')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) {
      return message.reply('🚫 **Erro:** `Sem permissão.`');
    }

    const args = message.content.split(' ');
    if (args.length !== 4) {
      return message.reply('🚫 **Erro:** `!remove [atributo] [usuário] [pontos].`');
    }

    const user = message.mentions.users.first();
    if (!user) {
      return message.reply('🚫 **Erro:** `Mencione alguém.`');
    }

    const points = parseInt(args[3]);
    if (isNaN(points)) {
      return message.reply('🚫 **Erro:** `Pontos Inválidos.`');
    }

    await db.subtract(`blood_${user.id}`, points);

    return message.reply(`<:891549976579149846:1066741710459248700> **Sucesso.** Foram removidos \`${points}\` pontos de sangue a **${user.username}**.`);
  }
});

client.on('message', async message => {
  if (message.content.startsWith('!add força')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) {
      return message.reply('🚫 **Erro:** `Sem permissão.`');
    }

    const args = message.content.split(' ');
    if (args.length !== 4) {
      return message.reply('🚫 **Erro:** `!add [atributo] [usuário] [pontos].`');
    }

    const user = message.mentions.users.first();
    if (!user) {
      return message.reply('🚫 **Erro:** `Mencione alguém.`');
    }

    const points = parseInt(args[3]);
    if (isNaN(points)) {
      return message.reply('🚫 **Erro:** `Pontos Inválidos.`');
    }

    
     const currentPoints = await db.fetch(`forca_${user.id}`) || 0;
    await db.set(`forca_${user.id}`, currentPoints + points);
    

    return message.reply(`<:891549976579149846:1066741710459248700> **Sucesso.** Foram adicionados \`${points}\` pontos de força a **${user.username}**.`);
  }
});

client.on('message', async message => {
  if (message.content.startsWith('!add velocidade')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) {
      return message.reply('🚫 **Erro:** `Sem permissão.`');
    }

    const args = message.content.split(' ');
    if (args.length !== 4) {
      return message.reply('🚫 **Erro:** `!add [atributo] [usuário] [pontos].`');
    }

    const user = message.mentions.users.first();
    if (!user) {
      return message.reply('🚫 **Erro:** `Mencione alguém.`');
    }

    const points = parseInt(args[3]);
    if (isNaN(points)) {
      return message.reply('🚫 **Erro:** `Pontos Inválidos.`');
    }

    
     const currentPoints = await db.fetch(`speed_${user.id}`) || 0;
    await db.set(`speed_${user.id}`, currentPoints + points);
    

    return message.reply(`<:891549976579149846:1066741710459248700> **Sucesso.** Foram adicionados \`${points}\` pontos de velocidade a **${user.username}**.`);
  }
});

client.on('message', async message => {
  if (message.content.startsWith('!add resistência')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) {
     return message.reply('🚫 **Erro:** `Sem permissão.`');
    }

    const args = message.content.split(' ');
    if (args.length !== 4) {
      return message.reply('🚫 **Erro:** `!add [atributo] [usuário] [pontos].`');
    }

    const user = message.mentions.users.first();
    if (!user) {
      return message.reply('🚫 **Erro:** `Mencione alguém.`');
    }

    const points = parseInt(args[3]);
    if (isNaN(points)) {
      return message.reply('🚫 **Erro:** `Pontos Inválidos.`');
    }

    
     const currentPoints = await db.fetch(`resist_${user.id}`) || 0;
    await db.set(`resist_${user.id}`, currentPoints + points);
    

    return message.reply(`<:891549976579149846:1066741710459248700> **Sucesso.** Foram adicionados \`${points}\` pontos de resistência a **${user.username}**.`);
  }
});

client.on('message', async message => {
  if (message.content.startsWith('!add fôlego')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) {
      return message.reply('🚫 **Erro:** `Sem permissão.`');
    }

    const args = message.content.split(' ');
    if (args.length !== 4) {
      return message.reply('🚫 **Erro:** `!add [atributo] [usuário] [pontos].`');
    }

    const user = message.mentions.users.first();
    if (!user) {
      return message.reply('🚫 **Erro:** `Mencione alguém.`');
    }

    const points = parseInt(args[3]);
    if (isNaN(points)) {
      return message.reply('🚫 **Erro:** `Pontos Inválidos.`');
    }

    
     const currentPoints = await db.fetch(`folego_${user.id}`) || 0;
    await db.set(`folego_${user.id}`, currentPoints + points);
    

    return message.reply(`<:891549976579149846:1066741710459248700> **Sucesso.** Foram adicionados \`${points}\` pontos de fôlego a **${user.username}**.`);
  }
});

client.on('message', async message => {
  if (message.content.startsWith('!add sangue')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) {
      return message.reply('🚫 **Erro:** `Sem permissão.`');
    }

    const args = message.content.split(' ');
    if (args.length !== 4) {
      return message.reply('🚫 **Erro:** `!add [atributo] [usuário] [pontos].`');
    }

    const user = message.mentions.users.first();
    if (!user) {
      return message.reply('🚫 **Erro:** `Mencione alguém.`');
    }

    const points = parseInt(args[3]);
    if (isNaN(points)) {
      return message.reply('🚫 **Erro:** `Pontos Inválidos.`');
    }

    
     const currentPoints = await db.fetch(`blood_${user.id}`) || 0;
    await db.set(`blood_${user.id}`, currentPoints + points);
    

    return message.reply(`<:891549976579149846:1066741710459248700> **Sucesso.** Foram adicionados \`${points}\` pontos de sangue a **${user.username}**.`);
  }
});

client.on("ready", () => {
  console.log(chalk.bold.red("O bot está online."));
  
   client.user.setPresence({
    activity: {
      name: "RPG",
      type: "STREAMING",
      url: "https://www.twitch.tv/diogocbc"
    }
  });

});

client.login("token");
