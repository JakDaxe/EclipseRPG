const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {

    //puxa as roles de habilidades
    const visão = message.guild.roles.cache.find(r => r.name === "⁀➷〘👀〙• Visão Aprimorada");
    const coragem = message.guild.roles.cache.find(r => r.name === "⁀➷〘💖〙• Coragem Extrema");
    const fôlego = message.guild.roles.cache.find(r => r.name === "⁀➷〘🫁〙• Fôlego Avançado");
    const maestria = message.guild.roles.cache.find(r => r.name === "⁀➷〘🥊〙• Maestria em Combate");
    const força = message.guild.roles.cache.find(r => r.name === "⁀➷〘💪〙• Força Sobre-Humana");
    const velocidade = message.guild.roles.cache.find(r => r.name === "⁀➷〘💨〙• Velocidade Sobre-Humana");
    const audição = message.guild.roles.cache.find(r => r.name === "⁀➷〘👂〙• Audição Aprimorada");
    const medicina = message.guild.roles.cache.find(r => r.name === "⁀➷〘💊〙• Maestria em Medicina");
    const vontade = message.guild.roles.cache.find(r => r.name === "⁀➷〘🔥〙• Força de Vontade Inabalável");
    const prodigio = message.guild.roles.cache.find(r => r.name === "⁀➷〘✨〙• Prodígio");
    const fôlegoavançado = message.guild.roles.cache.find(r => r.name === "⁀➷〘🫁〙• Fôlego Avançado");
    const crânio = message.guild.roles.cache.find(r => r.name === "⁀➷〘💀〙• Crânio Duro");
    const fisico = message.guild.roles.cache.find(r => r.name === "⁀➷〘🏋️〙• Físico Perfeito");
    const beleza = message.guild.roles.cache.find(r => r.name === "⁀➷〘💖〙• Beleza Extrema");
    const densidade = message.guild.roles.cache.find(r => r.name === "⁀➷〘💪〙• Densidade Muscular");
    const flexibilidade = message.guild.roles.cache.find(r => r.name === "⁀➷〘💪〙• Flexibilidade Corporal");
    const marechi = message.guild.roles.cache.find(r => r.name === "⁀➷〘🩸〙• Marechi");
    const paladar = message.guild.roles.cache.find(r => r.name === "⁀➷〘👅〙• Paladar Especial (Único)");
    const tato = message.guild.roles.cache.find(r => r.name === "⁀➷〘✋〙• Tato Aprimorado");
    const ambidestro = message.guild.roles.cache.find(r => r.name === "⁀➷〘⚔️〙• Ambidestro");
    const veneno = message.guild.roles.cache.find(r => r.name === "⁀➷〘💉〙• Imunidade a Venenos");
    const sonambulo = message.guild.roles.cache.find(r => r.name === "⁀➷〘😪〙• Sonâmbulo");
    const intelecto = message.guild.roles.cache.find(r => r.name === "⁀➷〘🧠〙• Intelecto Superior");
    
    
    //puxa as roles de familia
    const tomioka = message.guild.roles.cache.find(r => r.name === "⁀➷〘🌊〙• Tomioka");
    const iguro = message.guild.roles.cache.find(r => r.name === "⁀➷〘🐍〙• Iguro");
    const tsuyuri = message.guild.roles.cache.find(r => r.name === "⁀➷〘🪷〙• Tsuyuri");
    const hakuji = message.guild.roles.cache.find(r => r.name === "⁀➷〘🥊〙• Hakuji");
    const tengen = message.guild.roles.cache.find(r => r.name === "⁀➷〘🥷〙• Tengen");
    const kocho = message.guild.roles.cache.find(r => r.name === "⁀➷〘🦋〙• Kocho");
    const rengoku = message.guild.roles.cache.find(r => r.name === "⁀➷〘❤️‍🔥〙• Rengoku");
    const tokito = message.guild.roles.cache.find(r => r.name === "⁀➷〘🌬️〙• Tokito");
    const himejima = message.guild.roles.cache.find(r => r.name === "⁀➷〘🪨〙• Himejima");
    const kanroji = message.guild.roles.cache.find(r => r.name === "⁀➷〘💕〙• kanroji");
    const hashibira = message.guild.roles.cache.find(r => r.name === "⁀➷〘🐗〙• Hashibira");
    const shinazugawa = message.guild.roles.cache.find(r => r.name === "⁀➷〘🍃〙• Shinazugawa");
    const agatsuma = message.guild.roles.cache.find(r => r.name === "⁀➷〘⚡〙• Agatsuma");

    
     //index das familias
        const familias = [
  { name: `${tomioka}`, image: "https://media.discordapp.net/attachments/1067056840875192401/1068148257005510699/download_1.gif?width=573&height=322", benefits: `${visão}\n${coragem}`, description: "O clã Tomioka foi criado a partir da linhagem do Ex Hashira da água, Giyu Tomioka. Este é um clã com inúmeras habilidades.", cor: "#0A47F8"},
  { name: `${iguro}`, image: "https://media.discordapp.net/attachments/1067056840875192401/1068146876366454904/download.gif?width=573&height=322", benefits: `${visão}\n${coragem}`, description: "O clã Iguro cultuava uma deusa que possuía um corpo metade humano e metade cobra, firmando um pacto com ela e em troca de riqueza", cor: "#0AF811"},
  { name: `${tsuyuri}`, image: "https://media.discordapp.net/attachments/1067056840875192401/1068143294770581546/956944-Kimetsu-no-Yaiba-Kanao-Tsuyuri-black-hair-purple-eyes.jpg?width=630&height=483", benefits: `${visão}\n${fôlego}`, description: "A família Tsuyuri é mesclada com a familia Kocho e por isso eles possuem alguns dos mesmos benefícios", cor: "#FFB7DD" },
  { name: `${hakuji}`, image: "https://media.discordapp.net/attachments/1067056840875192401/1068133461220663346/akaza-demon-slayer.gif?width=576&height=324", benefits: `${maestria}\n${força}`, description: "Essa família possui uma limitada quantia de membros, porém todos eles possuem otimas habilidades de luta.", cor: "#000993" },
  { name: `${tengen}`, image: "https://media.discordapp.net/attachments/1067056840875192401/1068129919869128704/tengen-uzui.gif?width=576&height=324", benefits: `${audição}\n${velocidade}\n${visão}`, description: "A família tengen é uma família de shinobis.Todos os seus membros possuem diversas habilidades.", cor: "#000993" },
  { name: `${kocho}`, image: "https://media.discordapp.net/attachments/1067056840875192401/1068115544894603326/anime-girl-kocho-shinobu-anime-Favim.com-7791627.gif?width=799&height=447", benefits: `${medicina}\n${visão}`, description: "Especializada na área médica, a família Kocho, tem total conhecimento sobre medicina e venenos.", cor: "#7801CF" },
  { name: `${rengoku}`, image: "https://media.discordapp.net/attachments/1067056840875192401/1068038732135022662/8088188.jpg?width=911&height=512", benefits: `${vontade}\n${força}\n${intelecto}`, description: "A família Rengoku é conhecida por sua grande trilhagem de Hashiras por toda a história, sendo todos eles das chamas.", cor: "#FF5A02" },
   { name: `${tokito}`, image: "https://media.discordapp.net/attachments/1067056840875192401/1068034502384955432/download_1.gif?width=450&height=220", benefits: `${intelecto}\n${fôlego}\n${prodigio}`, description: "Geralmente calmos, os Tokito sempre pensam antes de agir e são ótimos em tudo o que fazem.", cor: "#B9FAFF" },
   { name: `${himejima}`, image: "https://media.discordapp.net/attachments/1067056840875192401/1068033328843870238/download.gif?width=573&height=322", benefits: `${força}\n${crânio}\n${fisico} (sorteio)`, description: "Todos os membros dessa família tem uma força fora do comum, sendo reconhecidos por isso na maioria das vezes.", cor: "#B04D27" },
   { name: `${kanroji}`, image: "https://media.discordapp.net/attachments/1067056840875192401/1068029363016175666/Tenormitsuri.gif?width=448&height=232", benefits: `${flexibilidade}\n${densidade}\n${beleza}`, description: "A família Kanroji também muito conhecida, pela extrema e incrível beleza de seus membros. Embora isso não signifique que são fracos.", cor: "#FF5FA3" },
   { name: `${shinazugawa}`, image: "https://media.discordapp.net/attachments/1067056840875192401/1068028584565952553/sanemi-demon.gif?width=576&height=324", benefits: `${marechi}\n${força}\n${paladar} (sorteio)`, description: "A família Shinazugawa possuí um dom em especial pois todos os membros dessa familia tem um grande potencial.", cor: "#7BFFBD" },
   { name: `${hashibira}`, image: "https://media.discordapp.net/attachments/1067056840875192401/1068023450117083246/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f727949...2f3230727035623675683033792d773d3d2d313038303236373137342e313638353439393361646237316337303737343531313736363932312e676966.gif?width=288&height=162", benefits: `${flexibilidade}\n${tato}\n${ambidestro}${veneno}${beleza}`, description: "A família Hashibira não é muito social,geralmente são loucos por luta e se etressam facilmente.", cor: "#C8C8C8" },
   { name: `${agatsuma}`, image: "https://media.discordapp.net/attachments/1067056840875192401/1068016082587230278/20230126_004130.gif?width=299&height=167", benefits: `${velocidade}\n${audição}\n${sonambulo}\n${intelecto}`, description: "A família de um dos três nossos protagonista da obra, Zenitsu Agatsuma. Ele é o melhor usuário da primeira forma da respiração do trovão, e o criador da última forma.", cor: "#FFEC00" },
];

    //sistema de rolar 
    const randomIndex = Math.floor(Math.random() * familias.length);
    const randomReward = familias[randomIndex];
 

    //resultado final
    const embed = new Discord.MessageEmbed()
      .setColor(randomReward.cor)
      .setDescription(`**Parabéns ${message.author}!** Você conseguiu a família: **${randomReward.name}**.\n\n${randomReward.description}\n\n**Benefícios**:\n${randomReward.benefits}`)
      .setImage(randomReward.image)
      .setTimestamp()
     
    message.channel.send(embed)
     
};


exports.help = {
  name: "familia",
  description: "Roll numa família."
};