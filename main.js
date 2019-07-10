const Discord = require('discord.js');
const bot = new Discord.Client();
const db = require('quick.db');

const fs = require('fs')


bot.on('message', message => {

        let msg = message.content.toUpperCase();
        let sender = message.author;
        let args = message.content.slice(prefix.length).trim().split(" ");
        let cmd = args.shift().toLowerCase();

        db.updateValue(message.author.id + message.guild.id, 1).then(i => {
            
        })

        // Handler 
        if (sender.bot) return;
        if (!message.content.startsWith(prefix)) return;
    
        try {
            let commandFile= require(`./commands/${cmd}.js`);
            commandFile.run(bot, message, args);
        } catch (e) {
            console.log(e.message);
        } finally {
            console.log(`${message.author.username} ran the command: ${cmd}`);
        }

        if (!message.content.startsWith(prefix)) return;
});


bot.on('ready', () => {
    console.log(`${bot.user.username}  starting.`);
    console.log(`Serving ${bot.guilds.size} guilds.`);
    bot.user.setActivity(`z!help / Guilds ${bot.guilds.size}`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/fixxylebest"
      });
});

bot.login('NTk3Nzc5Mjg2MDQwMjQ4MzQx.XSNDiA.XeLN29b3eqhi1oObesE6B-KuxZ4');