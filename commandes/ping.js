const Discord = require('discord.js');
const speedTest = require('speedtest-net');

exports.run = (bot, message, args) => {
    let startTime = Date.now();
    var speed = speedTest();
    message.channel.send("Calcul en cours ...").then((msg) => {
      speed.on('data',async data => {  
        let embed = new Discord.RichEmbed()
         .setColor('GREEN')
         .setDescription('⏲  Ping du bot ***' + ((new Date() - message.createdTimestamp)/200).toFixed(0) + ' ms***\n💓 Ping de l\'API***' + Math.round(bot.ping).toFixed(0) + '  ms***\n🖥Ping du serveur: ***'+data.server.ping+'***')
         .setFooter(`Upload: ${data.speeds.upload} Download: ${data.speeds.download}`)
         msg.edit("Ping en général",embed)
       });
    })
}
